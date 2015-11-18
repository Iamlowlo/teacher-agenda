import Ember from 'ember';
var $ = Ember.$;
export default Ember.Component.extend({
  click : function(e){
    e.preventDefault();
    var $togglable = $(this.element).siblings('.togglable');
    if ($togglable.hasClass('collapsed')) {
      $togglable.css('height','auto');
    }else{
      $togglable.css('height','0');
    }
    $togglable.toggleClass('collapsed');
  }
});
