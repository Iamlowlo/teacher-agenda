import DS from 'ember-data';

var Centers = DS.Model.extend({
  name : DS.attr('string'),
  address : DS.attr('string'),
  phone : DS.attr('number'),
  classtime : DS.hasMany('classtime', {async: true})
});

export default Centers;