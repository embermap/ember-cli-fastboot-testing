import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  docsRoute(this, function() {
    this.route('quickstart');
    this.route('debugging');
    this.route('videos');
    this.route('html');
    this.route('document');
    this.route('status-code');
    this.route('visit');
    this.route('network-mocking');
  });

  this.route('examples', function() {
    this.route('redirects', function() {
      this.route('transition-to');
      this.route('replace-with');
    });

    this.route('query-parameters');

    this.route('request-object');

    this.route('network', function() {
      this.route('posts', function() {
        this.route('post', { path: ':post_id' });
      });

      this.route('graphql', function() {
        this.route('simple');
        this.route('variables', { path: 'variables/:id' });
      });

      this.route('other', function() {
        this.route('get-request');
        this.route('post-request');
        this.route('echo');
      });
    });

    this.route('errors', function() {
      this.route('throw-message');
      this.route('throw-error-object');
      this.route('access-document');
    });
  });

  this.route('not-found', { path: '/*path' });
});

export default Router;
