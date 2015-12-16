import Ember from 'ember';

export default Ember.Mixin.create({
  sexToDec : function(dec){
    return dec/60;
  },
  decToSex : function(dec){
    return dec*60;
  },
  hourBuilder : function(timestamp){
    let time = new Date(timestamp);
    let minutes = time.getMinutes().toString();
    minutes = (minutes.length<2) ? '0'+minutes : minutes;
    return time.getHours()+':'+minutes;
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
    return new Date('0','0','0',hour,minutes).getTime();
  }
});
