import Ember from 'ember';

export default Ember.Component.extend({
  arg1:'arg1',
  arg2:'arg2',
  conditionalValue : Ember.computed('arg1','arg2',function(){
    switch (this.get('ifelse')){
      case 'if':
        return this.get('arg1')===this.get('arg2');
      break;
      case 'else':
      default:
        return this.get('arg1')!=this.get('arg2');
      break;
    }
  })
});
