import DS from 'ember-data';

export default DS.Model.extend({
  day : DS.attr('string'),
  beginningTime : DS.attr('number'),
  conclusionTime : DS.attr('number'),
  center : DS.belongsTo('center', { async: true }),
  alumn : DS.belongsTo('alumn', { async: true }),
  classtype : DS.belongsTo('classtype', { async: true }),
  classinfo : DS.hasMany('classinfo', { async: true })
});
