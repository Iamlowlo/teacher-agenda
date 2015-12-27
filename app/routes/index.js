import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let day = new Date().getDay()-1;
    day=(day<0)?"6":day.toString();

    let orderedClassunits = this.store.query('classunit', { orderBy: 'day', equalTo: day }).then(function(classunits){
      return classunits.sortBy('beginningTime');
    });

    return Ember.RSVP.hash({
      day : day,
      classunits : orderedClassunits
    });
  }
});
