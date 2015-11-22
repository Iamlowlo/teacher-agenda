import Ember from 'ember';
import TimeRelativeMixin from '../mixins/time-relative';

const TimeTable = Ember.Component.extend(TimeRelativeMixin,{
      tagName : 'section',
      classNames : ['time_table'],
      store : Ember.inject.service(),
      onDidInsertElement : function(){
        var store = this.get('store');
        var self = this;
        store.findRecord('time-config',0).then(function(timetableData){
          console.log(timetableData)
          var timeMarkers = [];
          var startTime = timetableData.get('startTimeHours') + self.sexToDec(timetableData.get('startTimeMinutes'));
          var endTime = timetableData.get('endTimeHours') + self.sexToDec(timetableData.get('endTimeMinutes'));
          var gap = self.sexToDec(timetableData.get('gap'));
          for (var marker = startTime; marker < endTime; marker+=gap) {
            timeMarkers.push(self.hourBuilder(marker)+' - '+self.hourBuilder(marker+gap));
          }
          self.set('timeMarkers',timeMarkers);
          self.set('availableDays',self.getAvailableDays(timetableData.get('dayStart'),timetableData.get('dayQty')));
          self.set('initialIndex',timetableData.get('dayStart'));
          self.set('placeholder',self.get('availableDays').objectAt(0));
        });
      }.on('didInsertElement')
    });

export default TimeTable;