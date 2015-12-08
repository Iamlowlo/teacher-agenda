import Ember from 'ember';
let $ = Ember.$;

export default Ember.Component.extend({
  classNames: ['placeholder_container'],
  click(){
    var $element = $(this.element);
    $element.find('.icon-keyboard_arrow_down').toggleClass('spinned_acw');
    $element.siblings('.header').toggleClass('active');
  }
});
