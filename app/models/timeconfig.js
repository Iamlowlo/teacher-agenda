import DS from 'ember-data';

export default DS.Model.extend({
  startTimeHours : DS.attr('number'),
  startTimeMinutes : DS.attr('number'),
  endTimeHours : DS.attr('number'),
  endTimeMinutes : DS.attr('number'),
  gap : DS.attr('number'),
  dayStart : DS.attr('number'),
  dayQty : DS.attr('number')
});
