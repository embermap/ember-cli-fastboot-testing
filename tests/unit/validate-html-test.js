import { validateHtml } from 'ember-cli-fastboot-testing/test-support/-private/validate-html';
import { module, test } from 'qunit';

module('Unit | validate-html', function() {

  module('validateHtml', function() {
    module('tags', function() {
      test('it will pass for a single tag', function(assert) {
        let html = '<b>hello world</b>';
        assert.ok(validateHtml(html));
      });

      test('it will pass for a self closing tag', function(assert) {
        let html = '<path x="1" />';
        assert.ok(validateHtml(html));
      });
    });

    module('attributes', function() {
      test('it will ignore valueless attribute parsing errors', function(assert) {
        let html = '<p data-paragraph>hello world</p>';
        assert.ok(validateHtml(html));
      });

      test('it will ignore unquoted attribute parsing errors', function(assert) {
        let html = '<div><p x=1>hello</p><div>';
        assert.ok(validateHtml(html));
      });
    });

    module('tree shape', function() {
      test('it will pass when an html document is valid', function(assert) {
        let html = '<div><p>hello</p><p>world</p></div>';
        assert.ok(validateHtml(html));
      });

      test('it will fail when an html document is invalid', function(assert) {
        // the opening tag p does not match the closing div tag
        let html = '<p><p>hello</p><p>world</p></div>';
        assert.notOk(validateHtml(html));
      });
    });
  });
});
