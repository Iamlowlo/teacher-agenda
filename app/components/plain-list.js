import Ember from 'ember';

export default Ember.Component.extend({
  tagName : 'ul',
  classNames : ['plain_list'],
  lastCenterName(key){
    return key;
  }
});
