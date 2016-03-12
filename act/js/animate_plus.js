var Animate = function(_config) {
  this.config = _config;
  this.pages = _config.pages;
  this.page_index = 0;

  this.canvas = null;
  this.ctx = null;
  this.cx = 0;

  this.move_type = "gyro";

  this.currentCenter = 480;

  this.startX = 0;
  this.page3LastX = 0;
  this.page3TempX = 0;
  this.page3First = true;
  this.page3Waiting = false;

  this.oIndex = -1;

  this.windowWidth = $(window).width();
  this.animatedWcIcon = false;
};

Animate.prototype = {
  initSwipe: function() {
    if (this.initedSwipe) return;
    this.initedSwipe = true;

    $("#wrap").swip({
      start: function(x, y) {
        a.start_moving(x, y);
      },
      moving: function(x, y, bx, by) {
        a.move_type = "touch";
        a.moving(x, bx);
      },
      speed: function(x, y) {
        a.move_type = "gyro";
        a.stopping(x);
      }
    });
  },
  start: function() {
    a.page_index = 0;
    $("#loader").hide();
    this.showPage(0);

    $('#page_1').attr('data-depth', 1);
    $('#wrap').parallax({
      limitY: 0,
      limitX: 150,
      scalarX: 50,
    });

  },


  start_moving: function(x, y) {
    if (this.isOver) return;

    if (a.page_index !== 3) return;

    if (a.page_index === 3) {
      if (!this.isHandHidden) {
        this.isHandHidden = true;
        setTimeout(function() {
          $('.hand').hide();
        }, 2000);
      }
    }

    var page3 = this.getPageByIndex(3);
    this.page3TempX = page3.moving_config.currentX;

    if (!this.page3FirstPos) {
      var temp = $('#page_3')[0].style['-webkit-transform'];
      var reg = new RegExp('translateX(.*)');
      this.page3FirstPos = reg.exec(temp)[0];
    }

    // 首尾利用page3
    if (page3.moving_config.currentX < 1200) {
      $("#page_3").css("-webkit-transform", " scale(" + scale + ") " + this.page3FirstPos);
    }

    if (page3.moving_config.currentX > 1800) {
      var page_center = 160 - 1280 - 1280 + 480 - 320 - 320; //把页面的标记中心移动到页面中心
      var screen_centre = css_width / 2; //屏幕中心
      var div_center = page_center; //场景定位线
      var distance = -screen_centre + div_center; //相差的距离
      distance -= 480 - screen_centre - 320;
      $(".dxx").removeClass("invisible").addClass("repeat-x");
      $("#page_3").css("-webkit-transform", " scale(" + scale + ") translateX(" + -distance + "px)");
    }

    //$("#page_3").css("-webkit-transform"," scale(" + scale + ") translateX(" + -distance + "px)");
  },
  moving: function(x, bx) {
    if (this.isOver) return;

    // console.log('page#' + this.page_index, x, bx);
    if (this.page_index < 3) {
      var page = this.getCurrentPage();
      var pid = page.id;

      if (page.bound.width < css_width) {
        return;
      }
      //在page上增加一些页面定位属性
      var distance = x + page.moving_config.currentX;
      if (distance < 0) {
        if (page.id == "page_3") {
          //this.showPage(6);
          return;
        }
        if (page.id == "page_4") {
          this.showPage(3);
          return;
        }
        return;
      } else if (distance > page.bound.width - css_width) {

        return;
      }
      $("#" + pid)[0].style.webkitTransform = " scale(" + scale + ") translateX(" + (-x - page.moving_config.currentX) + "px)";
    } else if (this.page_index == 3) {
      //超长画卷
      var page3 = this.getPageByIndex(3);

      //if(x < 0)return;
      // if(bx){
      //     var page3 = this.getPageByIndex(3);
      //     this.page3TempX = page3.moving_config.currentX
      //     return;
      // }
      // if(x < 0){
      //     return;
      // }


      //var distance = x + page3.moving_config.currentX;
      var distance = x + this.page3TempX;
      // page3.moving_config.currentX = distance;

      if (distance < 0) return;
      var screen_centre = css_width / 2;
      var endX = 3040 - css_width;
      // if (distance > (2560 + css_width / 2)) {
      if (distance > endX) {
        // var rw = (2560 + css_width / 2) / 508 * $("#wrap").height();
        var rw = endX / 508 * $("#wrap").height();
        $("#wrap")[0].style.webkitTransform = " translateX(" + -rw + "px)";
        return;
      }

      page3.moving_config.currentX = distance;

      $("#wrap")[0].style.webkitTransform = " translateX(" + (-x - this.page3TempX) * scale + "px)";
    }
    //$("header").html((-x - this.page3TempX)*scale);
  },
  stopping: function(x) {
    if (this.isOver) return;

    //alert(this.page_index);
    if (this.page_index < 3) {
      var page = this.getCurrentPage();
      var pid = page.id;

      var distance = x + page.moving_config.currentX;
      if (distance < 0) {
        page.moving_config.currentX = 0;
        return;
      } else if (distance > page.bound.width - css_width) {
        page.moving_config.currentX = page.bound.width - css_width;
        return
      }

      page.moving_config.currentX += x;
    } else {
      return;
      var page3 = this.getPageByIndex(3);
      page3.moving_config.currentX += x;

      var distance = page3.moving_config.currentX;

      if (distance > (2560 + css_width / 2)) {
        page3.moving_config.currentX = (2560 + css_width / 2);
        return;
      }

      if (page3.moving_config.currentX > 1800) {
        var page_center = 160 - 1280 - 1280 + 480 - 320 - 320; //把页面的标记中心移动到页面中心

        var screen_centre = css_width / 2; //屏幕中心
        var div_center = page_center; //场景定位线
        var distance = -screen_centre + div_center; //相差的距离


        $("#page_3").css("-webkit-transform", " scale(" + scale + ") translateX(" + -distance + "px)");
      }
      //page4.moving_config.currentX += x;
      //page5.moving_config.currentX += x;
      //page6.moving_config.currentX += x;
    }

  },
  initPage1Events: function() {
    $(document).bind('touchstart', function() {
      return false;
    });
  },
  clearPage1Events: function() {
    if (this.clearPage1EventsDone) return;
    this.clearPage1EventsDone = true;

    $(document).unbind('touchstart');
  },
  initPage3Events: function() {
    if (this.initPage3EventsDone) return;
    this.initPage3EventsDone = true;

    $('#frame').bind('touchstart', function() {
      return false;
    });
    var me = this;
    $(document).on('touchstart', '.light-btn', function() {
      // console.log('touchstart');
      me.lightId = setInterval(function() {
        $('#light_1').toggleClass('invisible');
        $('.ctrl-round, .ctrl-round1, .ctrl-round2').removeClass('active');
      }, 100);
      return false;
    });
    $(document).on('touchend', '.light-btn', function() {
      // console.log('touchend');
      clearInterval(me.lightId);
      $('#light_1').addClass('invisible');
      $('.ctrl-round, .ctrl-round1, .ctrl-round2').addClass('active');
    });
  },
  firstShowPage3: function() {
    $("#page_1").remove();
    $("#page_night").remove();
    this.page_index = 3;
    var page6 = this.getPageByIndex(6);

    if (page6.finished) {
      this.page3First = false;

      $("#loader").hide();
      var $scaleDoor = $('#page_2 .scale-door');
      $scaleDoor.css('z-index', 10000).removeClass('invisible').siblings().hide();

      var TRANSIT_MS = 2000;
      $scaleDoor.css({
        'z-index': 10000
      }).transition({
        scale: 10,
        opacity: 0.4
      }, TRANSIT_MS);
      var me = this;
      setTimeout(function() {
        for (var i = 3; i <= 6; i++) {
          var page = me.getPageByIndex(i);
          render.renderPage(page);
        }

        if (!this.clock) {
          // console.log('new Clock');
          this.clock = new Clock();
        }

        $("#page_2").remove();
      }, TRANSIT_MS * 0.4);
    } else {
      this.page3Waiting = true;
      $("#loader").show();
    }
  },
  showPage: function(index, oIndex) {
    if (this.isOver) return;

    console.log('showPage', index);

    if (index === 7) {
      $('header').hide();
    } else {
      $('header').show();
    }

    // 首页禁用触摸
    if (index === 0) {
      this.initPage1Events();
    } else {
      this.clearPage1Events();
    }

    if (index === 3) {
      this.initPage3Events();
    }

    if (index > 0) {
      this.initSwipe();
    }

    if (index > 0) {
      $('#wrap').parallax('disable');
    }

    if (!this.animatedWcIcon) {
      this.animatedWcIcon = true;
      setInterval(function() {
        $('.wc-icon').toggleClass('next');
      }, 500);
    }

    //播放指定页面
    if (index < 3) {
      var page = this.getPageByIndex(index);

      if (!page.finished) {
        $("#loader").show();
        page.waiting = true;
      } else {


        if (index === 1) {
          var TRANSIT_MS = 2000;
          // $('#page_1 .page1_gate').siblings().fadeOut(TRANSIT_MS / 2);
          $('#page_1 .page1_gate').siblings().hide();
          $("#page_1 .page1_gate").css('z-index', 100).transition({
            scale: 10,
            opacity: 0.2
          }, TRANSIT_MS);
          setTimeout(function() {
            if (!page.isRender) {
              render.renderPage(page);
            }
            this.page_index = index;

            $(".container").hide();
            $("#" + page.id).show();
            $('#page_1').hide();
          }, TRANSIT_MS * 0.4);
        } else {
          if (!page.isRender) {
            render.renderPage(page);
          }
          this.page_index = index;
          $(".container").hide();
          $("#" + page.id).show();
        }

      }
      this.page_index = index;
    } else if (index == 3) {
      if (this.page3First) {
        this.firstShowPage3();
      } else {
        this.page_index = 3;
        //第二次进入，直接回到上一个点
        $("#wrap")[0].style.webkitTransform = " translateX(" + (-this.page3TempX) * scale + "px)";
      }
    } else if (index == 7 || index == 8) {
      //7和8都是从page_3或者page_night过来的
      if (oIndex) {
        //alert(oIndex);
        this.oIndex = oIndex;
      }

      if (index === 7) {
        $("#page_w").show();
      } else if (index === 8) {
        $("#page_final").show();
        this.isOver = true;
        setTimeout(function() {
          act.show_color_2();
        }, 1000);
      }
      this.page_index = index;
      var page = this.getPageByIndex(index);
      if (!page.isRender) {
        render.renderPage(page);
      }
      $("#wrap")[0].style.webkitTransform = " translateX(0)";

    }
  },
  getCurrentPage: function() {
    return this.pages[this.page_index];
  },
  clearStage: function(page_id, stage, time, dir) {
    var page = this.getPage(page_id);
    var animates = page.animates; //获取animate数组
    var images = $('#' + page_id).find("> *");
    for (var i = 0; i < animates.length; i++) {
      var animate = animates[i];
      var _stage = animate.in.stage || 1;
      if (stage == _stage) {
        var dom = images[animate.index];
        if (time != null && time == 0) {
          $(dom).out(null, 0, "opacity", 0, dir);
        } else {
          $(dom).out();
        }
      }
    }
  },
  playStage: function(page_id, stage) {

    //$(a._scratch.canvas).show();
    //播放stage2

    if (stage == 1) {
      var page = a.getPage(page_id);
      a.clearStage(page.id, 1, 0);
      setTimeout(function(pid, st, that) {
        return function() {
          var page = a.getPage(pid);
          if (page.played) {
            //return;
          }
          page.played = true;
          var animates = page.animates; //获取animate数组
          var images = $('#' + pid).find("> *");
          for (var i = 0; i < animates.length; i++) {
            var animate = animates[i];
            var _stage = animate.in.stage || 1;
            if (st == _stage) {
              var dom = images[animate.index];
              var dom_item = page.dom[animate.index]; //dom对应的item
              a.playItem(dom, animate.in);
            }
          }
        }
      }(page_id, stage, this), 300);
      return;
    }


    var page = this.getPage(page_id);
    if (page.played) {
      //return;
    }
    page.played = true;
    var animates = page.animates; //获取animate数组
    var images = $('#' + page_id).find("> *");
    for (var i = 0; i < animates.length; i++) {
      var animate = animates[i];
      var _stage = animate.in.stage || 1;
      if (stage == _stage) {
        var dom = images[animate.index];
        var dom_item = page.dom[animate.index]; //dom对应的item
        this.playItem(dom, animate.in);
      }
    }
  },
  getDom: function(page_id, dom_index) {
    var images = $("#" + page_id).find(">*");
    return images[dom_index];
  },
  getItem: function(page_id, dom_index) {
    var page = this.getPage(page_id);
    return page.dom[dom_index];
  },
  getPage: function(page_id) {
    for (var i = 0; i < this.pages.length; i++) {
      if (this.pages[i].id == page_id) {
        return this.pages[i];
      }
    }
    return null;
  },
  getPageByIndex: function(p_index) {
    return this.pages[p_index];
  },
  playItem: function(item, _in) {
    $(item).in(_in);
  }
}
