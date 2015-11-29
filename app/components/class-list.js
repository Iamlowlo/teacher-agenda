import Ember from 'ember';
import TimeRelativeMixin from '../mixins/time-relative';
let $ = Ember.$;

export default Ember.Component.extend(TimeRelativeMixin,{
  tagName: 'ul',
  classNames: ['dropable_list'],
  dayList: Ember.computed.alias('weekDays'),
  onDidInsertElement : function(){
    $(this.element).on('click','.dropable_list_element',function(e){
      e.preventDefault();
      var $this = $(this);
      $this.children('.main_info').children('.icon-keyboard_arrow_down').toggleClass('spinned_cw')
      $this.children('.dropable_info').toggleClass('active')
    })
  }.on('didInsertElement')
});
