import Ember from 'ember';

export default Ember.Component.extend({
  classNames : ['ember_select'],
  value : '',
  options : [],
  actions : {
    setOption(option){
      this.set('value',option);
    }
  }
});
