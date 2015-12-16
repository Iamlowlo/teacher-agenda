import DS from 'ember-data';

export default DS.Model.extend({
  classtype : DS.belongsTo('classtype', { async: true }),
  day : DS.attr('number'),
  beginningTime : DS.attr('number'),
  conclusionTime : DS.attr('number'),
  center : DS.belongsTo('center', { async: true }),
  alumn : DS.belongsTo('alumn', { async: true })
});
