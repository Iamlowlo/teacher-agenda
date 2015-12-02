import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let day = new Date().getDay()-1;
    day=(day<0)?"6":day.toString();

    let todayClassunits = this.store.query('classunit', { orderBy: 'day', equalTo: day }).then(function(classunits){
      let orederedClassunits = {};
      let promissesArray = [];
      classunits.forEach(function(classunit,index){
        promissesArray.push(classunit.get('center'))
      });
      return Ember.RSVP.all(promissesArray).then(function(classCenters){
        classCenters.forEach(function(center,index){
          let centerName = center.get('name');

          console.log(classunits.get('content')[index]);
          if (!orederedClassunits[centerName]) {
            orederedClassunits[centerName]=[classunits.get('content')[index]];
          }else{
            orederedClassunits[centerName].push(classunits.get('content')[index]);
          }
        })
        return orederedClassunits;
      })
    });

    return Ember.RSVP.hash({
      day : day,
      classunits : todayClassunits
    });
  }
});
