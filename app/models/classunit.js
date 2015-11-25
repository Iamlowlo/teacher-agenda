import DS from 'ember-data';

export default DS.Model.extend({
  day : DS.attr('number'),
  startTimeHours : DS.attr('number'),
  startTimeMinutes : DS.attr('number'),
  endTimeHours : DS.attr('number'),
  endTimeMinutes : DS.attr('number'),
  center : DS.belongsTo('center', { async: true }),
  alumn : DS.belongsTo('alumn', { async: true })
});