import Ember from 'ember';

export default Ember.Controller.extend({
  firstName:'',
  lastName:'',
  actions: {
    addAlumn (){
      this.store.createRecord('alumn',{
        id: this.get('model.length'),
        firstName : this.get('firstName'),
        lastName : this.get('lastName')
      }).save().then((alumn) => {
        this.set('firstName','');
        this.set('lastName','');
        this.transitionToRoute('alumns');
      });
    }
  }
});
