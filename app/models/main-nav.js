import DS from 'ember-data';

var MainNav =  DS.Model.extend({
      route : DS.attr('string'),
      name : DS.attr('string')
    });

export default MainNav;