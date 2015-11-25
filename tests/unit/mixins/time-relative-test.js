import Ember from 'ember';
import TimeRelativeMixin from '../../../mixins/time-relative';
import { module, test } from 'qunit';

module('Unit | Mixin | time relative');

// Replace this with your real tests.
test('it works', function(assert) {
  let TimeRelativeObject = Ember.Object.extend(TimeRelativeMixin);
  let subject = TimeRelativeObject.create();
  assert.ok(subject);
});
