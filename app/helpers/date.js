import Ember from 'ember';

export function date(timestamp) {
  let date = new Date(parseInt(timestamp));
  return date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();
}

export default Ember.Helper.helper(date);
