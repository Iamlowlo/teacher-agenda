import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let day = new Date().getDay()-1;
    day=(day<0)?"6":day.toString();
    let orderedClassunits = this.store.query('classunit', { orderBy: 'day', equalTo: day }).then(function(classunits){
      return classunits.sortBy('beginningTime');
    });
    // return the model when all the promisses are resolved
    return Ember.RSVP.hash({
      day : day,
      classunits : orderedClassunits
    });
  }
});
