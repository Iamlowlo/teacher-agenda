import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['collapsible_table'],
  rows: [],
  cols: [],
  selected: 0,
  placeholder: '',
  actions: {
    changeSelected(index, value){
      this.set('selected',index);
      this.set('placeholder',value);
    }
  }
});
