import Ember from 'ember';

export function hour(params) {
  let hourtime = params[0]||0;
  let minutes = params[1]||0;
  minutes=(minutes.toString().length<2)?'0'+minutes:minutes;
  return hourtime+':'+minutes;
}

export default Ember.Helper.helper(hour);
