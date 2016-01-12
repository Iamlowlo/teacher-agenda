import Ember from 'ember';

export function inlineIf(params) {
  if(params[0]){
    return params[1];
  }else{
    return params[2];
  }
}

export default Ember.Helper.helper(inlineIf);
