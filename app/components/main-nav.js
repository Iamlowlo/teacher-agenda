import Ember from 'ember';
var $ = Ember.$;
export default Ember.Component.extend({
  tagName : 'nav',
  classNames : ['main_nav'],
  test : 'function',
  model(){
  	return this.store.findAll('mainNav');
  },
  navigation : [{ route : 'index',
                  name : 'Index'},
                { route : 'timetable',
                  name : 'Time table'},
                { route : 'alumns',
                  name : 'Alumns'}
                ],
  didInsertElement : function(){
    if($(document).width()<600){
      $(this.element).children('.togglable').addClass('collapsed');
    }
  }
});
