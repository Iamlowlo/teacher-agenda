import Ember from 'ember';
let $ = Ember.$;

export default Ember.Component.extend({
  tagName : 'nav',
  classNames : ['main_nav'],
  test : 'function',
  store : Ember.inject.service(),
  navigation  : Ember.computed(function(){
    var routes = [
      {name:'Index',
      route:'index'
    },
      {name:'Centers',
      route:'centers'
    },
      {name:'Alumns',
      route:'alumns'
    },
      {name:'Classes',
      route:'classunits'
    },
      {name:'Timetable',
      route:'timetable'
    }
    ];
    return routes;
  }),
  didInsertElement : function(){
    if($(document).width()<600){
      $(this.element).children('.togglable').addClass('collapsed');
    }
  }
});
