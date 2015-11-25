import DS from 'ember-data';

export default DS.Model.extend({
  name : DS.attr('string'),
  address : DS.attr('string'),
  phone : DS.attr('number'),
  classunit : DS.hasMany('classunit', {async: true})
});
