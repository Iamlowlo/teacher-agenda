import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('createContent');
  this.route('centers');
  this.route('alumns');
  this.route('classunits');
  this.route('timetable');
});

export default Router;
