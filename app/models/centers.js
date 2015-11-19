import DS from 'ember-data';

var Centers = DS.Model.extend({
  name : DS.attr('string'),
  address : DS.attr('string'),
  phone : DS.attr('integer'),
  classes : DS.hasMany('classList', {async: true})
});

Centers.reopenClass({
  FIXTURES : [
    {
      id: 0,
      name: 'Creativa',
      address: 'Calle La Paz, 10',
      phone: 914358712,
      classes: [0,1,2,3,4,5]
    }
  ]
});

export default Centers;