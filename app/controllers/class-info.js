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
			this.set('nextDay',this.getNextDayTimestamp(this.model.get('day')));
		},
		addClassInfo : function(){
			let self = this;
			this.store.findRecord('classunit',this.model.get('id')).then(function(classunit){
				classunit.get('classinfo').then(function(classinfos){
					//check if exists a classinfo already set
					classinfos = classinfos.filter(function(classinfo,index){
						return classinfo.get('date') === self.get('nextDay');
					});
					if(classinfos.length<1){
						let classinfo = self.store.createRecord('classinfo',{
							'classunit' : classunit,
							'date' : self.get('nextDay')
						});
						let inputFieldListPromises = [];
						self.get('inputFieldList').forEach(function(inputField,index){
							// create record of every field
							let classinfofield = self.store.createRecord('classinfofield',{
								'name' : inputField.get('name'),
								'checked' : false,
								'classinfo' : classinfo,
								'content' : inputField.get('content')
							});
							// save it to store and keep the promise
							let classinfofieldPromise = classinfofield.save();
							inputFieldListPromises.push(classinfofieldPromise);
							// when this promise is resolved, clear field ad include field into info
							classinfofieldPromise.then(function(classinfofieldResponse){
								inputField.set('content','');
								classinfo.get('classinfofield').pushObject(classinfofieldResponse);
							});
						})
						// with all the promisses solved and added to the classinfo record,
						// then save it, add it to classunit and then save classunit.  
						Ember.RSVP.all(inputFieldListPromises).then(function(response){
							classinfo.save().then(function(classinfoResponse){
								classunit.get('classinfo').pushObject(classinfoResponse);
								classunit.save();
							});
						})
					}else{
						alert('Already set a class on this day')
					}
				})
			})
		}
	}
});
