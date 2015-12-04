import Ember from 'ember';

export default Ember.Component.extend({
  arg1:'arg1',
  arg2:'arg2',
  conditionalValue : Ember.computed('arg1','arg2',function(){
    console.log(this.get('arg2'));
    let result = this.get('arg1')===this.get('arg2');
    switch (this.get('ifelse')){
      case 'if':
        return result;
      break;
      case 'else':
      default:
        return !result;
      break;
    }
  })
});
