import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  store : Ember.inject.service(),
  onDidInsertElement: function(){
    var thisClassId = this.get('class').get('id');
    this.get('store').findRecord('classList',thisClassId).then(function(classInfo){
      console.log(classInfo.get('day'));
    })
  }.on('didInsertElement'),
  click(){
    console.log(this.get('store').peekRecord('classList',0).get('day'));
  }
});
