import Ember from 'ember';
import $ from Ember.$;

export default Ember.Component.extend({
  tagName : 'nav',
  classNames : ['main_nav'],
  test : 'function',
  store : Ember.inject.service(),
  navigation  : Ember.computed(function(){
    return this.routeName;
  }),
  didInsertElement : function(){
    if($(document).width()<600){
      $(this.element).children('.togglable').addClass('collapsed');
    }
  }
});
