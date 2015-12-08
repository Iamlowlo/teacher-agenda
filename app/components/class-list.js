import Ember from 'ember';
import TimeRelativeMixin from '../mixins/time-relative';
let $ = Ember.$;

export default Ember.Component.extend(TimeRelativeMixin,{
  tagName: 'li',
  classNames: ['dropable_list_element'],
  click(){
    var $this = $(this.element);
    $this.children('.main_info').children('.icon-keyboard_arrow_down').toggleClass('spinned_cw');
    $this.children('.dropable_info').toggleClass('active');
  }
});
