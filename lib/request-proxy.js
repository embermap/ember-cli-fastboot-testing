// This is subbed in for a fetch request in fastboot, 
// sending a request through a websocket to the browser to fulfil

let WebSocket = require('ws');
let RSVP = require('rsvp');
let { Headers, Response } = require('node-fetch');

// eslint-disable-next-line no-undef
module.exports = class RequestProxy {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
  }
  request(url, options) {
    return new RSVP.Promise((resolve, reject) => {
      let ws = new WebSocket(this.wsUrl);
      ws.on('open', () => {
        let requestTimeout = setTimeout(() => {
          reject('client relay failed to respond');
          ws.terminate();
        }, 3000);

        ws.on('message', (payload) => {
          try {
            let response = JSON.parse(payload);

            if (response.type === 'response') {
              clearTimeout(requestTimeout);

              let body = response.data.body;
              let status = response.data.status
              let statusText = response.data.statusText;

              let headers = new Headers();
              for (let key in response.headers) {
                headers.append(key, response.headers[key]);
              }

              resolve(new Response(body, {
                status,
                statusText,
                headers
              }));

              ws.terminate();
            }
          }
          catch(e) {
            // eslint-disable-next-line no-console
            console.error(e);
          }
        });

        let data = JSON.stringify({
          type: 'request',
          url,
          options
        });

        ws.send(data); // request data from client
      });
    })
  }
};