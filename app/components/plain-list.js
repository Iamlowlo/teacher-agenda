import Ember from 'ember';

export default Ember.Component.extend({
  tagName : 'ul',
  classNames : ['plain_list', 'constrained_width'],
  lastCenterName(key){
    return key;
  }
});
