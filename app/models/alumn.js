import DS from 'ember-data';
import Ember from 'ember';

var Alumns = DS.Model.extend({
  firstName : DS.attr('string'),
  lastName : DS.attr('string'),
  fullName : Ember.computed('firstName','lastName',function(){
    return this.get('firstName')+' '+this.get('lastName');
  }),
  class : DS.hasMany('classtime', {async: true})
});

export default Alumns;