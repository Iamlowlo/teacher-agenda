import Ember from 'ember';

export default Ember.Mixin.create({
  sexToDec : function(dec){
    return dec/60;
  },
  decToSex : function(dec){
    return dec*60;
  },
  hourBuilder : function(decTime){
    var minutes = decTime%1;
    var hours = decTime-minutes;
    minutes = this.decToSex(minutes);
    minutes = (minutes.toString().length<2)?'0'+minutes:minutes;
    return hours+':'+minutes;
  },
  weekDays : ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
  getAvailableDays : function(start,qty){
    // given a week day start and qty of days returns the proper day name array
    if (start<0 || qty>this.weekDays.length) {
      return [];
    }
    var availableDays = [];
    for (var i = start; availableDays.length < this.weekDays.length; i++) {
      i = (i===this.weekDays.length)?0:i;
      availableDays.push(this.weekDays[i]);
    }
    this.weekDays=availableDays;
    return availableDays;
  },
  getTimestamp : function(hour,minutes){
    return new Date('1','1','1',hour,minutes).getTime();
  }
});
