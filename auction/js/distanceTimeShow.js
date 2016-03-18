Zepto(function(){
  //倒计时
  const endTime = new Date(2016, 2, 17, 24, 0, 0); //截止时间
  var showDistansTime = 0; // 显示倒计时时间
  window.onload = function()
  { 
    showDistansTime = getShowDistansTime();
    setInterval(
      function()
      {
        update();
      },
      50
    );
  };
  //获取结束时间和当前时间的差值
  function getShowDistansTime()
  {
    var nowTime = new Date(); 
    var distansTime = Math.round((endTime - nowTime.getTime())/1000);
    return distansTime > 0 ? distansTime : 0;
  };

  function update()
  {
    var dDay = parseInt(showDistansTime/86400);
    var dHour = parseInt((showDistansTime/3600)%24);
    var hourn = parseInt(showDistansTime/3600);
    var dMinute = parseInt((showDistansTime-hourn*3600)/60);
    var dSecond = showDistansTime%60;
    if(dDay < 10)
      dDay = "0" + dDay;
    if(dHour < 10)
      dHour = "0" + dHour;
    if(dMinute < 10)
      dMinute = "0" + dMinute;
    if(dSecond < 10)
      dSecond = "0" + dSecond;


    var nextDistansTime = getShowDistansTime();

    var nextSecond = nextDistansTime%60;  
    var curSecond = showDistansTime%60; 

    if( nextSecond != curSecond )
    {
      showDistansTime = nextDistansTime;
    };

    $('.time-day').text(dDay);
    $('.time-hour').text(dHour);
    $('.time-minute').text(dMinute);
    $('.time-second').text(dSecond);
  };


});      
