function Clock() {
  var $e = $('.clock');
  this.$e = $e;
  $e.html($('#clock-template').html());
  this.$h = $e.find('.hour');
  this.$m = $e.find('.minute');
  this.$s = $e.find('.second');
  this.start();
}

Clock.prototype.start = function() {
  var me = this;
  this.update();
  this.updateId = setInterval(function() {
    me.update();
  }, 1000);
};

Clock.prototype.update = function() {
  var now = new Date();
  this.setSecond(now.getSeconds());
  this.setMinute(now.getMinutes());
  this.setHour(now.getHours(), now.getMinutes());
};

Clock.prototype.setSecond = function(seconds) {
  var deg = 360 / 60 * seconds;
  this.$s.css({
    rotate: deg
  });
};

Clock.prototype.setMinute = function(minutes) {
  var deg = 360 / 60 * minutes;
  this.$m.css({
    rotate: deg
  });
};

Clock.prototype.setHour = function(hours, minutes) {
  var deg = 360 / 12 * ((hours + minutes / 60) % 12);
  this.$h.css({
    rotate: deg
  });
};

