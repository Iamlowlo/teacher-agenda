import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    // return Ember.RSVP.hash({
    //   alumns: this.store.findAll('alumns'),
    //   classes: this.store.findAll('class-list'),
    //   centers: this.store.findAll('centers')
    // });
    return this.store.findAll('classtime');
  }
});
