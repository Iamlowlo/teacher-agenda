import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'li',
	classNames: ['classinfoTag'],
	isToggable: '',
	isOpen: true,
	actions: {
    toggleTag(){
      this.toggleProperty('isOpen');
    },
		passTag(){
      let self = this;
      this.get('classinfo.classinfofield').then(function(response){
			  self.set('classTag',response);
      });
		}
	}
});
