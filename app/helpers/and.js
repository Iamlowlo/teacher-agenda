import Ember from 'ember';

export function and(params) {
  let result = true;
  for (var i = 0; i < params.length; i++) {
    result = result && !!params[i]
  };
  return result;
}

export default Ember.Helper.helper(and);
