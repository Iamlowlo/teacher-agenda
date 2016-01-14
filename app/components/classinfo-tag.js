import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'li',
  classNames: ['classinfoTag'],
	isToggable: '',
  isOpen: true,
  isEditing: false,
	isActive: Ember.computed('classTagActive','elementId',function(){
    return this.get('elementId')==this.get('classTagActive');
  }),
	actions: {
    toggleTag(){
      this.toggleProperty('isOpen');
    },
    passTag(){
      let self = this;
      this.get('classinfo.classinfofield').then(function(response){
        self.set('classTag',response);
      });
      self.set('classTagActive',this.get('elementId'));
		  self.set('isEditing',false);
		}
	}
});
