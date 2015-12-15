import Ember from 'ember';
let $ = Ember.$;

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['dropable_list_element'],
  sortedClassunits : function(){
    return this.get('classunits').sortBy('beginningTime');
  }.property('classunits.@each.beginningTime'),
  click(){
    var $this = $(this.element);
    $this.children('.main_info').children('.icon-keyboard_arrow_down').toggleClass('spinned_cw');
    $this.children('.dropable_info').toggleClass('active');
  }
});
