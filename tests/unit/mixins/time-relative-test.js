import Ember from 'ember';
import TimeRelativeMethodsMixin from '../../../mixins/time-relative-methods';
import { module, test } from 'qunit';

module('Unit | Mixin | time relative methods');

// Replace this with your real tests.
test('it works', function(assert) {
  var TimeRelativeMethodsObject = Ember.Object.extend(TimeRelativeMethodsMixin);
  var subject = TimeRelativeMethodsObject.create();
  assert.ok(subject);
});
