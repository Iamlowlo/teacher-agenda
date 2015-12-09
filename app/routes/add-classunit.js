import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      classunit : this.store.findAll('classunit'),
      alumn : this.store.findAll('alumn'),
      center : this.store.findAll('center'),
    });
  }
});
