var Action = function() {
  this.name = "";
  this.local = "";
  this.score = 0;
  this.recordStage = 0; //刚开始
  this.vIndex = 0;
  this.answer_status = -1;
  this.hasReword = false;

  this.awardConfig = {
    id: -1,
    key: "1",
    timestamp: "1"
  };

  this.oTop = -75;
  this.startTime = 0;
  this.endTime = 0;
  this.score = 0;

  this.touchIndex = 0;
  this.gameOver = false;

  this.gameData = [
    []
  ];
  this.gameStart = false;

  this.out = false;
  this.count = 0;

  this.level = 0;
  this.timeArray = [];

  this.hasKey = false;



  var myDate = new Date();
  myDate.getYear(); //获取当前年份(2位)
  myDate.getFullYear(); //获取完整的年份(4位,1970-????)
  myDate.getMonth(); //获取当前月份(0-11,0代表1月)
  myDate.getDate(); //获取当前日(1-31)
  myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
  myDate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)
  myDate.getHours(); //获取当前小时数(0-23)
  myDate.getMinutes(); //获取当前分钟数(0-59)
  myDate.getSeconds(); //获取当前秒数(0-59)
  myDate.getMilliseconds(); //获取当前毫秒数(0-999)
  myDate.toLocaleDateString(); //获取当前日期
  var mytime = myDate.toLocaleTimeString(); //获取当前时间
  myDate.toLocaleString(); //获取日期与时间

  this.closed = this.isCloseTime();

  this.colored = false;
  this.colored2 = false;
  //this.closed = true;

  // this.initEvents();
  // this.initBgMusic();
};
Action.prototype = {
  initEvents: function() {
    $('.logo').click(function(event) {
      $('.music').show();
      setTimeout(function() {
        $('.music').hide();
      }, 1000);
    });
  },
  initBgMusic: function() {
    var bgMusic = new Audio();
    this.bgMusic = bgMusic;
    bgMusic.src = ROOT_URL + 'media/bg.mp3';
    bgMusic.autoPlay = true;
    bgMusic.loop = true;
    bgMusic.play();
    $(document).one("touchstart", function() {
      bgMusic.play();
    });
  },
  isCloseTime: function() {
    // return true;  // debug
    // return false;  // debug
    var now = new Date();
    var hours = now.getHours();
    return (hours >= 0 && hours <= 5);
  },
  time_range: function(beginTime, endTime, nowTime) {
    var strb = beginTime.split(":");
    if (strb.length != 2) {
      return false;
    }

    var stre = endTime.split(":");
    if (stre.length != 2) {
      return false;
    }

    var strn = nowTime.split(":");
    if (stre.length != 2) {
      return false;
    }
    var b = new Date();
    var e = new Date();
    var n = new Date();

    b.setHours(strb[0]);
    b.setMinutes(strb[1]);
    e.setHours(stre[0]);
    e.setMinutes(stre[1]);
    n.setHours(strn[0]);
    n.setMinutes(strn[1]);

    if (n.getTime() - b.getTime() > 0 && n.getTime() - e.getTime() < 0) {
      return true;
    } else {
      // alert("当前时间是：" + n.getHours() + ":" + n.getMinutes() + "，不在该时间范围内！");
      return false;
    }
  },

  light_open: function() {
    //alert(1);
    // $("#light_1").removeClass("invisible");
  },
  show_color_2: function() {
    if (this.colored2) return;
    setTimeout(function() {
      $(".cc1").removeClass("invisible");
    }, 200);
    setTimeout(function() {
      $(".cc2").removeClass("invisible");
    }, 400);
    setTimeout(function() {
      $(".cc3").removeClass("invisible");
    }, 600);
    setTimeout(function() {
      $(".cc4").removeClass("invisible");
    }, 800);
    setTimeout(function() {
      $(".cc5").removeClass("invisible");
    }, 1000);
    setTimeout(function() {
      $(".cc6").removeClass("invisible");
    }, 1200);
    setTimeout(function() {
      $(".cc7").removeClass("invisible");
    }, 1400);
    setTimeout(function() {
      $(".cc8").removeClass("invisible");
    }, 1600);
    setTimeout(function() {
      $(".cc9").removeClass("invisible");
    }, 1800);

  },
  show_color: function() {

    if (this.colored) return;

    setTimeout(function() {
      $(".c1").removeClass("invisible");
    }, 300);
    setTimeout(function() {
      $(".c2").removeClass("invisible");
    }, 600);
    setTimeout(function() {
      $(".c3").removeClass("invisible");
    }, 900);
    setTimeout(function() {
      $(".c4").removeClass("invisible");
    }, 1200);
    setTimeout(function() {
      $(".c5").removeClass("invisible");
    }, 1500);

    this.colored = true;
  },
  // 点击优惠券
  award: function(args, dom) {
    $(dom).remove();
    var id = args[0];
    $("#card_" + id).removeClass("invisible");
    _smq.push(['custom', '杜蕾斯美术馆', '优惠券星星', '优惠券' + id]);
    _gaq.push(['_trackEvent', '杜蕾斯美术馆', '优惠券星星', '优惠券' + id]);
  },
  "hide_award": function() {
    $("#card_1").addClass("invisible");
    $("#card_2").addClass("invisible");
    $("#card_3").addClass("invisible");
  },
  show_dialog_1: function() {
    $(".dx").removeClass("invisible");
  },
  go_final: function() {
    $(".dx").addClass("invisible");
    a.showPage(8);
  },
  // 在商店页关闭
  go_back1: function() {
    $("#page_final").hide();
    $(".dx").addClass("invisible");
  },
  show: function(args) {
    $("#frame").html("").addClass("active");

    var painter_index = args[0]-1;
    console.log(painter_index);

    var imgurl = dataArr[painter_index];

    var image = new Image();

    image.addEventListener('load', function(_image, pp_index) {
      return function(e) {
        console.log('show', pp_index);

        $("#frame").html("");
        var p_container = $("<div class='img-content'></div>"); //画布容器
        var p_exp = $("<p class='img-exp'>作品详细描述</p>");
        var btn = $("<span class='back'></span>");
        $(btn).touch_click(function() {
          $("#frame").html("").removeClass("active");
        });
        var close = $("<span class='close'></span>");
        $(close).touch_click(function() {
          $("#frame").html("").removeClass("active");
        });

        $(_image).appendTo(p_container);
        $(p_exp).appendTo(p_container);

        $(p_container).appendTo("#frame");
        $(btn).appendTo("#frame");
        $(close).appendTo("#frame");
      };
    }(image, painter_index));
    image.src = imgurl;

    var id = args[0];
    _smq.push(['custom','杜蕾斯美术馆','图片','左' + id]);
    _gaq.push(['_trackEvent','杜蕾斯美术馆','图片','左' + id]);
  },

  go_back: function() {
    // 从wc返回
    $("#page_w").hide();

    // if(this.hasKey){
    //     a.page3TempX = 1280;
    //     var page3 = a.getPageByIndex(3);
    //     page3.moving_config.currentX = a.page3TempX;
    //     $("#wrap")[0].style.webkitTransform = " translateX(" + (- this.page3TempX)*scale + "px)";
    //     a.showPage(3);
    // }else{
    //     a.showPage(3);
    // }

    a.showPage(3);
    //a.showPage(6);
  },
  go_w: function() {
    a.showPage(7);
  },
  go_next: function() {
    a.showPage(4);
  },
  go_five: function() {
    if (this.hasKey) {
      a.showPage(8);
    } else {
      alert("need a key");
      a.showPage(5);
    }

  },
  go_six: function() {
    a.showPage(6);
  },
  // 进第一道门
  "enter": function() {
    //$("#page_1").addClass("dis");
    if (act.closed) {
      a.showPage(2);
    } else {
      a.showPage(1);
    }
    _smq.push(['custom', '杜蕾斯美术馆', '美术馆入口', '入口按钮']);
    _gaq.push(['_trackEvent', '杜蕾斯美术馆', '美术馆入口', '入口按钮']);
  },
  draw_over: function() {
    var base64 = a.canvas.toDataURL();
    $("#draw_result").attr("src", base64);

    $(".draw1").addClass("invisible");


    if (this.hasKey) {
      return;
    } else {

    }
  },
  show_draw: function() {
    // $("#arrow_key").addClass("invisible").removeClass("arrow-repeat");
    $(".mt").addClass("invisible");
    $(".draw1").removeClass("invisible");
  },
  get_key: function() {
    $(".mt").addClass("invisible");
    $(".key3").removeClass("invisible");
    setTimeout(function() {
      $(".key3").addClass("invisible");
    }, 1000)
    this.hasKey = true;
  },
  open_mt: function() {
    if (this.hasKey) return;

    setTimeout(function() {
      $(".ccc1").removeClass("invisible");
    }, 300);
    setTimeout(function() {
      $(".ccc2").removeClass("invisible");
    }, 600);
    setTimeout(function() {
      $(".ccc3").removeClass("invisible");
    }, 900);
    setTimeout(function() {
      $(".ccc4").removeClass("invisible");
    }, 1200);
    setTimeout(function() {
      $(".ccc5").removeClass("invisible");
    }, 1500);


    $("#arrow_key").removeClass("arrow-repeat").addClass("invisible");
    $(".mt").removeClass("invisible");
  },
  "open_door": function() {
    console.log(new Date(), 'open_door');
    if (!this.closed) {
      $("#door_close").addClass("invisible");
      $("#door_open").removeClass("invisible");
      $("#btn_push").addClass("invisible");
      $("#page_2 > .move-v").eq(0).addClass("invisible");
      $("#btn_open").addClass("invisible");
      setTimeout(function() {
        a.showPage(3);
      }, 100);
      // a.showPage(3);
    } else {
      $("#page_2 > .move-v").eq(0).addClass("invisible");
      $("#btn_open").addClass("invisible");
      $(".d1").removeClass("invisible");
    }
  },
  'dialog2': function() {
    $('.d2').addClass('invisible');
    $("#page_2 > .move-v").eq(0).addClass("invisible");
    $("#btn_open").addClass("invisible");
    $(".d1").removeClass("invisible");
  },
  "close_d": function() {
    $(".d1").addClass("invisible");
    $(".d2").addClass("invisible");
  },
  "enter_m": function() {
    $(".d1").addClass("invisible");
    $(".d2").addClass("invisible");
    a.showPage(8, 2);
  },
  "enter_m2": function() {
    $(".d1").addClass("invisible");
    $(".d2").addClass("invisible");
    a.showPage(8, 1);
  },
  "enter_door": function() {
    a.showPage(3);
  },
  "dis_pop": function(args) {
    $(".pop").eq(args[0] - 1).addClass("invisible");

  },
  "open_2": function() {
    if (this.hasKey) {
      //已经拿到钥匙
      $("#door_2").removeClass("invisible");
      setTimeout(function() {
        a.showPage(8);
      }, 1000)
    } else {
      $("#d3").removeClass("invisible");
      setTimeout(function() {
        $("#d3").addClass("invisible");
      }, 1000)
    }
  },
  "drop": function() {
    var isClose = this.isCloseTime();
    // console.log('isClose', isClose);
    if (isClose) {
      $(".d2").removeClass("invisible");
      $("#t1").addClass("drop-down");
      $("#t2").addClass("drop-down");
    } else {
      // console.log('不在时间区域');
    }
  },
  "link": function() {
    _smq.push(['custom', '51空中艺术馆', '51空中艺术馆', 'APP下载']);
    _gaq.push(['_trackEvent','51空中艺术馆', '51空中艺术馆', 'APP下载']);
    window.location.href = 'http://www.baidu.com';
  },
  "getAvgCount": function() {
    var count = 0;
    var currentTime = (new Date()).getTime();
    for (var i = 0; i < this.timeArray.length; i++) {
      if (currentTime < this.timeArray[i] + 1000) {
        count++;
      }
    }
    return count;
  },
  "rule": function() {
    $("#about").show();
  },
  "show_form": function() {
    $("footer").show();
    $("#wrap > header > span").hide();
    a.page_index = 6;
    var page = a.getPageByIndex(a.page_index);
    a.playStage(page.id, 1);
    a.playStage(page.id, 3);
    $("#pager").playNext(a.page_index, function() {

    }, "top");
  },
  "moveStep": function(_article) {
    var articles = $(".article");
    for (var i = 0; i < 5; i++) {
      var _a = articles[i];
      var _aIndex = parseInt($(_a).attr("data-index"));
      _a.style.webkitTransform = "translateY(" + (200 - (_aIndex - act.touchIndex) * 100) + "%)";
      _a.style.webkitAnimationDuration = "100ms";
      _a.style.webkitTransitionDuration = "100ms";
    }
  },
  "stepCheck": function(itemIndex, _item) {
    if (!act.gameStart) return;
    if (act.touchIndex == 0) {
      $("#start_btn").hide();
      $("#text").hide();
    }
    if (act.gameData[act.touchIndex][itemIndex] > 0) {
      $(_item).addClass("hide");
      if (act.touchIndex == 49) {
        act.win();
        return;
      }
      act.touchIndex++;
      act.moveStep();
    } else {
      act.game_over();
    }
  },
  "repeatStep": function() {
    var articles = $(".article");
    for (var i = 0; i < 5; i++) {
      var _a = articles[i];
      var _aIndex = parseInt($(_a).attr("data-index"));
      if (_aIndex < act.touchIndex - 1) {
        var items = $(_a).find("span").attr("class", "");
        for (var k = 0; k < items.length; k++) {
          var _item = items[k];
          var itemType = act.gameData[_aIndex + 5][k];
          if (itemType > 0) {
            $(_item).addClass("item").addClass("item_" + itemType);
          }
        }
        _a.style.webkitTransform = "translateY(-100%)";
        _a.style.webkitAnimationDuration = "0ms";
        _a.style.webkitTransitionDuration = "0ms";
        $(_a).attr("data-index", _aIndex + 5);
      }
    }
  },
  "share": function() {

    console.log(666);
    $('#share').show();

    $('#share').click(function(event) {
      $('#share').hide();
    });

    _smq.push(['custom', '杜蕾斯美术馆', '美术馆商店', '立即分享']);
    _gaq.push(['_trackEvent','杜蕾斯美术馆', '美术馆商店', '立即分享']);
  },
  "init_page": function() {

  },
  "about": function() {
    $("#about").show().touch_click(function() {
      $("#about").hide();
    });
  },
  "stop_swip": function() {
    $(".swip").addClass("swip_stop").removeClass("swip");
  },
  "continue_swip": function() {
    $(".swip_stop").addClass("swip").removeClass("swip_stop");
  },
  "getUrlParam": function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return (r[2]);
    return null; //返回参数值
  },
  "callback": function(callback) {
    setTimeout(function() {
      callback();
    }, 100)
  }
}
