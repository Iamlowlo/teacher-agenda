import Ember from 'ember';

export default Ember.Component.extend({
  actions : {
    validateAndSubmit(){
      console.log('validate');
      console.log(this);
      console.log(this.get('submit')());
    }
  },
  onDidInsertElement : function(){
    console.log(this.get('submit')());
  }.on('didInsertElement')

});
