import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['collapsible_table'],
  rows: [],
  cols: [],
  selected: 0,
  placeholder: '',
  didInsertElement : function(){
  },
  actions: {
    changeSelected(index, value){
      this.set('selected',index);
      this.set('placeholder',value);
    }
  }
});
