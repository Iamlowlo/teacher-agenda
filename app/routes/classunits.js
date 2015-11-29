import Ember from 'ember';
import TimeRelativeMixin from '../mixins/time-relative';

export default Ember.Route.extend(TimeRelativeMixin,{
	model(){
		return Ember.RSVP.hash({
			days: this.get('weekDays'),
    		mon : this.store.query('classunit', { orderBy: 'day', equalTo: "0" } ),
    		tue : this.store.query('classunit', { orderBy: 'day', equalTo: "1" } ),
    		wed : this.store.query('classunit', { orderBy: 'day', equalTo: "2" } ),
    		thu : this.store.query('classunit', { orderBy: 'day', equalTo: "3" } ),
    		fri : this.store.query('classunit', { orderBy: 'day', equalTo: "4" } ),
    		sat : this.store.query('classunit', { orderBy: 'day', equalTo: "5" } ),
    		sun : this.store.query('classunit', { orderBy: 'day', equalTo: "6" } )
		});
	},
	days : 'asdassa',
	actions: {
		loading(transition,openingRoute){
    		console.log(this.get('weekDays'));
    		this.set('days',this.get('weekDays'));
    	}
	}
});
