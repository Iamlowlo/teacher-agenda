import DS from 'ember-data';

var Timeconfig =  DS.Model.extend({
  startTimeHours : DS.attr(),
  startTimeMinutes : DS.attr(),
  endTimeHours : DS.attr(),
  endTimeMinutes : DS.attr(),
  gap : DS.attr(),
  dayStart : DS.attr(),
  dayQty : DS.attr()
});

Timeconfig.reopenClass({
  FIXTURES : [
    {
      id: 0,
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

export default Timeconfig;