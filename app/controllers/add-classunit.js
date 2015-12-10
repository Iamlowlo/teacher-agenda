import Ember from 'ember';

export default Ember.Controller.extend({
  weekday:'',
  startHour:'',
  startMinutes:'',
  endHour:'',
  endMinutes:'',
  alumns: function(){
    let alumns = [];
    this.get('model.alumn').forEach(function(alumn){
      alumns.push({ value:alumn.get('id'), tag:alumn.get('fullName')});
    });
    return alumns;
  }.property('model.alumn.@each.id','model.alumn.@each.fullName'),
  centers: function(){
    let centers = [];
    this.get('model.center').forEach(function(alumn){
      centers.push({ value:alumn.get('id'), tag:alumn.get('name')});
    });
    return centers;
  }.property('model.center.@each.id','model.center.@each.name'),
  actions: {
    addClassunit (){
      console.log('adition stopped');
      // this.store.createRecord('classunit',{
      //   id: this.get('model.length')
      // }).save().then((classunit) => {
      //   this.transitionToRoute('classunits');
      // });
    }
  }
});
