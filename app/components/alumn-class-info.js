import Ember from 'ember';
import TimeRelativeMixin from '../mixins/time-relative';

export default Ember.Component.extend(TimeRelativeMixin,{
  tagName: 'li',
  dayName : Ember.computed(function(){
    return this.weekDays[this.get('class').get('day')]
  }),
  startTime : Ember.computed(function(){
    var startTime = this.get('class').get('startTimeHours') + this.sexToDec(this.get('class').get('startTimeMinutes'));
    return this.hourBuilder(startTime);
  }),
  endTime : Ember.computed(function(){
    var endTime = this.get('class').get('endTimeHours') + this.sexToDec(this.get('class').get('endTimeMinutes'));
    return this.hourBuilder(endTime);
  }),
  didInsertElement : function(){
    console.log(this.get('class'));
    console.log(this.get('center'));
  }
});
