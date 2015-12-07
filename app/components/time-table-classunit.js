import Ember from 'ember';
import TimeRelativeMixin from '../mixins/time-relative';

export default Ember.Component.extend(TimeRelativeMixin,{
  classNames : ['timetable_classunit'],
  onDidInsertElement : function(){
    //set column classname
    let cell_start_classname = 'cell_'+this.get('classunit.day')+'_';
    let cell_end_classname = 'cell_'+this.get('classunit.day')+'_';
    //retrieve class start/end and end hour
    let classStart = this.get('classunit.startTimeHours')+this.sexToDec(this.get('classunit.startTimeMinutes'));
    let classEnd = this.get('classunit.endTimeHours')+this.sexToDec(this.get('classunit.endTimeMinutes'));
    //find out difference between day start trough parent parameters
    classStart = classStart-this.get('parentView.startTime');
    classEnd = classEnd-this.get('parentView.startTime');
    //find out cell number
    classStart = classStart/this.sexToDec(this.get('parentView.config.gap'));
    classEnd = classEnd/this.sexToDec(this.get('parentView.config.gap'));
    let gapSize = classEnd - classStart;
    let cellHeight = document.getElementsByClassName('content_heading')[0].offsetHeight;
    cell_start_classname = cell_start_classname + classStart;
    cell_end_classname = cell_end_classname + classEnd;

    let cellStart = document.getElementsByClassName(cell_start_classname)[0];
    let styleHeight = gapSize*cellHeight;
    let styleString = new Ember.Handlebars.SafeString('height:'+styleHeight+'px;');
    this.get('element').setAttribute('style',styleString);
    cellStart.appendChild(this.get('element'));
  }.on('didInsertElement')
});