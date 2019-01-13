import { htmlCompare, isValidHtml } from 'ember-cli-fastboot-testing/test-support/-private/validate-html';
import { module, test } from 'qunit';

module('Unit | validate-html', function() {

  module('htmlCompare', function() {
    module('tags', function() {
      test('it will match if all tag names are the same', function(assert) {
        let a = '<b>hello world</b>';
        let b = '<b>hello world</b>';

        assert.ok(htmlCompare(a, b));
      });

      test('it will fail if there are different tag names', function(assert) {
        let a = '<b>hello world</b>';
        let b = '<strong>hello world</strong>';

        assert.notOk(htmlCompare(a, b));
      });

      test('it will consider self closing and closing element tags the same', function(assert) {
        let a = '<path x="1" />';
        let b = '<path x="1"></path>';

        assert.ok(htmlCompare(a, b));
      });

    });

    module('attributes', function() {
      test('it will not compare attributes', function(assert) {
        let a = '<p x="1">hello</p>';
        let b = '<p x="2">hello</p>';

        assert.ok(htmlCompare(a, b));
      });
    });

    module('tree shape', function() {
      test('it will pass for two of the same trees', function(assert) {
        let a = '<div><p>hello</p><p>world</p></div>';
        let b = '<div><p>hello</p><p>world</p></div>';

        assert.ok(htmlCompare(a, b));
      });

      test('it will fail for two different sized trees', function(assert) {
        let a = '<p>hello</p>';
        let b = '<p>hello</p><p>world</p>';

        assert.notOk(htmlCompare(a, b));
      });

      test('it will fail for two nodes that have different child tags', function(assert) {
        let a = '<div><p>hello</p><p>world</p></div>';
        let b = '<div><p>hello</p><b>world</b></div>';

        assert.notOk(htmlCompare(a, b));
      });
    });

    module('html', function() {
      test('it will pass when an html document is valid', function(assert) {
        let a = '<div><p>hello</p><p>world</p></div>';
        let b = '<div><p>hello</p><p>world</p></div>';

        assert.ok(htmlCompare(a, b));
      });

      test('it will fail when an html document is invalid', function(assert) {
        // the opening tag p does not match the closing div tag
        let a = '<p><p>hello</p><p>world</p></div>';
        let b = '<p><p>hello</p><p>world</p></div>';

        assert.notOk(htmlCompare(a, b));
      });
    });
  });

  module('isValidHtml', function() {
    test('invalid html because attribute values are not quoted', function(assert) {
      let html = '<p x=1>hello</p>';

      assert.notOk(isValidHtml(html));
    });
  });
});
