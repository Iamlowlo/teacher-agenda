import DS from 'ember-data';

export default DS.Model.extend({
  name : DS.attr('string'),
  checked : DS.attr('boolean'),
  content : DS.attr('string'),
  classinfo : DS.belongsTo('classinfo', { async: true })
});
