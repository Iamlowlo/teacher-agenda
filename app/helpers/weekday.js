import Ember from 'ember';

export function weekday(params) {
  let dayNumber = params[0];
  let dayStart = params[1]||0;
  let dayQty = params[2]||7;
  let weekDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

  return weekDays[dayNumber];
}

export default Ember.Helper.helper(weekday);
