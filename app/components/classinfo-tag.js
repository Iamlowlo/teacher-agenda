import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'li',
	classNames: ['classinfoTag'],
	isToggable: '',
	isOpen: true,
	actions: {
		toggleTag(){
			this.toggleProperty('isOpen');
		}
	}
});
