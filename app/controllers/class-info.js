import Ember from 'ember';

let Input = Ember.Object.extend({
	checked : false,
	content : '',
	name : ''
})

export default Ember.Controller.extend({
	isCreationMode : false,
  classTag: '',
  classField: '',
  inputFieldList: [],
	actions: {
		openCreationMode : function(){
			this.toggleProperty('isCreationMode');
			this.set('date','');
			let topics = this.get('model.classtype.topics');
			for (var i = 0; i < topics.length; i++) {
				let inputField = Input.create();
				inputField.set('name',topics[i]);
				this.get('inputFieldList').push(inputField);
			};
		},
		addClassInfo : function(){
			console.log(this.get('inputFieldList'));
		}
	}
});
