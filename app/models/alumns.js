import DS from 'ember-data';
import Ember from 'ember';

var Alumns = DS.Model.extend({
  firstName : DS.attr('string'),
  lastName : DS.attr('string'),
  fullName : Ember.computed('firstName','lastName',function(){
    return this.get('firstName')+' '+this.get('lastName');
  }),
  classes : DS.hasMany('classList', {async: true})
});

Alumns.reopenClass({
  FIXTURES : [
    {
      id: 0,
      firstName: 'Pepe',
      lastName: 'Pérez',
      classes: [0,1,2]
    },
    {
      id: 1,
      firstName: 'Manolo',
      lastName: 'Tolo',
      classes: [3,4]
    },
    {
      id: 2,
      firstName: 'Juan',
      lastName: 'Pan',
      classes: [5]
    }
  ]
});
export default Alumns;