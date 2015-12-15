import Ember from 'ember';
import TimeRelativeMixin from '../mixins/time-relative';

export default Ember.Component.extend(TimeRelativeMixin,{
  classNames : ['timetable_classunit'],
  onDidInsertElement : function(){
    let startTime = this.get('parentView.startTime')
    let gap = this.get('parentView.config.gap');
    //set column classname
    let cell_classname = 'cell_'+this.get('classunit.day')+'_';
    //find out in which cells class will start and end
    let classCellStart = (this.get('classunit.beginningTime')-startTime)/gap;
    let classCellEnd = (this.get('classunit.conclusionTime')-startTime)/gap;
    let cellHeight = document.getElementsByClassName('content_heading')[0].offsetHeight;
    let cell_start_classname = cell_classname + classCellStart;

    let styleHeight = (classCellEnd - classCellStart)*cellHeight;
    let styleString = new Ember.Handlebars.SafeString('height:'+styleHeight+'px;');
    this.get('element').setAttribute('style',styleString);
    document.getElementsByClassName(cell_start_classname)[0].appendChild(this.get('element'));
  }.on('didInsertElement')
});