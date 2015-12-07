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
});

export default Router;
