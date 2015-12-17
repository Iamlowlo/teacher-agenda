import DS from 'ember-data';

export default DS.Model.extend({
  date : DS.attr('number'),
  classunit : DS.belongsTo('classunit', { async: true }),
  classinfofield : DS.hasMany('classinfo-field', { async: true })
});
