import DS from 'ember-data';

var MainNav =  DS.Model.extend({
      route : DS.attr('string'),
      name : DS.attr('string')
    });

MainNav.reopenClass({
      FIXTURES : [{ id : 1,
                    route : 'index',
                    name : 'Index'},
                  { id : 2,
                    route : 'timetable',
                    name : 'Time table'},
                  { id : 3,
                    route : 'alumns',
                    name : 'Alumns'}
                  ]
    });

export default MainNav;