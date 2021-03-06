import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  firstName : DS.attr('string'),
  lastName : DS.attr('string'),
  fullName : Ember.computed('firstName','lastName',function(){
    return this.get('firstName')+' '+this.get('lastName');
  }),
  classunit : DS.hasMany('classunit', {async: true}),
  sortedClassunits : function(){
    return this.get('classunit').sortBy('day','beginningTime');
  }.property('classunit.@each.day')
});
