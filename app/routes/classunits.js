import Ember from 'ember';

export default Ember.Route.extend({
	model(){
    return this.store.query('classunit', { orderBy: 'center', equalTo: 'creativa' } );
		return Ember.RSVP.hash({
      mon: this.store.query('classunit', { day: '0' } ),
      tue: this.store.query('alumn',{ day : 1})
    });
	}
});
