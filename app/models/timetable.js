import DS from 'ember-data';

var Timetable =  DS.Model.extend({
  startTimeHours : DS.attr('integer'),
  startTimeMinutes : DS.attr('integer'),
  endTimeHours : DS.attr('integer'),
  endTimeMinutes : DS.attr('integer'),
  gap : DS.attr('integer'),
  dayStart : DS.attr('integer'),
  dayQty : DS.attr('integer')
});

Timetable.reopenClass({
  FIXTURES : [
    {
      id: 1,
      startTimeHours: 8,
      startTimeMinutes: 0,
      endTimeHours: 21,
      endTimeMinutes: 0, 
      gap: 30,
      dayStart: 6,
      dayQty : 7 
    }
  ]
});

export default Timetable;