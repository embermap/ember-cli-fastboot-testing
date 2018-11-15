// This is placed in the testing middleware and relays
// messages to connected websockets

let WebSocket = require('ws');

// eslint-disable-next-line no-undef
module.exports = class RequestProxyServer {
  constructor() {
    this.wss = new WebSocket.Server({
      port: 7001
    });
  }

  listen() {
    this.wss.on('connection', (ws) => {
      ws.isAlive = true;
      ws.on('pong', function() {
        this.isAlive = true;
      });

      ws.on('message', (message) => {
        this.wss.clients.forEach(client => {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(message);
          }
        });
      });

      ws.on('close', () => {})
    });

    let interval = setInterval(() => {
      this.wss.clients.forEach(ws => {
        if (ws.isAlive === false) {
          return ws.terminate();
        }

        ws.isAlive = false;
        ws.ping(function() {});
      });
    }, 1000);
  }
};
