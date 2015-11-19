import DS from 'ember-data';

var Classes = DS.Model.extend({
  center : DS.belongsTo('centers'),
  day : DS.attr('integer'),
  startTimeHours : DS.attr('integer'),
  startTimeMinutes : DS.attr('integer'),
  endTimeHours : DS.attr('integer'),
  endTimeMinutes : DS.attr('integer'),
  alumn : DS.belongsTo('alumns')
});

Classes.reopenClass({
  FIXTURES : [
    {
      id: 0,
      center: 0,
      day: 1,
      startTimeHours: 16,
      startTimeMinutes: 30,
      endTimeHours: 17,
      endTimeMinutes: 30,
      alumn: 0
    },
    {
      id: 1,
      center: 0,
      day: 3,
      startTimeHours: 16,
      startTimeMinutes: 30,
      endTimeHours: 17,
      endTimeMinutes: 30,
      alumn: 0
    },
    {
      id: 2,
      center: 0,
      day: 5,
      startTimeHours: 16,
      startTimeMinutes: 30,
      endTimeHours: 17,
      endTimeMinutes: 30,
      alumn: 0
    },
    {
      id: 3,
      center: 0,
      day: 2,
      startTimeHours: 18,
      startTimeMinutes: 0,
      endTimeHours: 19,
      endTimeMinutes: 0,
      alumn: 1
    },
    {
      id: 4,
      center: 0,
      day: 4,
      startTimeHours: 18,
      startTimeMinutes: 30,
      endTimeHours: 19,
      endTimeMinutes: 30,
      alumn: 1
    },
    {
      id: 5,
      center: 0,
      day: 6,
      startTimeHours: 9,
      startTimeMinutes: 0,
      endTimeHours: 10,
      endTimeMinutes: 0,
      alumn: 2
    }
  ]
});
export default Classes;