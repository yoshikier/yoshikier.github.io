var ARROW_DX = -20;
var ARROW_DY = -10;

var page_config = {
  basic: {
    js: [{
      name: "jquery.parallax",
      url: "jquery.parallax.min.js",
      sync: true
    }, {
      name: "jquery.transit",
      url: "jquery.transit.min.js",
      sync: true
    }, {
      name: "fastclick",
      url: "fastclick.min.js",
      sync: true
    }, {
      name: "clock",
      url: "clock.js",
      sync: false
    }, {
      name: "swip",
      url: "swip3.js",
      sync: false
    }, {
      name: "action",
      url: "action2.js",
      sync: false
    }, {
      name: "animate",
      url: "animate_plus.js",
      sync: false
    }, {
      name: "render",
      url: "render_plus.js",
      sync: false
    }, {
      name: "jweixin",
      url: "http://res.wx.qq.com/open/js/jweixin-1.0.0.js",
      sync: false
    }, {
      name: "wxshare",
      url: "wxshare.js?v=2",
      sync: false
    }],
    images: []
  },
  pages: [{
    dom: [{
        type: "img",
        src: "page_1_01.png",
        rect: {
          w: 640,
          h: 508,
          x: 0,
          y: 0
        },
        comment: "白底.png"
      }, {
        type: "img",
        src: "page_1_15.png",
        comment: "地面.png",
        rect: {
          w: 1803,
          h: 134,
          x: -581,
          y: 375
        },
        speed: {
          x: 0.4,
          y: 0
        },
        class: "page_1_floor"
      }, {
        type: "img",
        src: "page_1_02.png",
        rect: {
          w: 104,
          h: 103,
          x: 36,
          y: 33
        },
        class: "round",
        comment: "sun.png"
      }, {
        type: "div",
        id: "cloud",
        rect: {
          w: 3000,
          h: 364,
          x: -300,
          y: -18
        },
        comment: "cloud.png",
        speed: {
          x: 0.1,
          y: 0
        }
      }, {
        type: "div",
        html: "<span></span>",
        id: "fly",
        src: "page_1_04.png",
        rect: {
          w: 107,
          h: 29,
          x: 366,
          y: 48
        },
        comment: "飞艇.png"
      }, {
        type: "img",
        src: "page_plus_01.png",
        rect: {
          w: 640,
          h: 252,
          x: 0,
          y: 155
        },
        class: 'page1_gate',
        comment: "图层_4"
      }, {
        type: "img",
        src: "page_plus_02.png",
        rect: {
          w: 172,
          h: 98,
          x: 6,
          y: 180
        },
        comment: "图层_2"
      }, {
        type: "img",
        src: "page_plus_03.png",
        rect: {
          w: 639,
          h: 50,
          x: 1,
          y: 343
        },
        comment: "点点"
      }, {
        type: "img",
        src: "page_plus_04.png",
        rect: {
          w: 71,
          h: 67,
          x: 285,
          y: 324
        },
        comment: "模块",
        real_click: "enter",
        class: "scale-repeat"
      }, {
        type: "div",
        rect: {
          w: 120,
          h: 100,
          x: 260,
          y: 310
        },
        comment: "模块点击",
        real_click: "enter"
      },

      {
        type: "img",
        src: "page_p1_01.png",
        rect: {
          w: 16,
          h: 13,
          x: 184,
          y: 231
        },
        comment: "气泡－1",
        class: "pop1"
      }, {
        type: "img",
        src: "page_p1_02.png",
        rect: {
          w: 14,
          h: 8,
          x: 184,
          y: 213
        },
        comment: "气泡－2",
        class: "pop2"
      }, {
        type: "img",
        src: "page_p1_03.png",
        rect: {
          w: 8,
          h: 7,
          x: 199,
          y: 199
        },
        comment: "气泡－3",
        class: "pop3"
      }, {
        type: "img",
        src: "page_p1_04.png",
        rect: {
          w: 27,
          h: 21,
          x: 214,
          y: 186
        },
        comment: "气泡－4",
        class: "pop4"
      }, {
        type: "img",
        src: "page_p1_05.png",
        rect: {
          w: 295,
          h: 89,
          x: 272,
          y: 162
        },
        comment: "大气泡",
        class: "pop1"
      }, {
        type: "img",
        src: "page_p1_06.png",
        rect: {
          w: 8,
          h: 7,
          x: 338,
          y: 215
        },
        comment: "气泡－5",
        class: "pop2"
      }, {
        type: "img",
        src: "page_p1_07.png",
        rect: {
          w: 14,
          h: 13,
          x: 563,
          y: 258
        },
        comment: "气泡－6",
        class: "pop3"
      }, {
        type: "img",
        src: "page_p1_08.png",
        rect: {
          w: 8,
          h: 8,
          x: 554,
          y: 251
        },
        comment: "气泡－7",
        class: "pop4"
      },

      {
        type: "img",
        src: "page_1_07.png",
        rect: {
          w: 118,
          h: 98,
          x: 440,
          y: 183
        },
        class: "round",
        comment: "反光.png"
      }, {
        type: "img",
        src: "page_1_08.png",
        rect: {
          w: 317,
          h: 118,
          x: 163,
          y: 79
        },
        comment: "logo招牌.png"
      },

      {
        type: "img",
        id: "light_1",
        src: "page_1_10.png",
        rect: {
          w: 77,
          h: 251,
          x: 25,
          y: 96
        },
        comment: "路灯-l.png",
        speed: {
          x: 0.2,
          y: 0
        }
      }, {
        type: "img",
        src: "page_1_11.png",
        rect: {
          w: 210,
          h: 184,
          x: -51,
          y: 308
        },
        class: 'tent',
        comment: "帐篷.png"
      }, {
        type: "img",
        src: "page_1_12.png?v=2",
        rect: {
          w: 66,
          h: 153,
          x: 87,
          y: 347
        },
        comment: "经典馆牌子.png"
      }, {
        type: "img",
        src: "page_1_13.png",
        rect: {
          w: 157,
          h: 79,
          x: -38,
          y: 434
        },
        comment: "栏杆－l.png",
        speed: {
          x: 0.3,
          y: 0
        }
      }, {
        type: "img",
        src: "page_1_14.png",
        rect: {
          w: 88,
          h: 101,
          x: 481,
          y: 435
        },
        comment: "栏杆－r.png",
        speed: {
          x: 0.3,
          y: 0
        }
      }, {
        type: "img",
        src: "page_1_09.gif",
        rect: {
          w: 155,
          h: 68,
          x: 247,
          y: 433
        },
        comment: "入口.png",
        real_click: "enter"
      }, {
        type: "img",
        id: "light_2",
        src: "page_1_16.png",
        rect: {
          w: 150,
          h: 503,
          x: 491,
          y: 10
        },
        comment: "路灯-r.png",
        class: 'road-lamp',
        speed: {
          x: 0.2,
          y: 0
        }
      }, {
        type: "img",
        src: "page_1_17.png",
        class: "arrow-repeat",
        rect: {
          w: 11,
          h: 14,
          x: 315,
          y: 415
        },
        comment: "箭头上下移动.png",
        real_click: "enter"
      }
    ],
    animates: [],
    actions: [],
    played: false,
    waiting: false,
    top: 2004,
    finished: false,
    id: "page_1",
    rect: {
      x: -160,
      y: 0
    },
    moving_config: {
      currentX: 0
    },
    bound: {
      width: 640,
      center: 320
    },
    isRender: false,
    nightOnly: true
  }, {
    dom: [{
        type: "img",
        src: "page_2_02.png",
        class: "repeat-lb",
        rect: {
          w: 666,
          h: 508,
          x: -14,
          y: 53
        },
        comment: "地灯.png"
      }, {
        type: "img",
        src: "page_2_03.png",
        class: "repeat-rb",
        rect: {
          w: 666,
          h: 508,
          x: -14,
          y: 53
        },
        comment: "地灯_拷贝.png"
      }, {
        type: "img",
        src: "page_2_04.png",
        rect: {
          w: 640,
          h: 399,
          x: 0,
          y: 49
        },
        comment: "遮挡.png"
      }, {
        type: "img",
        src: "page_2_05.png",
        rect: {
          w: 188,
          h: 39,
          x: 226,
          y: 235
        },
        comment: "矢量智能对象.png"
      }, {
        type: "img",
        src: "page_2_06.png",
        rect: {
          w: 607,
          h: 67,
          x: 17,
          y: 93
        },
        class: 'ceil',
        comment: "房顶结构.png",
        speed: {
          x: 0.50,
          y: 0
        }
      }, {
        type: "img",
        src: "page_2_07.png",
        rect: {
          w: 598,
          h: 70,
          x: 21,
          y: 18
        },
        comment: "顶灯.png",
        speed: {
          x: 0.4,
          y: 0
        }
      }, {
        type: "img",
        src: "page_2_08.png",
        rect: {
          w: 402,
          h: 261,
          x: 119,
          y: 91
        },
        comment: "内墙.png"
      }, {
        type: "img",
        src: "page_2_09.png",
        class: "scale-repeat",
        rect: {
          w: 241,
          h: 168,
          x: 199,
          y: 210
        },
        comment: "内部空间模块.png"
      }, {
        type: "img",
        src: "page_2_10.png",
        rect: {
          w: 715,
          h: 508,
          x: -38,
          y: 0
        },
        comment: "外墙.png"
      }, {
        type: "img",
        src: "page_2_11.png",
        rect: {
          w: 75,
          h: 502,
          x: 31,
          y: 4
        },
        comment: "墙面花纹.png",
        speed: {
          x: 0,
          y: 0.2
        }
      }, {
        type: "img",
        src: "page_2_12.png",
        rect: {
          w: 212,
          h: 313,
          x: 390,
          y: 119
        },
        comment: "墙花纹－r.png",
        speed: {
          x: 0.6,
          y: 0
        }
      }, {
        type: "img",
        src: "page_2_13.png",
        rect: {
          w: 275,
          h: 4,
          x: 188,
          y: 348
        },
        comment: "地交线.png"
      }, {
        type: "img",
        src: "page_2_14.png",
        rect: {
          w: 302,
          h: 17,
          x: 169,
          y: 406
        },
        comment: "地槽.png",
        speed: {
          x: 0.15,
          y: 0
        }
      }, {
        type: "img",
        src: "page_2_15.png?v=2",
        id: "door_close",
        rect: {
          w: 155,
          h: 387,
          x: 321,
          y: 61
        },
        comment: "门－2.png",
        click: "open_door"
      }, {
        type: "img",
        src: "page_2_16.png",
        class: "move-v",
        rect: {
          w: 123,
          h: 146,
          x: 331,
          y: 182
        },
        comment: "反光（上下动）.png",
        click: "open_door",
        speed: {
          x: 0,
          y: 0.4
        }
      }, {
        type: "expand",
        src: "page_2_17.png",
        id: "btn_push",
        rect: {
          w: 51,
          h: 44,
          x: 340 - 10,
          y: 223 - 10
        },
        comment: "push按钮.png",
        click: "open_door"
      }, {
        type: "img",
        src: "page_2_18.png?v=2",
        id: "door_open",
        class: "invisible",
        rect: {
          w: 79,
          h: 387,
          x: 396,
          y: 61
        },
        comment: "门－2开.png"
      }, {
        type: "img",
        src: "page_2_19.png",
        class: "move-v",
        rect: {
          w: 123,
          h: 197,
          x: 188,
          y: 167
        },
        comment: "反光.png",
        speed: {
          x: 0,
          y: 0.3
        }
      }, {
        type: "img",
        src: "page_2_20.png",
        rect: {
          w: 155,
          h: 387,
          x: 167,
          y: 61
        },
        comment: "门－1.png"
      }, {
        type: "img",
        src: "open.png?v=2",
        rect: {
          w: 310,
          h: 387,
          x: 167,
          y: 61
        },
        class: 'scale-door invisible',
        comment: "两扇门组成的门框"
      }, {
        type: "img",
        src: "page_2_21.png",
        rect: {
          w: 188,
          h: 39,
          x: 226,
          y: 14
        },
        comment: "密道.png"
      }, {
        type: "img",
        src: "page_2_22.png",
        rect: {
          w: 10,
          h: 10,
          x: 393,
          y: 14
        },
        comment: "闪按钮.png"
      }, {
        type: "img",
        src: "page_2_23.png",
        id: "t1",
        rect: {
          w: 188,
          h: 39,
          x: 226,
          y: 14
        },
        comment: "通风口.png",
        click: "drop"
      }, {
        type: "img",
        src: "page_2_24.png",
        class: "repeat-tc",
        id: "t2",
        rect: {
          w: 16,
          h: 24,
          x: 265,
          y: 31
        },
        comment: "空调飘带.png"
      },

      {
        type: "img",
        src: "page_p2_01.png",
        rect: {
          w: 203,
          h: 84,
          x: 219,
          y: 160
        },
        comment: "弹出对话框－2",
        class: "d2 invisible"
      }, {
        type: "img",
        src: "page_p2_02.png",
        rect: {
          w: 23,
          h: 24,
          x: 372,
          y: 204
        },
        comment: "no2",
        class: "d2 invisible",
        real_click: "close_d"
      }, {
        type: "img",
        src: "page_p2_03.png",
        rect: {
          w: 21,
          h: 22,
          x: 333,
          y: 204
        },
        comment: "yes2",
        class: "d2 invisible",
        real_click: "enter_m2"
      }, {
        type: "img",
        src: "page_p2_04.png",
        rect: {
          w: 203,
          h: 84,
          x: 215,
          y: 155
        },
        comment: "弹出对话框－1",
        class: "d1 invisible"
      }, {
        type: "img",
        src: "page_p2_05.png",
        rect: {
          w: 22,
          h: 22,
          x: 369,
          y: 200
        },
        comment: "no1",
        class: "d1 invisible",
        real_click: "close_d"
      }, {
        type: "img",
        src: "page_p2_06.png",
        rect: {
          w: 20,
          h: 20,
          x: 331,
          y: 201
        },
        comment: "yes1",
        class: "d1 invisible",
        real_click: "enter_m2"
      }
    ],
    animates: [],
    actions: [],
    played: false,
    waiting: false,
    top: 2004,
    finished: false,
    id: "page_2",
    rect: {
      x: -160,
      y: 0
    },
    moving_config: {
      currentX: 0
    },
    bound: {
      width: 640,
      center: 320
    },
    isRender: false
  }, {
    dom: [{
        type: "img",
        src: "page_night_01.png",
        rect: {
          w: 640,
          h: 508,
          x: 0,
          y: 0
        },
        comment: "白底"
      }, {
        type: "img",
        src: "page_night_02.png",
        class: "repeat-lb",
        rect: {
          w: 666,
          h: 508,
          x: -14,
          y: 53
        },
        comment: "地灯"
      }, {
        type: "img",
        src: "page_night_03.png",
        class: "repeat-rb",
        rect: {
          w: 666,
          h: 508,
          x: -14,
          y: 53
        },
        comment: "地灯_拷贝"
      }, {
        type: "img",
        src: "page_night_04.png",
        rect: {
          w: 640,
          h: 399,
          x: 0,
          y: 49
        },
        comment: "遮挡"
      }, {
        type: "img",
        src: "page_night_05.png",
        rect: {
          w: 188,
          h: 39,
          x: 226,
          y: 235
        },
        comment: "矢量智能对象"
      }, {
        type: "img",
        src: "page_night_06.png",
        rect: {
          w: 607,
          h: 67,
          x: 17,
          y: 93
        },
        comment: "房顶结构",
        speed: {
          x: 0.50,
          y: 0
        }
      }, {
        type: "img",
        src: "page_night_07.png",
        rect: {
          w: 598,
          h: 70,
          x: 21,
          y: 18
        },
        comment: "顶灯",
        speed: {
          x: 0.4,
          y: 0
        }
      }, {
        type: "img",
        src: "page_night_08.png",
        rect: {
          w: 402,
          h: 261,
          x: 119,
          y: 91
        },
        comment: "内墙"
      }, {
        type: "img",
        src: "page_night_09.png",
        rect: {
          w: 241,
          h: 168,
          x: 199,
          y: 210
        },
        comment: "内部空间模块",
        class: "scale-repeat"
      }, {
        type: "img",
        src: "page_night_10.png",
        rect: {
          w: 494,
          h: 384,
          x: 73,
          y: 62
        },
        comment: "外墙－c"
      }, {
        type: "img",
        src: "page_night_11.png",
        rect: {
          w: 715,
          h: 508,
          x: -38,
          y: 0
        },
        comment: "外墙"
      }, {
        type: "img",
        src: "page_night_12.png",
        rect: {
          w: 75,
          h: 502,
          x: 31,
          y: 4
        },
        comment: "墙面花纹",
        speed: {
          x: 0,
          y: 0.2
        }
      }, {
        type: "img",
        src: "page_night_13.png",
        rect: {
          w: 212,
          h: 313,
          x: 390,
          y: 119
        },
        comment: "墙花纹－r",
        speed: {
          x: 0.6,
          y: 0
        }
      }, {
        type: "img",
        src: "page_night_14.png",
        rect: {
          w: 275,
          h: 4,
          x: 188,
          y: 348
        },
        comment: "地交线"
      }, {
        type: "img",
        src: "page_night_15.png",
        rect: {
          w: 302,
          h: 17,
          x: 169,
          y: 406
        },
        comment: "地槽",
        speed: {
          x: 0.15,
          y: 0
        }
      }, {
        type: "img",
        src: "page_night_16.png",
        class: "move-v",
        rect: {
          w: 123,
          h: 197,
          x: 188,
          y: 167
        },
        comment: "反光",
        speed: {
          x: 0,
          y: 0.4
        }
      }, {
        type: "img",
        src: "page_night_17.png",
        rect: {
          w: 155,
          h: 387,
          x: 167,
          y: 61
        },
        comment: "门－1"
      }, {
        type: "img",
        src: "page_night_18.png?v=2",
        rect: {
          w: 155,
          h: 387,
          x: 321,
          y: 61
        },
        comment: "门－2",
        id: "door_close",
      }, {
        type: "img",
        src: "page_night_19.png",
        class: "move-v",
        rect: {
          w: 123,
          h: 146,
          x: 331,
          y: 182
        },
        comment: "反光",
        speed: {
          x: 0,
          y: 0.3
        }
      }, {
        type: "img",
        src: "page_night_20.png",
        rect: {
          w: 51,
          h: 45,
          x: 340,
          y: 222
        },
        comment: "push",
        id: "btn_push"
        // click: "open_door"
      },
      //{type:"img",src:"page_night_21.png",rect:{w:79,h:387,x:396,y:61},comment:"门－2开",id:"door_open",class:"invisible"},
      {
        type: "img",
        src: "page_night_22.png",
        rect: {
          w: 188,
          h: 39,
          x: 226,
          y: 14
        },
        comment: "密道"
      },

      {
        type: "img",
        src: "page_night_27.png",
        rect: {
          w: 188,
          h: 39,
          x: 226,
          y: 14
        },
        comment: "通风口",
        click: "drop",
        id: "t1"
      }, {
        type: "img",
        src: "page_night_28.png",
        rect: {
          w: 16,
          h: 24,
          x: 265,
          y: 31
        },
        comment: "飘带",
        class: "repeat-tc",
        id: "t2"
      }, {
        type: "img",
        src: "page_night_29.png?v=2",
        rect: {
          w: 137,
          h: 202,
          x: 252,
          y: 314
        },
        comment: "closed"
      },

      {
        type: "img",
        src: "page_p3_01.png",
        rect: {
          w: 203,
          h: 84,
          x: 219,
          y: 160
        },
        comment: "对话框－2",
        class: "d1 invisible"
      }, {
        type: "img",
        src: "page_p3_02.png",
        rect: {
          w: 33,
          h: 28,
          x: 364,
          y: 196
        },
        comment: "no2",
        class: "d1 invisible",
        real_click: "close_d"
      }, {
        type: "img",
        src: "page_p3_03.png",
        rect: {
          w: 28,
          h: 25,
          x: 325,
          y: 198
        },
        comment: "yes2",
        class: "d1 invisible",
        real_click: "enter_m"
      }, {
        type: "img",
        src: "page_p3_04.png",
        rect: {
          w: 203,
          h: 84,
          x: 219,
          y: 160
        },
        comment: "对话框－1",
        class: "d2 invisible"
      }, {
        type: "img",
        src: "page_p3_05.png",
        rect: {
          w: 27,
          h: 23,
          x: 371,
          y: 205
        },
        comment: "no1",
        class: "d2 invisible",
        real_click: "close_d"
      }, {
        type: "img",
        src: "page_p3_06.png",
        rect: {
          w: 26,
          h: 23,
          x: 332,
          y: 203
        },
        comment: "yes1",
        class: "d2 invisible",
        // real_click: "enter_m"
        real_click: "dialog2"
      }

    ],
    animates: [],
    actions: [],
    played: false,
    waiting: false,
    top: 2004,
    finished: false,
    id: "page_night",
    rect: {
      x: -160,
      y: 0
    },
    moving_config: {
      currentX: 0
    },
    bound: {
      width: 640,
      center: 320
    },
    isRender: false,
    nightOnly: true
  }, {
    dom: [{
      type: "img",
      src: "page_3_01.png",
      rect: {
        w: 1281,
        h: 508,
        x: -1,
        y: 0
      },
      comment: "白底"
    }, {
      type: "img",
      src: "page_3_02.png",
      rect: {
        w: 1596,
        h: 195,
        x: -158,
        y: 0
      },
      class: 'ceil',
      comment: "顶部结构",
      speed: {
        x: 0.2,
        y: 0
      }
    }, {
      type: "img",
      src: "page_3_03.png",
      rect: {
        w: 321,
        h: 124,
        x: -1,
        y: 32
      },
      comment: "画面1墙1"
    }, {
      type: "img",
      src: "page_3_04.png",
      rect: {
        w: 164,
        h: 25,
        x: 65,
        y: 58
      },
      comment: "结构"
    }, {
      type: "img",
      src: "page_3_05.png",
      rect: {
        w: 341,
        h: 131,
        x: 548,
        y: 379
      },
      comment: "投影－2",
      speed: {
        x: 0.1,
        y: 0
      }
    }, {
      type: "img",
      src: "page_3_06.png",
      rect: {
        w: 341,
        h: 131,
        x: 104,
        y: 377
      },
      class: 'floor',
      comment: "投影－1",
      speed: {
        x: 0.1,
        y: 0
      }
    }, {
      type: "img",
      src: "page_3_07.png",
      rect: {
        w: 175,
        h: 77,
        x: 104,
        y: 378
      },
      comment: "投影线"
    }, {
      type: "img",
      src: "page_3_08.png",
      rect: {
        w: 216,
        h: 236,
        x: 105,
        y: 143
      },
      comment: "墙内部"
    }, {
      type: "img",
      src: "page_3_09.png",
      rect: {
        w: 524,
        h: 206,
        x: 729,
        y: 342
      },
      comment: "阴影",
      speed: {
        x: 0.2,
        y: 0
      }
    }, {
      type: "img",
      src: "page_3_10.png",
      rect: {
        w: 117,
        h: 62,
        x: 105,
        y: 86
      },
      comment: "风槽"
    }, {
      type: "img",
      src: "page_3_11.png",
      rect: {
        w: 269,
        h: 227,
        x: 1011,
        y: 143
      },
      comment: "墙r"
    }, {
      type: "img",
      src: "page_3_12.png",
      rect: {
        w: 159,
        h: 433,
        x: -1,
        y: 76
      },
      comment: "墙l",
      speed: {
        x: 0,
        y: 0.2
      }
    }, {
      type: "img",
      src: "page_3_39.png",
      rect: {
        w: 136,
        h: 237,
        x: 990,
        y: 144
      },
      class: 'floor',
      comment: "阴影"
    }, {
      type: "img",
      src: "wall.png",
      rect: {
        w: 785,
        h: 376,
        x: 237,
        y: 61
      },
      comment: "主展示墙"
    }, {
      type: "img",
      src: "page_3_hand.png",
      rect: {
        w: 50,
        h: 80,
        x: 580,
        y: 320
      },
      comment: "手",
      class: "hand"
    }, {
      type: "img",
      src: "page_3_28.png",
      rect: {
        w: 103,
        h: 85,
        x: 140,
        y: 216
      },
      comment: "画框－1",
      speed: {
        x: 0,
        y: 0.1
      }
    }, {
      type: "img",
      src: "page_3_29.png",
      rect: {
        w: 88,
        h: 63,
        x: 149,
        y: 223
      },
      comment: "画9",
      speed: {
        x: 0,
        y: 0.1
      },
      real_click: "show",
      args: [9]
    }, {
      type: "img",
      src: "page_3_30.png",
      rect: {
        w: 278,
        h: 349,
        x: 664,
        y: 74
      },
      comment: "矢量智能对象"
    }, {
      type: "expand",
      html: "<span>"+document.getElementById("act-exp").value+"</span>",
      rect: {
        w: 254,
        h: 349,
        x: 664,
        y: 102
      },
      comment: "作家说明",
      class: "exp-content"
    }, {
      type: "img",
      src: "page_3_31.png",
      rect: {
        w: 14,
        h: 13,
        x: 665,
        y: 71
      },
      comment: "勾"
    }, {
      type: "img",
      src: "page_3_32.png",
      rect: {
        w: 500,
        h: 17,
        x: 520,
        y: 462
      },
      comment: "地槽",
      speed: {
        x: 0.15,
        y: 0
      }
    }, {
      type: "img",
      src: "page_3_33.png",
      rect: {
        w: 15,
        h: 22,
        x: 1006,
        y: 366
      },
      comment: "泡泡－1",
      class: "pop",
      click: "dis_pop",
      args: [1]
    }, {
      type: "img",
      src: "page_3_34.png",
      rect: {
        w: 16,
        h: 12,
        x: 993,
        y: 385
      },
      comment: "泡泡－2",
      class: "pop",
      click: "dis_pop",
      args: [2]
    }, {
      type: "img",
      src: "page_3_35.png",
      rect: {
        w: 20,
        h: 19,
        x: 982,
        y: 392
      },
      comment: "泡泡－3",
      class: "pop",
      click: "dis_pop",
      args: [3]
    }, {
      type: "img",
      src: "page_3_36.png",
      rect: {
        w: 17,
        h: 17,
        x: 1004,
        y: 412
      },
      comment: "泡泡－4",
      class: "pop",
      click: "dis_pop",
      args: [4]
    }, {
      type: "img",
      src: "page_3_37.png",
      rect: {
        w: 14,
        h: 22,
        x: 990,
        y: 431
      },
      comment: "泡泡－5",
      class: "pop",
      click: "dis_pop",
      args: [5]
    }, {
      type: "img",
      src: "page_3_38.png",
      rect: {
        w: 6,
        h: 6,
        x: 998,
        y: 460
      },
      comment: "泡泡－6",
      class: "pop",
      click: "dis_pop",
      args: [6]
    }, {
      type: "img",
      src: "page_3_41.png",
      rect: {
        w: 229,
        h: 177,
        x: 1024,
        y: 162
      },
      comment: "矢量智能对象"
    }, {
      type: "expand",
      html: "<img src='"+dataArr[1]+"' />",
      rect: {
        w: 77,
        h: 80,
        x: 1160,
        y: 192
      },
      comment: "画2",
      class: "common-img img02",
      real_click: "show",
      args: [2]
    }, {
      type: "expand",
      html: "<img src='"+dataArr[0]+"' />",
      rect: {
        w: 113,
        h: 158,
        x: 1020,
        y: 158
      },
      comment: "画1",
      class: "common-img img01",
      real_click: "show",
      args: [1]
    }, {
      type: "img",
      src: "page_x3_01.png",
      rect: {
        w: 6,
        h: 15,
        x: 1084 + ARROW_DX,
        y: 145 + ARROW_DY
      },
      comment: "箭头_copy_6",
      class: "repeat-new",
      real_click: "show",
      args: [1]
    }, {
      type: "img",
      src: "page_x3_01.png",
      rect: {
        w: 6,
        h: 15,
        x: 1207 + ARROW_DX,
        y: 181 + ARROW_DY
      },
      comment: "箭头_copy_5",
      class: "repeat-new",
      real_click: "show",
      args: [10]
    }, {
      type: "img",
      src: "page_f_01.png",
      rect: {
        w: 238,
        h: 129,
        x: 39,
        y: 357
      },
      comment: "dialog",
      class: "invisible dx"
    }, {
      type: "img",
      src: "page_f_02.png",
      rect: {
        w: 56,
        h: 31,
        x: 143,
        y: 437
      },
      comment: "no",
      class: "invisible dx",
      click: "go_back1"
    }, {
      type: "img",
      src: "page_f_03.png",
      rect: {
        w: 53,
        h: 29,
        x: 72,
        y: 438
      },
      comment: "yes",
      class: "invisible dx",
      click: "go_final"
    }, {
      type: "img",
      src: "page_f_04.png",
      rect: {
        w: 33,
        h: 33,
        x: 280,
        y: 239
      },
      comment: "移动箭头",
      class: "invisible dxx",
      click: "show_dialog_1"
    }, {
      type: "div",
      rect: {
        w: 100,
        h: 100,
        x: 250,
        y: 205
      },
      comment: "移动箭头点击",
      click: "show_dialog_1"
    }],
    animates: [],
    actions: [],
    played: false,
    waiting: false,
    top: 2004,
    finished: false,
    id: "page_3",
    rect: {
      x: -160,
      y: 0
    },
    moving_config: {
      currentX: 0
    },
    bound: {
      width: 1280,
      center: 480
    },
    isRender: false
  }, {
    dom: [{
        type: "img",
        src: "page_4_01.png",
        rect: {
          w: 1281,
          h: 508,
          x: -1,
          y: 0
        },
        comment: "白底"
      }, {
        type: "img",
        src: "page_xx_01.png",
        rect: {
          w: 1271,
          h: 193,
          x: -20,
          y: 0
        },
        class: 'ceil',
        comment: "顶部结构"
      }, {
        type: "img",
        src: "page_4_03.png",
        rect: {
          w: 628,
          h: 354,
          x: 549,
          y: -162
        },
        comment: "关灯（闪烁）",
        id: "light_1",
        class: "light invisible ceil"
      }, {
        type: "img",
        src: "page_xx_02.png",
        rect: {
          w: 1119,
          h: 132,
          x: 162,
          y: 376
        },
        comment: "第3-4地面",
        speed: {
          x: 0,
          y: 0.05
        }
      }, {
        type: "img",
        src: "page_4_05.png",
        rect: {
          w: 483,
          h: 343,
          x: 678,
          y: 90
        },
        comment: "第3-4页墙"
      }, {
        type: "img",
        src: "page_4_06.png",
        rect: {
          w: 233,
          h: 313,
          x: 697,
          y: 104
        },
        comment: "第3页面浮点"
      }, {
        type: "img",
        src: "page_4_23.png",
        rect: {
          w: 179,
          h: 242,
          x: 669,
          y: 165
        },
        comment: "画5",
        real_click: "show",
        args: [5]
      }, {
        type: "expand",
        html: "<img src='"+dataArr[4]+"' />",
        rect: {
          w: 156,
          h: 200,
          x: 674,
          y: 165
        },
        comment: "画5",
        class: "common-img img05",
        real_click: "show",
        args: [5]
      }, {
        type: "img",
        src: "page_4_23.png",
        rect: {
          w: 181,
          h: 278,
          x: 940,
          y: 144
        },
        comment: "画6",
        real_click: "show",
        args: [6]
      }, {
        type: "div",
        rect: {
          w: 96,
          h: 157,
          x: 969,
          y: 144
        },
        class: 'click-cover',
        real_click: "show",
        args: [2]
      }, {
        type: "img",
        src: "page_4_09.png",
        rect: {
          w: 99,
          h: 107,
          x: 679,
          y: 388
        },
        comment: "三角阴影（上下动一点）",
        class: "repeat-y"
      }, {
        type: "img",
        src: "page_4_10.png",
        rect: {
          w: 616,
          h: 135,
          x: 55,
          y: 382
        },
        class: 'floor',
        comment: "第2画面地面",
        speed: {
          x: 0.1,
          y: 0
        }
      }, {
        type: "img",
        src: "page_4_11.png",
        rect: {
          w: 63,
          h: 86,
          x: 678,
          y: 57
        },
        comment: "导视（上下动）",
        speed: {
          x: 0,
          y: 0.05
        }
      }, {
        type: "img",
        src: "page_4_12.png",
        rect: {
          w: 311,
          h: 477,
          x: 368,
          y: 22
        },
        comment: "第2页面墙－2"
      }, {
        type: "img",
        src: "page_4_13.png",
        rect: {
          w: 128,
          h: 508,
          x: 1153,
          y: 0
        },
        comment: "第4页墙",
        speed: {
          x: 0.05,
          y: 0
        }
      }, {
        type: "img",
        src: "page_4_14.png",
        rect: {
          w: 100,
          h: 263,
          x: 1175,
          y: 193
        },
        comment: "光（自己上下动）"
      }, {
        type: "img",
        src: "page_4_15.png",
        rect: {
          w: 15,
          h: 4,
          x: 1194,
          y: 27
        },
        comment: "熄灯",
        speed: {
          x: 0.09,
          y: 0
        }
      }, {
        type: "img",
        src: "page_4_16.png",
        rect: {
          w: 118,
          h: 261,
          x: 1167,
          y: 95
        },
        comment: "画框",
        speed: {
          x: 0.05,
          y: 0
        },
        real_click: "show",
        args: [12]
      }, {
        type: "img",
        src: "page_4_17.png",
        rect: {
          w: 236,
          h: 353,
          x: 801,
          y: 190
        },
        comment: "树"
      }, {
        type: "img",
        src: "page_4_18.png",
        rect: {
          w: 247,
          h: 246,
          x: 829,
          y: 214
        },
        comment: "轨道round",
        class: "ctrl-round2 active",
        click: "light_open"
      }, {
        type: "img",
        src: "page_4_19.png",
        rect: {
          w: 129,
          h: 128,
          x: 888,
          y: 273
        },
        comment: "点round",
        class: "ctrl-round1 active"
      }, {
        type: "img",
        src: "page_4_20.png",
        rect: {
          w: 125,
          h: 127,
          x: 890,
          y: 274
        },
        comment: "点round",
        class: "ctrl-round active"
      }, {
        type: "img",
        src: "page_4_21.png",
        rect: {
          w: 126,
          h: 122,
          x: 889,
          y: 276
        },
        comment: "点集合round",
        class: "ctrl-round2 active",
        click: "light_open"
      }, {
        type: "img",
        src: "page_4_22.png",
        rect: {
          w: 81,
          h: 81,
          x: 912,
          y: 297
        },
        comment: "点round1",
        class: "ctrl-round1 active light-btn",
        click: "light_open"
      }, {
        type: "img",
        src: "page_4_23.png",
        rect: {
          w: 122,
          h: 127,
          x: 412,
          y: 171
        },
        comment: "画4背景框",
        real_click: "show",
        args: [4]
      }, {
        type: "expand",
        html: "<img src='"+dataArr[3]+"' />",
        rect: {
          w: 108,
          h: 105,
          x: 412,
          y: 165
        },
        comment: "画4",
        class: "common-img img04",
        real_click: "show",
        args: [4]
      }, {
        type: "img",
        src: "page_4_24.png",
        rect: {
          w: 157,
          h: 41,
          x: 402,
          y: 109
        },
        comment: "射灯",
        speed: {
          x: 0.11,
          y: 0
        }
      }, {
        type: "img",
        src: "page_4_25.png",
        rect: {
          w: 94,
          h: 38,
          x: 374,
          y: 382
        },
        comment: "椅子"
      }, {
        type: "img",
        src: "page_4_26.png?v=new",
        rect: {
          w: 617,
          h: 201,
          x: -220,
          y: 337
        },
        comment: "wangge",
        speed: {
          x: 0.2,
          y: 0
        }
      }, {
        type: "img",
        src: "page_4_27.png",
        rect: {
          w: 62,
          h: 94,
          x: 38,
          y: 245
        },
        comment: "墙－4"
      }, {
        type: "img",
        src: "page_4_28.png",
        rect: {
          w: 94,
          h: 181,
          x: 68,
          y: 193
        },
        comment: "空间墙",
        speed: {
          x: 0.2,
          y: 0
        }
      }, {
        type: "img",
        src: "page_4_29.png",
        rect: {
          w: 129,
          h: 422,
          x: 145,
          y: 11
        },
        comment: "时钟柱子",
        speed: {
          x: 0.13,
          y: 0
        }
      }, {
        type: "div",
        // src: "page_4_30.png",
        rect: {
          w: 60,
          h: 60,
          x: 162,
          y: 48
        },
        comment: "钟盘",
        class: 'clock'
      }, {
        type: "img",
        src: "page_4_31.png",
        rect: {
          w: 240,
          h: 423,
          x: 161,
          y: 86
        },
        comment: "有墙的门"
      }, {
        type: "expand",
        src: "page_4_33.png",
        rect: {
          w: 18,
          h: 11,
          x: 356 - 10,
          y: 350 - 10
        },
        comment: "门锁"
      }, {
        type: "img",
        src: "page_4_34.png",
        rect: {
          w: 49,
          h: 277,
          x: 348,
          y: 220
        },
        comment: "门（开）",
        class: "invisible",
        id: "door_2"
      }, {
        type: "img",
        src: "page_xx_03.png",
        rect: {
          w: 293,
          h: 91,
          x: 0,
          y: 417
        },
        comment: "阴影－2"
      }, {
        type: "img",
        src: "page_xx_04.png",
        rect: {
          w: 285,
          h: 86,
          x: 0,
          y: 419
        },
        comment: "阴影－1"
      }, {
        type: "img",
        src: "qi.png",
        class: 'flag',
        comment: "旗子"
      }, {
        type: "img",
        src: "page_4_37.png",
        rect: {
          w: 260,
          h: 271,
          x: 6,
          y: 125
        },
        comment: "空间球－绕着动",
        class: "round-move"
      }, {
        type: "img",
        src: "page_4_38.png",
        rect: {
          w: 220,
          h: 231,
          x: 5,
          y: 125
        },
        comment: "小空间球－绕着动",
        class: "round-move2"
      }, {
        type: "img",
        src: "page_4_39.png",
        rect: {
          w: 140,
          h: 103,
          x: -1,
          y: 284
        },
        comment: "栏杆",
        speed: {
          x: 0.1,
          y: 0
        }
      }, {
        type: "img",
        src: "page_4_40.png",
        rect: {
          w: 101,
          h: 230,
          x: 540,
          y: 251
        },
        comment: "桌子",
        click: "show_color"
      }, {
        type: "img",
        src: "page_4_41.png",
        rect: {
          w: 16,
          h: 80,
          x: 567,
          y: 267
        },
        comment: "彩瓶动画－5",
        class: "c5 invisible",
        click: "show_color"
      }, {
        type: "img",
        src: "page_4_42.png",
        rect: {
          w: 16,
          h: 67,
          x: 574,
          y: 287
        },
        comment: "彩瓶动画－4",
        class: "c4 invisible",
        click: "show_color"
      }, {
        type: "img",
        src: "page_4_43.png",
        rect: {
          w: 19,
          h: 109,
          x: 584,
          y: 251
        },
        comment: "彩瓶动画－3",
        class: "c3 invisible",
        click: "show_color"
      }, {
        type: "img",
        src: "page_4_44.png",
        rect: {
          w: 16,
          h: 87,
          x: 594,
          y: 279
        },
        comment: "彩瓶动画－2",
        class: "c2 invisible",
        click: "show_color"
      }, {
        type: "img",
        src: "page_4_45.png",
        rect: {
          w: 16,
          h: 56,
          x: 604,
          y: 316
        },
        comment: "彩瓶动画－1",
        class: "c1 invisible",
        click: "show_color"
      }, {
        type: "img",
        src: "page_4_23.png",
        rect: {
          w: 123,
          h: 187,
          x: 49,
          y: 111
        },
        comment: "画3背景框",
        args: [3]
      }, {
        type: "expand",
        html: "<img src='"+dataArr[2]+"' />",
        rect: {
          w: 106,
          h: 152,
          x: 50,
          y: 108
        },
        comment: "画3",
        class: "common-img img03",
        real_click: "show",
        args: [3]
      }, {
        type: "img",
        src: "page_4_47.png",
        rect: {
          w: 174,
          h: 61,
          x: 400,
          y: 300
        },
        comment: "对话框（点击门之后出现）",
        class: "invisible",
        id: "d3"
      }, {
        type: "img",
        src: "page_x3_01.png",
        rect: {
          w: 6,
          h: 15,
          x: 464 + ARROW_DX,
          y: 154 + ARROW_DY
        },
        comment: "箭头_copy_2",
        class: "repeat-new",
        real_click: "show",
        args: [8]
      }, {
        type: "img",
        src: "page_x3_01.png",
        rect: {
          w: 6,
          h: 15,
          x: 809 + ARROW_DX,
          y: 144 + ARROW_DY
        },
        comment: "箭头_copy_3",
        class: "repeat-new",
        real_click: "show",
        args: [7]
      }, {
        type: "img",
        src: "page_x3_01.png",
        rect: {
          w: 6,
          h: 15,
          x: 1024 + ARROW_DX,
          y: 146 + ARROW_DY
        },
        comment: "箭头_copy_4",
        class: "repeat-new",
        real_click: "show",
        args: [2]
      }, {
        type: "img",
        src: "page_x3_01.png",
        rect: {
          w: 6,
          h: 15,
          x: 1211 + ARROW_DX,
          y: 89 + ARROW_DY
        },
        comment: "箭头_copy_5",
        class: "repeat-new",
      }
    ],
    animates: [],
    actions: [],
    played: false,
    waiting: false,
    top: 2004,
    finished: false,
    id: "page_4",
    rect: {
      x: -160,
      y: 0
    },
    moving_config: {
      currentX: 0
    },
    bound: {
      width: 1280,
      center: 480 - 1280
    },
    isRender: false
  }, {
    dom: [{
        type: "img",
        src: "page_5_01.png",
        rect: {
          w: 320,
          h: 508,
          x: 0,
          y: 0
        },
        comment: "白底"
      }, {
        type: "img",
        src: "page_5_02.png?v=new123",
        rect: {
          w: 366,
          h: 226,
          x: -19,
          y: 287
        },
        comment: "地面花纹"
      }, {
        type: "img",
        src: "page_5_03.png",
        rect: {
          w: 120,
          h: 39,
          x: 117,
          y: 129
        },
        comment: "窗户"
      }, {
        type: "img",
        src: "page_5_04.png",
        rect: {
          w: 372,
          h: 162,
          x: 0,
          y: 19
        },
        comment: "立柱"
      }, {
        type: "img",
        src: "page_5_05.png",
        rect: {
          w: 222,
          h: 130,
          x: 126,
          y: 158
        },
        comment: "墙体－3"
      }, {
        type: "img",
        src: "page_5_07.png",
        rect: {
          w: 167,
          h: 39,
          x: 122,
          y: 36
        },
        comment: "窗外射入的光（左右动）（要挡住光）",
        class: "repeat-move"
      }, {
        type: "img",
        src: "page_5_08.png",
        rect: {
          w: 124,
          h: 154,
          x: 85,
          y: 158
        },
        comment: "光－以焦点微旋转"
      }, {
        type: "img",
        src: "page_5_09.png",
        rect: {
          w: 56,
          h: 273,
          x: 70,
          y: 75
        },
        comment: "墙体－2"
      }, {
        type: "img",
        src: "page_5_10.png",
        rect: {
          w: 81,
          h: 508,
          x: 0,
          y: 0
        },
        comment: "墙体"
      }, {
        type: "img",
        src: "page_4_23.png",
        rect: {
          w: 124,
          h: 157,
          x: 153,
          y: 52
        },
        comment: "画7",
        real_click: "show",
        args: [7]
      }, {
        type: "img",
        src: "page_5_12.png",
        rect: {
          w: 288,
          h: 139,
          x: 36,
          y: 322
        },
        comment: "地面矛盾空间"
      }, {
        type: "img",
        src: "page_5_13.png",
        rect: {
          w: 153,
          h: 192,
          x: 213,
          y: 0
        },
        comment: "楼梯上半段（左右动）"
      }, {
        type: "img",
        src: "page_5_14.png",
        rect: {
          w: 247,
          h: 23,
          x: 137,
          y: 189
        },
        comment: "中浮面"
      }, {
        type: "img",
        src: "page_5_15.png",
        rect: {
          w: 160,
          h: 294,
          x: 109,
          y: 146
        },
        comment: "楼梯下半段（左右动）"
      }, {
        type: "img",
        src: "page_5_16.png",
        rect: {
          w: 27,
          h: 4,
          x: 139,
          y: 340
        },
        comment: "矢量智能对象"
      }, {
        type: "img",
        src: "page_p4_01.png",
        rect: {
          w: 186,
          h: 113,
          x: 67,
          y: 370
        },
        comment: "超级优惠卷",
        id: "card_1",
        class: "invisible",
        click: "hide_award"
      }, {
        type: "img",
        src: "page_p4_02.png",
        rect: {
          w: 186,
          h: 113,
          x: 67,
          y: 370
        },
        comment: "代金卷",
        id: "card_2",
        class: "invisible",
        click: "hide_award"
      }
    ],
    animates: [],
    actions: [],
    played: false,
    waiting: false,
    top: 2004,
    finished: false,
    id: "page_5",
    rect: {
      x: -160,
      y: 0
    },
    moving_config: {
      currentX: 0
    },
    bound: {
      width: 320,
      center: 160 - 1280 - 1280 + 480
    },
    isRender: false
  }, {
    dom: [{
        type: "img",
        src: "page_6_01.png",
        rect: {
          w: 320,
          h: 508,
          x: 0,
          y: 0
        },
        comment: "白底"
      }, {
        type: "img",
        src: "page_6_02.png?v=new",
        rect: {
          w: 372,
          h: 254,
          x: -41,
          y: -41
        },
        comment: "顶：与窗户错开动"
      }, {
        type: "img",
        src: "page_6_03.png",
        rect: {
          w: 193,
          h: 68,
          x: 124,
          y: 140
        },
        comment: "窗户"
      }, {
        type: "img",
        src: "page_6_12.png",
        rect: {
          w: 253,
          h: 161,
          x: 35,
          y: 347
        },
        class: 'floor-left',
        comment: "地面－1"
      }, {
        type: "img",
        src: "page_6_13.png",
        rect: {
          w: 253,
          h: 161,
          x: 38,
          y: 347
        },
        class: 'floor-right',
        comment: "地面－2"
      }, {
        type: "img",
        src: "page_6_04.png",
        rect: {
          w: 197,
          h: 135,
          x: 97,
          y: 206
        },
        comment: "墙－c"
      }, {
        type: "img",
        src: "page_6_05.png",
        rect: {
          w: 61,
          h: 105,
          x: 150,
          y: 214
        },
        comment: "阴影花纹"
      }, {
        type: "img",
        src: "page_6_06.png",
        rect: {
          w: 74,
          h: 97,
          x: 163,
          y: 250
        },
        comment: "台阶和门",
        click: "go_w"
      }, {
        type: "div",
        rect: {
          w: 23,
          h: 24,
          x: 205,
          y: 318
        },
        class: 'wc-icon',
        comment: "标识动画（闪烁）",
        click: "go_w"
      }, {
        type: "img",
        src: "page_6_08.png",
        rect: {
          w: 23,
          h: 51,
          x: 205,
          y: 258
        },
        comment: "浮点动画（交替出现）",
        click: "go_w"
      }, {
        type: "img",
        src: "page_6_09.png",
        rect: {
          w: 101,
          h: 428,
          x: 246,
          y: 82
        },
        comment: "画框"
      }, {
        type: "img",
        src: "page_6_10.png",
        rect: {
          w: 31,
          h: 276,
          x: 254,
          y: 147
        },
        comment: "chanon上色初稿0511",
        real_click: "show",
        args: [4]
      }, {
        type: "img",
        src: "page_6_11.png?v=new",
        rect: {
          w: 171,
          h: 451,
          x: -25,
          y: 58
        },
        comment: "墙－l"
      }, {
        type: "img",
        src: "page_6_14.png",
        rect: {
          w: 82,
          h: 362,
          x: 0,
          y: 75
        },
        comment: "管子"
      }, {
        type: "img",
        src: "page_4_23.png",
        rect: {
          w: 107,
          h: 156,
          x: 140,
          y: 207
        },
        comment: "画8",
        real_click: "show",
        args: [8]
      }, {
        type: "img",
        src: "page_xxx_01.png",
        rect: {
          w: 186,
          h: 113,
          x: 67,
          y: 370
        },
        comment: "对话框",
        id: "card_3",
        class: "invisible",
        click: "hide_award"
      }
    ],
    animates: [],
    actions: [],
    played: false,
    waiting: false,
    top: 2004,
    finished: false,
    id: "page_6",
    rect: {
      x: -160,
      y: 0
    },
    moving_config: {
      currentX: 0
    },
    bound: {
      width: 320,
      center: 160 - 1280 - 1280 + 480 - 320
    },
    isRender: false
  }, {
    dom: [{
        type: "img",
        src: "page_w_01.png",
        rect: {
          w: 640,
          h: 508,
          x: -160,
          y: 0
        },
        comment: "黑底"
      }, {
        type: "img",
        src: "page_w_02.png?v=new",
        rect: {
          w: 496,
          h: 197,
          x: -88,
          y: 312
        },
        comment: "地面"
      }, {
        type: "img",
        src: "page_w_03.png",
        rect: {
          w: 145,
          h: 131,
          x: 89,
          y: 347
        },
        comment: "转动投影"
      }, {
        type: "img",
        src: "page_w_04.png",
        rect: {
          w: 256,
          h: 351,
          x: 32,
          y: -5
        },
        comment: "背景墙"
      }, {
        type: "img",
        src: "page_w_05.gif",
        rect: {
          w: 57,
          h: 189,
          x: 211,
          y: 64
        },
        comment: "装饰花纹（gif）",
        class: "invisible ccc5"
      }, {
        type: "img",
        src: "page_w_06.png",
        rect: {
          w: 142,
          h: 214,
          x: 52,
          y: 81
        },
        comment: "装饰点"
      }, {
        type: "img",
        src: "page_w_07.png",
        rect: {
          w: 218,
          h: 18,
          x: 51,
          y: 286
        },
        comment: "背景线"
      }, {
        type: "img",
        src: "page_w_08.png",
        rect: {
          w: 132,
          h: 287,
          x: 94,
          y: 156
        },
        comment: "马桶"
      }, {
        type: "img",
        src: "page_w_09.png",
        rect: {
          w: 17,
          h: 7,
          x: 193,
          y: 160
        },
        comment: "马桶开关按钮动画"
      }, {
        type: "img",
        src: "page_w_10.png",
        rect: {
          w: 166,
          h: 92,
          x: 78,
          y: 371
        },
        comment: "地面点点"
      },

      {
        type: "img",
        src: "page_w_12.png",
        rect: {
          w: 132,
          h: 210,
          x: 94,
          y: 148
        },
        comment: "打开马桶盖(不可见)",
        class: "invisible mt"
      },

      {
        type: "img",
        src: "page_w_16.png",
        rect: {
          w: 320,
          h: 417,
          x: 0,
          y: 0
        },
        comment: "墙面"
      }, {
        type: "img",
        src: "page_w_17.png",
        rect: {
          w: 228,
          h: 351,
          x: 46,
          y: 0
        },
        comment: "彩条近",
        class: "invisible ccc1"
      }, {
        type: "img",
        src: "page_w_18.png",
        rect: {
          w: 313,
          h: 261,
          x: 8,
          y: 65
        },
        comment: "彩条较近",
        class: "invisible ccc2"
      }, {
        type: "img",
        src: "page_w_19.png",
        rect: {
          w: 320,
          h: 417,
          x: 0,
          y: 0
        },
        comment: "彩条中",
        class: "invisible ccc3"
      }, {
        type: "img",
        src: "page_w_20.png",
        rect: {
          w: 320,
          h: 418,
          x: 1,
          y: 0
        },
        comment: "彩条边缘",
        class: "invisible ccc4"
      }, {
        type: "img",
        src: "page_w_21.png",
        rect: {
          w: 187,
          h: 61,
          x: 67,
          y: 407
        },
        comment: "获得钥匙弹出窗口",
        class: "invisible key3"
      }, {
        type: "img",
        src: "page_w_11.png",
        rect: {
          w: 12,
          h: 32,
          x: 154,
          y: 284
        },
        comment: "向上箭头",
        class: "arrow-repeat",
        id: "arrow_key",
        real_click: "open_mt"
      }, {
        type: "div",
        rect: {
          w: 50,
          h: 50,
          x: 134,
          y: 280
        },
        comment: "向上箭头点击区域",
        real_click: "open_mt"
      }, {
        type: "canvas",
        rect: {
          w: 277,
          h: 277,
          x: 20,
          y: 117
        },
        comment: "弹出画板",
        class: "invisible draw1",
        id: "draw"
      }, {
        type: "img",
        src: "page_p5_01.png",
        rect: {
          w: 278,
          h: 18,
          x: 19,
          y: 391
        },
        comment: "确认",
        class: "invisible draw1",
        real_click: "draw_over"
      }, {
        type: "img",
        src: "page_w_24.png",
        rect: {
          w: 79,
          h: 19,
          x: 258,
          y: 468
        },
        comment: "返回键",
        real_click: "go_back"
      }, {
        type: "img",
        // src: "page_w_14.png",
        src: "page_w_14_2.png",
        rect: {
          w: 104,
          h: 131,
          x: 108,
          y: 15
        },
        class: 'wc_pic',
        real_click: "show",
        args: [12],
        comment: "画框"
      }, {
        type: "expand",
        src: "page_w_13.png",
        rect: {
          w: 26,
          h: 11,
          x: 147 - 10,
          y: 209 - 10
        },
        comment: "黑钥匙(不可见)",
        class: "invisible mt key-repeat",
        real_click: "get_key"
      }


    ],
    animates: [],
    actions: [],
    played: false,
    waiting: false,
    top: 2004,
    finished: false,
    id: "page_w",
    rect: {
      x: -160,
      y: 0
    },
    moving_config: {
      currentX: 0
    },
    bound: {
      width: 320,
      center: 160
    },
    isRender: false
  }, {
    dom: [{
      type: "img",
      src: "page_final_01.png",
      rect: {
        w: 640,
        h: 508,
        x: -160,
        y: 0
      },
      comment: "白底"
    }, {
      type: "img",
      src: "page_final_02.png",
      rect: {
        w: 617,
        h: 112,
        x: -159,
        y: 399
      },
      comment: "地面"
    }, {
      type: "img",
      src: "page_final_03.png",
      rect: {
        w: 599,
        h: 93,
        x: -139,
        y: -26
      },
      class: 'floor',
      comment: "天花板"
    }, {
      type: "img",
      src: "page_final_04.png",
      rect: {
        w: 320,
        h: 77,
        x: 0,
        y: 63
      },
      comment: "图层_2"
    }, {
      type: "img",
      src: "page_final_05.png",
      rect: {
        w: 350,
        h: 118,
        x: 0,
        y: 63
      },
      comment: "背景白"
    }, {
      type: "img",
      src: "page_final_06.png",
      rect: {
        w: 513,
        h: 136,
        x: -46,
        y: 63
      },
      comment: "窗户"
    }, {
      type: "img",
      src: "page_final_07.png",
      rect: {
        w: 77,
        h: 106,
        x: 60,
        y: 63
      },
      comment: "柱子"
    }, {
      type: "img",
      src: "page_final_10.png",
      rect: {
        w: 292,
        h: 267,
        x: -12,
        y: 134
      },
      comment: "展柜－1"
    }, {
      type: "expand",
      html: "<a href='http://www.baidu.com'><img src='images/page_final_11.png' /></a>",
      rect: {
        w: 58,
        h: 87,
        x: -12,
        y: 133
      },
      comment: "其他1",
      class: "other-act"
    }, {
      type: "expand",
      html: "<a href='http://www.baidu.com'><img src='images/page_final_11.png' /></a>",
      rect: {
        w: 58,
        h: 87,
        x: 54,
        y: 133
      },
      comment: "其他1",
      class: "other-act"
    }, {
      type: "expand",
      html: "<a href='http://www.baidu.com'><img src='images/page_final_11.png' /></a>",
      rect: {
        w: 58,
        h: 87,
        x: 122,
        y: 133
      },
      comment: "其他1",
      class: "other-act"
    }, {
      type: "expand",
      html: "<a href='http://www.baidu.com'><img src='images/page_final_11.png' /></a>",
      rect: {
        w: 58,
        h: 87,
        x: 190,
        y: 133
      },
      comment: "其他1",
      class: "other-act"
    }, {
      type: "expand",
      html: "<a href='http://www.baidu.com'><img src='images/page_final_11.png' /></a>",
      rect: {
        w: 58,
        h: 87,
        x: -12,
        y: 224
      },
      comment: "其他1",
      class: "other-act"
    }, {
      type: "expand",
      html: "<a href='http://www.baidu.com'><img src='images/page_final_11.png' /></a>",
      rect: {
        w: 58,
        h: 87,
        x: 54,
        y: 224
      },
      comment: "其他1",
      class: "other-act"
    }, {
      type: "expand",
      html: "<a href='http://www.baidu.com'><img src='images/page_final_11.png' /></a>",
      rect: {
        w: 58,
        h: 87,
        x: 122,
        y: 224
      },
      comment: "其他1",
      class: "other-act"
    }, {
      type: "expand",
      html: "<a href='http://www.baidu.com'><img src='images/page_final_11.png' /></a>",
      rect: {
        w: 58,
        h: 87,
        x: 190,
        y: 224
      },
      comment: "其他1",
      class: "other-act"
    }, {
      type: "img",
      src: "page_final_20.png?v=new",
      rect: {
        w: 160,
        h: 208,
        x: -33,
        y: 301
      },
      comment: "收银台"
    }, {
      type: "img",
      src: "page_final_21.png",
      rect: {
        w: 154,
        h: 119,
        x: 47,
        y: 0
      },
      comment: "纪念品灯"
    }, {
      type: "div",
      src: "page_final_22.png?v=2",
      rect: {
        w: 146,
        h: 31,
        x: 163,
        y: 437
      },
      comment: "立即分享",
      class: 'share-btn',
      real_click: "share"
    }, {
      type: "div",
      src: "btn-light.png",
      rect: {
        w: 146,
        h: 31,
        x: 163,
        y: 437
      },
      comment: "按钮的光",
      class: 'btn-light',
      real_click: "share"
    }, {
      type: "div",
      src: "page_final_24.png",
      rect: {
        w: 146,
        h: 31,
        x: 163,
        y: 400
      },
      comment: "立即购买",
      class: 'buy-btn',
      real_click: "link"
    }, {
      type: "div",
      src: "btn-light.png",
      rect: {
        w: 146,
        h: 31,
        x: 163,
        y: 400
      },
      comment: "按钮的光",
      class: 'btn-light',
      real_click: "link"
    }, {
      type: "img",
      src: "shunshine-1.png",
      comment: 'preload',
      class: "invisible"
    }, {
      type: "img",
      src: "shunshine-2.png",
      comment: 'preload',
      class: "invisible"
    }],
    animates: [],
    actions: [],
    played: false,
    waiting: false,
    top: 2004,
    finished: false,
    id: "page_final",
    rect: {
      x: -160,
      y: 0
    },
    moving_config: {
      currentX: 0
    },
    bound: {
      width: 320,
      center: 160
    },
    isRender: false,
    nightOnly: true
  }, {
    dom: [{
      type: 'img',
      src: 'p_1.gif',
      class: 'invisible'
    }, {
      type: 'img',
      src: 'p_1.png',
      class: 'invisible'
    }, {
      type: 'img',
      src: 'p_2.png',
      class: 'invisible'
    }, {
      type: 'img',
      src: 'p_3.png',
      class: 'invisible'
    }, {
      type: 'img',
      src: 'p_4.png',
      class: 'invisible'
    }, {
      type: 'img',
      src: 'p_5.png',
      class: 'invisible'
    }, {
      type: 'img',
      src: 'p_6.png',
      class: 'invisible'
    }, {
      type: 'img',
      src: 'p_7.png',
      class: 'invisible'
    }, {
      type: 'img',
      src: 'p_8.png',
      class: 'invisible'
    }, {
      type: 'img',
      src: 'p_9.png',
      class: 'invisible'
    }, {
      type: 'img',
      src: 'p_10.png',
      class: 'invisible'
    }, {
      type: 'img',
      src: 'p_11.png',
      class: 'invisible'
    }, {
      type: 'img',
      src: 'p_12.png',
      class: 'invisible'
    }]
  }]
};
