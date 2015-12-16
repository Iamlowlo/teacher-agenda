import DS from 'ember-data';

export default DS.Model.extend({
  name : DS.attr('string'),
  topics : DS.attr(),
  classunit : DS.hasMany('classunit', {async: true})
});
