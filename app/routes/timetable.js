import Ember from 'ember';

export default Ember.Route.extend({
	model(){
    return Ember.RSVP.hash({
      config : this.store.findRecord('timeconfig',0),
      classunits : this.store.findAll('classunit')
    });
	}
});
