import Ember from 'ember';
import TimeRelativeMixin from '../mixins/time-relative';

let Input = Ember.Object.extend({
	checked : false,
	content : '',
	name : ''
})

export default Ember.Controller.extend(TimeRelativeMixin,{
	isCreationMode : false,
	isEditionMode : false,
  classTag: '',
  inputFieldList: [],
	actions: {
		getClassTag : function(classinfo){
			let self = this;
			classinfo.get('classinfofield').then(function(response){
				response.forEach(function(item,index){
					if (item.get('name')==="Comments") {
						self.set('classComments',item);
						response=response.without(item);
					}
				})
				self.set('classTag',response);
			});
			this.send('cancelEditionMode');
		},
		openEditionMode : function(classinfoUnitId){
			this.set('isEditionMode',true);
		},
		closeEditionMode : function(classinfoUnitId){
			this.set('isEditionMode',false);
		},
		cancelEditionMode : function(classinfoUnitId){
			if (this.get('classTag')) {
				this.get('classTag').forEach(function(item,index){
					item.rollbackAttributes();
				});
				this.get('classComments').rollbackAttributes();
			}
			this.send('closeEditionMode');
		},
		saveChanges : function(classinfoUnitId){
			this.send('closeEditionMode');
		},
		openCreationMode : function(){
			this.toggleProperty('isCreationMode');
			this.set('date','');
			let topics = this.get('model.classtype.topics');
			for (var i = 0; i < topics.length; i++) {
				let inputField = Input.create();
				inputField.set('name',topics[i]);
				this.get('inputFieldList').push(inputField);
			};
			console.log(this.getNextDayTimestamp(this.model.get('day')));
		},
		addClassInfo : function(){
			console.log(this.model.get('id'));
			
		}
	}
});
