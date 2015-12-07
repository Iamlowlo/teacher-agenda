import Ember from 'ember';
let $ = Ember.$;

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['cell', 'header_cell'],
  classNameBindings : ['isActive:active'],
  index:-1,
  isActive : Ember.computed(function(){
    return this.selected===this.index;
  }),
  selectedValueChanged: Ember.observer('selected',function(){
      this.set('isActive',this.get('index')===this.get('selected'));
    }),
  click(){
    this.get('changeSelected')(this.get('index'),this.get('value'));
    $(this.element).closest('.header').removeClass('active');
  }
});
