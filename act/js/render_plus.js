var scale = 1;
var css_width = 320;
var Render = function(a, act, page_config) {
  this.page_config = page_config;
  this.a = a;
  this.act = act;
  this.wrap_scale = 320 / 504;
  this.max_scale = 320 / 504;
};
Render.prototype = {
  renderPage: function(page) {
    if (page.isRender) {
      return;
    }

    // console.log('renderPage', page.id, page);

    var that = this;
    var container = $("<div></div>").addClass("container").attr("id", page.id);
    var inner_dom;
    for (var i = 0; i < page.dom.length; i++) {
      var item = page.dom[i];
      var type = item.type;
      var dom;
      switch (type) {
        case "img":
          if (item.realImg) {
            dom = $("<img>").attr("src", ROOT_URL + "images/" + item.src);
            if (item.rect) {
              if (item.rect.w) $(dom).attr("width", item.rect.w);
              if (item.rect.h) $(dom).attr("height", item.rect.h);
            }
          } else {
            dom = $("<div></div>");
            if (item.src) {
              $(dom).css("background", "url(" +  ROOT_URL + "images/" + item.src + ") left no-repeat")
                .css("background-size", "100% 100%");
            }
            if (item.rect) {
              if (item.rect.w) $(dom).css("width", item.rect.w + "px");
              if (item.rect.h) $(dom).css("height", item.rect.h + "px");
            }
          }
          break;
        case "expand":
          dom = $("<div></div>").css("padding", "10px");
          inner_dom = $("<div></div>").css({
            display: "block"
          });
          if (item.rect) {
            if (item.rect.w) {
              $(dom).css("width", item.rect.w + "px");
              $(inner_dom).css("width", item.rect.w + "px");
            }
            if (item.rect.h) {
              $(dom).css("height", item.rect.h + "px");
              $(inner_dom).css("height", item.rect.h + "px");
            }
          }
          if (item.src) $(inner_dom).css("background", "url(" +  ROOT_URL + "images/" + item.src + ") left no-repeat")
            .css("background-size", item.rect.w + "px " + item.rect.h + "px");
          if (item.html) $(inner_dom).html(item.html);
          $(inner_dom).appendTo(dom);
          break;
        case "div":
          dom = $("<div></div>");
          if (item.src) {
            $(dom).css("background", "url(" +  ROOT_URL + "images/" + item.src + ") left no-repeat")
              .css("background-size", "auto 100%");
          }
          if (item.html) $(dom).html(item.html);
          if (item.rect) {
            if (item.rect.w) $(dom).css("width", item.rect.w + "px");
            if (item.rect.h) $(dom).css("height", item.rect.h + "px");
          }
          break;
        case "canvas":
          dom = $("<canvas></canvas>");
          if (item.src) $(dom).css("background", "url(" +  ROOT_URL + "images/" + item.src + ")")
            .css("background-size", "100% 100%");
          if (item.html) $(dom).html(item.html);
          if (item.rect) {
            if (item.rect.w) {
              $(dom).css("width", item.rect.w + "px");
              $(dom).attr("width", item.rect.w * 2);
            }
            if (item.rect.h) {
              $(dom).css("height", item.rect.h + "px");
              $(dom).attr("height", item.rect.h * 2);
            }

          }
          break;
        case "spirit":
          dom = $("<div></div>").addClass("spirit-container").width(item.rect.w).height(item.rect.h);
          var spirit_dom = $("<div></div>").addClass("spirit").width(item.rect.w).height(item.rect.h)
            .css("background", "url(" +  ROOT_URL + "images/" + item.src + ") no-repeat")
            .css("background-size", "auto 100%");
          if (item.config) {
            var c = item.config;
            $(spirit_dom).spirit(item.rect.w, c.frame, 0, c.time, 1);
          } else {
            $(spirit_dom).spirit(item.rect.w, 4, 0, 300, 1);
          }
          $(spirit_dom).appendTo(dom);
          break;
        case "animate":
          dom = $("<div></div>");
          inner_dom = $("<div></div>").css({
            display: "block"
          });
          if (item.rect) {
            if (item.rect.w) {
              $(dom).css("width", item.rect.w + "px");
              $(inner_dom).css("width", item.rect.w + "px");
            }
            if (item.rect.h) {
              $(dom).css("height", item.rect.h + "px");
              $(inner_dom).css("height", item.rect.h + "px");
            }
          }
          if (item.src) $(inner_dom).css("background", "url(" +  ROOT_URL + "images/" + item.src + ") left no-repeat")
            .css("background-size", item.rect.w + "px " + item.rect.h + "px");
          if (item.html) $(inner_dom).html(item.html);
          $(inner_dom).appendTo(dom);
          break;
        default:
          break;
      }
      if (item.rect) {
        if (item.rect.x) $(dom).css("left", item.rect.x);
        if (item.rect.y) $(dom).css("top", item.rect.y);
      }
      if (item.click) {
        var click = item.click;
        var args = item.args || false;
        $(dom).touch_click(function(_click, _args, _dom) {
          return function() {
            if (_args !== false) {
              act[_click](_args, _dom);
            } else {
              act[_click](_dom);
            }
          };
        }(click, args, dom));
      }
      if (item.real_click) {
        var click = item.real_click;
        var args = item.args || false;
        $(dom).swip({
          speed: function(_click, _args, _dom) {
            return function(x, y) {
              if (Math.abs(x) < 5) {
                if (_args !== false) {
                  act[_click](_args, _dom);
                } else {
                  act[_click](_dom);
                }
              }
            };
          }(click, args, dom)
        });
      }
      if (item.class) $(dom).addClass(item.class);
      if (item.id) $(dom).attr("id", item.id);
      if (item.css) {
        for (var k in item.css) {
          var v = item.css[k];
          dom.css(k, v);
        }
      }
      $(dom).appendTo(container);
    }

    function isInPage3(id) {
      return id == 'page_4' || id == 'page_5' || id == 'page_6';
    }

    var page_center = page.bound.center; //把页面的标记中心移动到页面中心

    var screen_centre = css_width / 2; //屏幕中心
    var distance = -screen_centre + page_center; //相差的距离
    // var distance = page_center; // debug
    if (page.id == 'page_3') {
      distance = 320;
    } else if (isInPage3(page.id)) {
      distance -= 480 - screen_centre - 320;
    }

    var page_dom = $("<div></div>").addClass("layer").attr("id", page.id + "_bg");
    if (page.id == 'page_1') {
      $(page_dom).css({
        scale: scale,
        left: -distance
      });
    } else {
      $(container).css("-webkit-transform", " scale(" + scale + ") translateX(" + -distance + "px)");
    }
    // $(container).width(page.bound.width);
    $(container).appendTo(page_dom);

    console.log(page.id, 'width=' + page.bound.width, 'page_center=' + page_center, 'distance=' + distance);

    if (page.id == "page_3") {
      page.moving_config.currentX = 0;
    } else {
      page.moving_config.currentX = distance;
    }


    // if (page.id == "page_final") {
    //   $(container).swip({
    //     right: function() {
    //       if (a.oIndex > 0) {
    //         a.showPage(a.oIndex);
    //       } else {
    //         a.showPage(3);
    //       }
    //     }
    //   });
    // }
    $(page_dom).appendTo("#wrap");

    if (page.id == "page_w") {
      //绑定canvas
      a.canvas = $("#draw")[0];

      a.ctx = a.canvas.getContext("2d");

      $("#draw").swip({
        currentPos: function(x, y) {

          a.ctx.fillStyle = "#FF0000";
          a.ctx.beginPath();
          a.ctx.arc((x - 20) * 2, (y - 117) * 2, 30, 0, Math.PI * 2, true);
          a.ctx.closePath();
          a.ctx.fill();
        }
      });
    }
    page.isRender = true;
  },
  render: function() {
    var wrap = $("<div></div>").attr("id", "wrap").appendTo("body");
    var page_height = $(window).height();
    var page_width = $(window).width();
    scale = page_height / 508;
    css_width = page_width / scale; //css宽度，跟页面宽度相同了
    console.log('pageWidth=' + page_width, 'pageHeight=' + page_height, 'scale=' + scale, 'css_width=' + css_width);
    var pages = this.page_config.pages;

    this.renderPage(pages[0]);


  }
};
