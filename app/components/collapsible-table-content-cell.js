import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['cell content_cell'],
  classNameBindings : ['isActive:active','compoundNameClass'],
  column_index:-1,
  isActive : Ember.computed(function(){
    return this.selected===this.column_index;
  }),
  compoundNameClass : Ember.computed(function(){
    return 'cell_'+this.get('column_index')+'_'+this.get('row_index');
  }),
  selectedValueChanged: Ember.observer('selected',function(){
    this.set('isActive',this.get('column_index')===this.get('selected'));
  })
});
