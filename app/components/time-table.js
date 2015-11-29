import Ember from 'ember';
import TimeRelativeMixin from '../mixins/time-relative';


export default Ember.Component.extend(TimeRelativeMixin,{
      tagName : 'section',
      classNames : ['time_table'],
      initialIndex : Ember.computed.alias('config.dayStart'),
      availableDays : Ember.computed(function(){
        return this.getAvailableDays(this.get('config').get('dayStart'),this.get('config').get('dayQty'));
      }),
      placeholder : Ember.computed(function(){
        return this.get('availableDays').objectAt(0);
      }),
      gap : Ember.computed(function(){
        return this.sexToDec(this.get('config').get('gap'));
      }),
      startTime : Ember.computed(function(){
        return this.get('config').get('startTimeHours')+this.sexToDec(this.get('config').get('startTimeMinutes'));
      }),
      endTime : Ember.computed(function(){
        return this.get('config').get('endTimeHours')+this.sexToDec(this.get('config').get('endTimeMinutes'));
      }),
      timeMarkers: Ember.computed(function(){
        var timeMarkers=[];
        var gap = this.sexToDec(this.get('config').get('gap'));
        for (var marker = this.get('startTime'); marker < this.get('endTime'); marker+=this.get('gap')) {
          timeMarkers.push(this.hourBuilder(marker)+' - '+this.hourBuilder(marker+gap));
        }
        return timeMarkers;
      }),
      onDidInsertElement : function(){
        console.log(this.get('availableDays'));
        // console.log('availableDays',this.get('availableDays'));
        // console.log('initialIndex',this.get('initialIndex'));
        // console.log('placeholder',this.get('placeholder'));
        // console.log('gap',this.get('gap'));
        // console.log('startTime',this.get('startTime'));
        // console.log('endTime',this.get('endTime'));
        // console.log('timeMarkers',this.get('timeMarkers'));
      }.on('didInsertElement')
});
