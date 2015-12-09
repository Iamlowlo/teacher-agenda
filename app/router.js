import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('centers');
  this.route('alumns');
  this.route('classunits');
  this.route('timetable');
  this.route('add-alumn');
  this.route('add-center');
  this.route('add-classunit');
});

export default Router;
