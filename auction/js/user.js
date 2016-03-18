$(function(){

  var tag = 1;
  $(".user-content").touchwipe({

    wipeLeft:function(){

      if (tag == 1) {
        var disWidth = -($(window).width() - 45)+"px";
        $(".u-cont").css("-webkit-transform","translateX("+disWidth+")");
        tag = 0;
      };
      
      
    },
    wipeRight:function(){
      
      if (tag == 0) {
        var disWidth = "-25px";
        $(".u-cont").css("-webkit-transform","translateX("+disWidth+")");
        tag = 1;
      };

    },
    wipeUp:function(){

      if (tag == 1) {
        $(".u-cont").css("-webkit-transform","translate(-25px, -150px)");
      } else {
        var disWidth = -($(window).width() - 45)+"px";
        $(".u-cont").css("-webkit-transform","translate("+disWidth+", -150px)");
      }

    },
    wipeDown:function(){
      if (tag == 0) {
       var disWidth = -($(window).width() - 45)+"px";
        $(".u-cont").css("-webkit-transform","translate("+disWidth+", 0)");
      } else {
        
        $(".u-cont").css("-webkit-transform","translate(-25px, 0px)");
      };
      

    },
    min_move_x:20,
    preventDefaultEvents:true
  });

  aducateMes();

});

function aducateMes() {

  var winWidth = $(window).width();
  var autoWidth;
  var ucontWidth = winWidth*2;

  if(winWidth > 560 ) {

    autoWidth = 560-20;

  } else {

    autoWidth = winWidth-20;

  };

  $(".u-cont").css("width", ucontWidth+"px");
  $(".u-cont .unit").css("width", autoWidth+"px");

}