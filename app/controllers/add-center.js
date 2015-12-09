import Ember from 'ember';

export default Ember.Controller.extend({
  centerName: '',
  centerAddress: '',
  centerPhone: '',
  actions: {
    addCenter(){
      this.store.createRecord('center',{
        id: this.get('model.length'),
        name : this.get('centerName'),
        address : this.get('centerAddress'),
        phone : this.get('centerPhone')
      }).save().then((center) => {
        this.set('centerName');
        this.set('centerAddress');
        this.set('centerPhone');
        this.transitionToRoute('centers');
      });
    }
  }
});
