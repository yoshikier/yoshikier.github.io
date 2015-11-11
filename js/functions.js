
$(document).ready(function(){

  //动画对象
  //首页
  var iTitle = $(".i-title");
  var titleAngel = $(".title-angel");
  var titleExp = $(".title-exp");
  var downLoad = $(".down-load");

  //个人版
  //一屏
  var personLogo = $(".person-logo");
  var personDown = $(".person-down");
  var personPhone = $(".person-phone");

  //二屏
  var iconPersonArr = $(".icon-content .icon-box");
  var phonetImg = $(".phone2 img");
  var secExptwoH = $(".section-exp-2 h1");
  var secExptwoP = $(".section-exp-2 .exp");
  var personShadow = $(".person-shadow");

  //三屏
  var phonethImg = $(".phone3 img");
  var phoneBookImg = $(".book img");
  var secExpthH = $(".section-exp-3 h1");
  var secExpthP = $(".section-exp-3 .exp");

  //四屏
  var phoneGirlImg = $(".girl img");
  var phonefoImg = $(".phone4 img");
  var secExpfoH = $(".section-exp-4 h1");
  var secExpfoP = $(".section-exp-4 .exp");

  //五屏
  var phoneBaloonImg = $(".balloon img");
  var phonefiImg = $(".phone5 img");
  var secExpfiH = $(".section-exp-5 h1");
  var secExpfiP = $(".section-exp-5 .exp");

  //医生版
  //一屏
  var doctorLogo = $(".doctor-logo");
  var doctorDown = $(".doctor-down");
  var doctorPhone = $(".doctor-phone");

  //二屏
  var docIcon = $(".doc-box .doc-icon");
  var docP = $(".doc-box p");

  //底部
  var booterH = $(".booter h1");
  var downloadContent = $(".download-content");

  //关于我们
  var aboutTopLogo = $(".top-logo");
  var aboutTitle = $(".ab-title");
  var touchTitle = $(".to-title");
  var aboutContentP = $(".about-content p");
  var touchContentP = $(".touch-content p");

  //定义导航
  var mobileNav = $("mobile-nav");

  //渐显上移动画
  $.Velocity.RegisterUI('yun.slideUpIn', {
    defaultDuration: 1000,
    calls: [
      [{opacity: [1, 0], translateY: [0, 100]}]
    ]
  });
  $.Velocity.RegisterUI('yun.slideUpInSlowly', {
    defaultDuration: 4000,
    calls: [
      [{opacity: [1, 0], translateY: [0, 100]}]
    ]
  });
  $.Velocity.RegisterUI('yun.slideUpInBig', {
    defaultDuration: 1000,
    calls: [
      [{opacity: [1, 0], translateY: [0, 100], scale: 1.1}, 0.5],
      [ { scale: 1.0 }, 0.5 ]
    ]
  });
  $.Velocity.RegisterUI('yun.slideUpInHalf', {
    defaultDuration: 1000,
    calls: [
      [{opacity: [1, 0], translateY: [0, 50]}]
    ]
  });

  //渐显左移动画
  $.Velocity.RegisterUI('yun.slideLeftSlowly', {
    defaultDuration: 5000,
    calls: [
      [{opacity: [1, 0], translateX: [0, -100]}]
    ]
  });

  //渐显动画
  $.Velocity.RegisterUI('yun.slideOpacitySlowly', {
    defaultDuration: 3000,
    calls: [
      [{opacity: [1, 0]}]
    ]
  });
  //渐隐动画
  $.Velocity.RegisterUI('yun.slideOpacityHideSlowly', {
    defaultDuration: 2000,
    calls: [
      [{opacity: [0, 1]}]
    ]
  });

  $.Velocity.RegisterUI('yun.slowlyShow', {
    defaultDuration: 2000,
    calls: [
      [{opacity: [1, 0], scale: [1.0, 0.5], rotateY: 360}]
    ]
  });

  //判断透明度
  function isOpacity(ele) {
    if (ele.css('opacity') == 0) {
      return false;
    } else {
      return true;
    }
  }

  //首页动画序列
  var indexSeq = [
    {
      elements: titleAngel,
      properties: 'yun.slideUpInBig',
      options: {
        delay: 200
      }
    }, {
      elements: titleExp,
      properties: 'yun.slideUpInBig',
      options: {
        delay: 400,
        sequenceQueue: false
      }
    }, {
      elements: downLoad,
      properties: 'yun.slideUpIn',
      options: {
        delay: 600,
        sequenceQueue: false
      }
    }, {
      elements: iTitle,
      properties: 'yun.slideOpacitySlowly',
      options: {
        delay: 600,
        sequenceQueue: false
      }
    }
  ];

  //个人版一屏动画序列
  var personalOne = [
    {
      elements: personPhone,
      properties: 'yun.slideUpInHalf',
      options: {
        duration: 1200,
        delay: 100,
      }
    }, {
      elements: personLogo,
      properties: 'transition.slideLeftIn',
      options: {
        delay: 400,
        duration: 1500,
        sequenceQueue: false
      }
    }, {
      elements: personDown,
      properties: 'transition.slideLeftIn',
      options: {
        delay: 400,
        duration: 1500,
        sequenceQueue: false
      }
    }
  ];

  var personalTwo = [
    {
      elements: secExptwoH,
      properties: 'transition.flipBounceXIn',
      options: {
        delay: 0,
        duration: 0,
        sequenceQueue: false
      }
    }, {
      elements: secExptwoP,
      properties: 'transition.flipBounceXIn',
      options: {
        delay: 300,
        duration: 0,
        sequenceQueue: false
      }
    }, {
      elements: phonetImg,
      properties: 'yun.slideUpInHalf',
      options: {
        delay: 0,
        sequenceQueue: false
      }
    }, {
      elements: iconPersonArr.eq(0),
      properties: 'yun.slowlyShow',
      options: {
        delay: 400,
        sequenceQueue: false
      }
    }, {
      elements: iconPersonArr.eq(1),
      properties: 'yun.slowlyShow',
      options: {
        delay: 320,
        sequenceQueue: false
      }
    }, {
      elements: iconPersonArr.eq(2),
      properties: 'yun.slowlyShow',
      options: {
        delay: 280,
        sequenceQueue: false
      }
    }, {
      elements: iconPersonArr.eq(3),
      properties: 'yun.slowlyShow',
      options: {
        delay: 400,
        sequenceQueue: false
      }
    }, {
      elements: iconPersonArr.eq(4),
      properties: 'yun.slowlyShow',
      options: {
        delay: 320,
        sequenceQueue: false
      }
    }, {
      elements: iconPersonArr.eq(5),
      properties: 'yun.slowlyShow',
      options: {
        delay: 280,
        sequenceQueue: false
      }
    }, {
      elements: personShadow,
      properties: 'yun.slideUpInSlowly',
      options: {
        delay: 280,
        sequenceQueue: false
      } 
    }


  ];

  var personalThree = [
    {
      elements: secExpthH,
      properties: 'transition.swoopIn',
      options: {
        delay: 0,
        duration: 1000,
      }
    }, {
      elements: secExpthP,
      properties: 'transition.swoopIn',
      options: {
        delay: 50,
        duration: 1000,
        sequenceQueue: false
      }
    }, {
      elements: phonethImg,
      properties: 'yun.slideUpInHalf',
      options: {
        duration: 1200,
        delay: 0,
        sequenceQueue: false
      }
    }, {
      elements: phoneBookImg,
      properties: 'transition.slideLeftIn',
      options: {
        delay: 500,
        duration: 1500,
        sequenceQueue: false
      }
    }
  ];

  var personalFour = [
    {
      elements: secExpfoH,
      properties: 'transition.shrinkIn',
      options: {
        delay: 0,
        duration: 1000,
      }
    }, {
      elements: secExpfoP,
      properties: 'transition.shrinkIn',
      options: {
        delay: 50,
        duration: 1000,
        sequenceQueue: false
      }
    }, {
      elements: phonefoImg,
      properties: 'yun.slideUpInHalf',
      options: {
        duration: 1200,
        delay: 0,
        sequenceQueue: false
      }
    }, {
      elements: phoneGirlImg,
      properties: 'yun.slideUpInHalf',
      options: {
        delay: 500,
        duration: 1500,
        sequenceQueue: false
      }
    }
  ];

 var personalFive = [
    {
      elements: secExpfiH,
      properties: 'transition.bounceLeftIn',
      options: {
        delay: 0,
        duration: 1000,
      }
    }, {
      elements: secExpfiP,
      properties: 'transition.bounceLeftIn',
      options: {
        delay: 50,
        duration: 1000,
        sequenceQueue: false
      }
    }, {
      elements: phonefiImg,
      properties: 'yun.slideUpInHalf',
      options: {
        duration: 1200,
        delay: 0,
        sequenceQueue: false
      }
    }, {
      elements: phoneBaloonImg,
      properties: 'yun.slideUpInHalf',
      options: {
        delay: 500,
        duration: 1500,
        sequenceQueue: false
      }
    }
  ];

  //医生版动画序列
  var doctorOne = [
    {
      elements: doctorPhone,
      properties: 'yun.slideUpInHalf',
      options: {
        duration: 1200,
        delay: 100,
      }
    }, {
      elements: doctorLogo,
      properties: 'transition.slideRightIn',
      options: {
        delay: 400,
        duration: 1500,
        sequenceQueue: false
      }
    }, {
      elements: doctorDown,
      properties: 'transition.slideRightIn',
      options: {
        delay: 400,
        duration: 1500,
        sequenceQueue: false
      }
    }
  ];

  var doctorTwo = [
    {
      elements: docIcon,
      properties: 'transition.slideUpIn',
      options: {
        duration: 1200,
        delay: 200,
      }
    }, {
      elements: docP,
      properties: 'transition.slideUpIn',
      options: {
        delay: 400,
        duration: 1500,
        sequenceQueue: false
      }
    }
  ];

  //底部动画序列
  var bootSeq = [
    {
      elements: booterH,
      properties: 'yun.slideUpIn',
      options: {
        duration: 1200,
        delay: 0,
        sequenceQueue: false
      }
    }, {
      elements: downloadContent,
      properties: 'yun.slideUpInHalf',
      options: {
        delay: 500,
        duration: 1500,
        sequenceQueue: false
      }
    }
  ]


  //首页特效
  if (!isOpacity(titleAngel)) {
    $.Velocity.RunSequence(indexSeq);
  };

  //滚动特效
  var nowPage = $("#now-page").val();
  if (nowPage == "personal") {

    $("#fullpage-personal").fullpage({
      verticalCentered: false,
      scrollingSpeed: 1000,
      anchors: ['page1','page2','page3','page4','page5','page6'],
      navigation: true,
      afterLoad: function(anchorLink, index) {
        var personI = index;
        if (personI == 1) {
          if (!isOpacity(personPhone)) {
            $.Velocity.RunSequence(personalOne);
          }  
        } 
        
      },
      onLeave: function(index, nextIndex, direction) {
        var nextI = nextIndex;
        setTimeout(function(){
          if (nextI == 1) {
            if (!isOpacity(personPhone)) {
              $.Velocity.RunSequence(personalOne);
            }  
          } else if (nextI == 2) {
            if (!isOpacity(phonetImg)) {
              $.Velocity.RunSequence(personalTwo);
            }  
          } else if (nextI == 3) {
            if (!isOpacity(phonethImg)) {
              $.Velocity.RunSequence(personalThree);
            }  
          } else if (nextI == 4) {
            if (!isOpacity(phonefoImg)) {
              $.Velocity.RunSequence(personalFour);
            }  
          } else if (nextI == 5) {
            if (!isOpacity(phonefiImg)) {
              $.Velocity.RunSequence(personalFive);
            }  
          } else if (nextI == 6) {
            if (!isOpacity(booterH)) {
              $.Velocity.RunSequence(bootSeq);
            }  
          };
        }, 500);
        
      }

    });

  } else if (nowPage == "doctor") {

    $("#fullpage-doctor").fullpage({ 
      verticalCentered: false,
      scrollingSpeed: 1000,
      anchors: ['page1','page2','page3'],
      navigation: true,
      afterLoad: function(anchorLink, index) {
        var personI = index;
        if (personI == 1) {
          if (!isOpacity(doctorPhone)) {
            $.Velocity.RunSequence(doctorOne);
          }   
        } 
        
      },
      onLeave: function(index, nextIndex, direction) {
        var nextI = nextIndex;
        setTimeout(function(){
          if (nextI == 1) {
            if (!isOpacity(doctorPhone)) {
              $.Velocity.RunSequence(doctorOne);

            } 
          } else if (nextI == 2) {

            if (!isOpacity(docIcon)) {
              $.Velocity.RunSequence(doctorTwo);
            }  

          } else if (nextI == 3) {

            if (!isOpacity(booterH)) {
              $.Velocity.RunSequence(bootSeq);
            }  
          }; 
        }, 500);
        
      }
    });
  } else if (nowPage == "about") {

    $("#fullpage-aboutus").fullpage({
      verticalCentered: false,
      scrollingSpeed: 1000,
      anchors: ['page1','page2','page3'],
      navigation: true,
      afterLoad: function(anchorLink, index) {
        var aboutI = index;
        if (aboutI == 1) {
          if(!isOpacity(aboutTopLogo)) {
            aboutTopLogo.velocity("yun.slideUpIn",{delay: 300});
          }
          
        }
      },
      onLeave: function(index, nextIndex, direction) {
        var nextI = nextIndex;
        setTimeout(function(){
          if (nextI == 1) {
            if(!isOpacity(aboutTopLogo)) {
              aboutTopLogo.velocity("yun.slideUpIn",{delay: 300});
            }
          } else if (nextI == 2) {
            if(!isOpacity(aboutTitle)) {
              aboutTitle.velocity("transition.bounceLeftIn");
              aboutContentP.eq(0).velocity("transition.bounceRightIn",{delay: 500});
              aboutContentP.eq(1).velocity("transition.bounceLeftIn",{delay: 800});
            }

          } else if (nextI == 3) {
            if(!isOpacity(touchTitle)) {
              touchTitle.velocity("transition.bounceRightIn");
              touchContentP.velocity("transition.bounceLeftIn",{delay: 600});
            }

          };
        }, 500);
        
      }

    });

  };

  //设置首页背景
  var mediaWidth = $(window).width();
  var tagT = null;

  function isBgFunc() {

    if(typeof($.backstretch) == 'function') {

      return true;
    } else {

      return false;
    }
  }
  //定义设置背景色方法
  function setBackground(mediaWidth) {

    if (mediaWidth <= 640) {

      if (isBgFunc()) { 

         $.backstretch("images/mobie_bg01.jpg");
      }
     
    } else {

      //设置首页随机背景
      if (isBgFunc()) {

        var indexI = Math.ceil(Math.random()*10);
        if (indexI > 3) {

          $.backstretch("images/index_bg_01.jpg");
          tagT = true;
        } else {

          $.backstretch("images/index_bg_02.jpg");
          tagT = false;
        } 
      }

    }
  };


  setBackground(mediaWidth);

  //当窗口缩放时 设置背景色
  $(window).on('resize', function(){

    var mediaWidth = $(window).width();

    if (mediaWidth <= 640) { 

      if (isBgFunc()) {
        $.backstretch("images/mobie_bg01.jpg");
      }  
    } else {

      if (isBgFunc()) {
        if (tagT) {

          $.backstretch("images/index_bg_01.jpg");
        } else {

          $.backstretch("images/index_bg_02.jpg");
        }
      }  
    }

  });

  //移动导航菜单效果
  $(".menu-toggle").on("click", function(){

    if($(".menu-slide").css("display") == "none") {
      $(".mobile-nav").css("background-color", "#ffffff");
    }
    
    $(".menu-slide").slideToggle(function(i){
        if($(".menu-slide").css("display") == "none") {
          
          $(".mobile-nav").css("background", 'none');

        }
    });
     
  });

});