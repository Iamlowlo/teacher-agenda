import Ember from 'ember';

const ValidatedField = Ember.Component.extend({
  tagName : 'label',
  classNames : ['field validated_field'],
  classNameBindings : ['isUnvalid:unvalid'],
  isUnvalid : false,
  errorMsgs : [],
  validation : Ember.computed(function(){
  	return this.get('params');
  })
});

ValidatedField.reopenClass({
  positionalParams: "params"
});

export default ValidatedField;