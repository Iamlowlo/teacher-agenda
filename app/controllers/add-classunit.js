import Ember from 'ember';

export default Ember.Controller.extend({
  alumns: Ember.computed(function(){
    let alumns = [];
    this.store.findRecord('alumn', 1).then(function(alumns){
      console.log(alumns);
    })
    // this.get('model.alumn').then(function(alumnsFound){
    //   console.log(alumnsFound);
    // })
  }),
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
