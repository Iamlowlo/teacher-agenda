import Ember from 'ember';
import TimeRelativeMixin from '../mixins/time-relative';


export default Ember.Component.extend(TimeRelativeMixin,{
  tagName : 'section',
  classNames : ['time_table'],
  availableDays : Ember.computed(function(){
    return this.getAvailableDays(this.get('config.dayStart'),this.get('config.dayQty'));
  }),
  placeholder : Ember.computed(function(){
    return this.get('availableDays').objectAt(0);
  }),
  startTime : Ember.computed.alias('config.beginningTime'),
  endTime : Ember.computed.alias('config.conclusionTime'),
  timeMarkers: Ember.computed(function(){
    var timeMarkers=[];
    var gap = this.get('config.gap');
    for (var marker = this.get('startTime'); marker < this.get('endTime'); marker+=gap) {
      timeMarkers.push(this.hourBuilder(marker)+' - '+this.hourBuilder(marker+gap));
    }
    return timeMarkers;
  })
});
