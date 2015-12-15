import Ember from 'ember';

export function hour(timestamp) {
  if (timestamp[0]) {
    let time = new Date(timestamp[0]);
    let minutes = time.getMinutes().toString();
    minutes = (minutes.length<2) ? '0'+minutes : minutes;
    return time.getHours()+':'+minutes;
  }
}

export default Ember.Helper.helper(hour);
