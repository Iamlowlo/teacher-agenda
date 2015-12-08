import Ember from 'ember';

export default Ember.Component.extend({
  arg1:'arg1',
  arg2:'arg2',
  conditionalValue : Ember.computed('arg1','arg2',function(){
    let result = this.get('arg1')===this.get('arg2');
    switch (this.get('ifelse')){
      case 'if':
        return result;
      case 'else':
        return !result;
      default:
        return !result;
    }
  })
});
