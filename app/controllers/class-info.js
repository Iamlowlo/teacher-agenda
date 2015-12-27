import Ember from 'ember';

export default Ember.Controller.extend({
	isCreationMode : false,
  classTag: '',
	actions: {
		openCreationMode : function(){
			this.toggleProperty('isCreationMode');
		},
		addClassInfo : function(){
			console.log('addClassInfo');
		}
	}
});
