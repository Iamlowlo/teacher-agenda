import Ember from 'ember';
import TimeRelativeMixin from '../mixins/time-relative';

export default Ember.Controller.extend(TimeRelativeMixin,{
  center:'',
  alumn:'',
  weekday:'',
  startHour:'',
  startMinutes:'',
  startTime : Ember.computed('startHour','startMinutes',function(){
    return this.getTimestamp(this.get('startHour'),this.get('startMinutes'));
  }),
  endHour:'',
  endMinutes:'',
  endTime : Ember.computed('endHour','endMinutes',function(){
    return this.getTimestamp(this.get('endHour'),this.get('endMinutes'));
  }),
  alumns: function(){
    let alumns = [];
    this.get('model.alumn').forEach(function(alumn){
      alumns.push({ value:alumn.get('id'), tag:alumn.get('fullName')});
    });
    return alumns;
  }.property('model.alumn.@each.id','model.alumn.@each.fullName'),
  centers: function(){
    let centers = [];
    this.get('model.center').forEach(function(alumn){
      centers.push({ value:alumn.get('id'), tag:alumn.get('name')});
    });
    return centers;
  }.property('model.center.@each.id','model.center.@each.name'),
  actions: {
    addClassunit (){
      let self = this;
      let overlappingCheck = false;
      this.store.query('classunit', { orderBy:'day', equalTo: this.get('weekday')}).then(function(results){
        results.forEach(function(result){
          let resultStartTime = self.getTimestamp(result.get('startTimeHours'),result.get('startTimeMinutes'));
          let resultEndTime = self.getTimestamp(result.get('endTimeHours'),result.get('endTimeMinutes'));
          let startTime = self.get('startTime');
          let endTime = self.get('endTime');
          if (  startTime>=resultStartTime && startTime<resultEndTime ||
                (endTime>resultStartTime && endTime<=resultEndTime) ||
                (startTime<=resultStartTime && endTime>=resultEndTime) ) {
            overlappingCheck = true;
          }
        });
        if (!overlappingCheck) {
          let alumn = self.store.peekRecord('alumn',self.get('alumn'));
          let center = self.store.peekRecord('center',self.get('center'));
          let classunit = self.store.createRecord('classunit',{
            id : self.get('model.classunit.length'),
            alumn : alumn,
            center : center,
            day : self.get('weekday'),
            startTimeHours : self.get('startHour'),
            startTimeMinutes : self.get('startMinutes'),
            endTimeHours : self.get('endHour'),
            endTimeMinutes : self.get('endMinutes')
          });
          classunit.save();
          alumn.get('classunit').pushObject(classunit);
          alumn.save();
          center.get('classunit').pushObject(classunit);
          center.save();
        }else{
          console.log('adition stopped');
        }
        // }).save().then((classunit) => {
        //   this.transitionToRoute('classunits');
        // });
      })
    }
  }
});
