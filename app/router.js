import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('timetable');
  this.route('alumns');
  this.route('centers');
  this.route('classes');
});

export default Router;
