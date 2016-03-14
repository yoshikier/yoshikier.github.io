
window.onload = function() {

  //动画对象
  var page1 = $("section.page-1");
  var page2 = $("section.page-2");
  var page3 = $("section.page-3");
  var page4 = $("section.page-4");
  var page5 = $("section.page-5");
  var page6 = $("section.page-6");
  var page7 = $("section.page-7");
  var page8 = $("section.page-8");

  //渐显上移动画
  $.Velocity.RegisterUI('yun.slideUpIn', {
    defaultDuration: 1000,
    calls: [
      [{opacity: [1, 0], translateY: [0, 100]}]
    ]
  });
  $.Velocity.RegisterUI('yun.slideUpInSlowly', {
    defaultDuration: 1000,
    calls: [
      [{opacity: [1, 0], rotateZ: 360}]
    ]
  });
  $.Velocity.RegisterUI('yun.slideUpInSlowly2', {
    defaultDuration: 1000,
    calls: [
      [{opacity: [1, 0], rotateZ: -360}]
    ]
  });


  //首页动画序列
  var indexSeq = [
    {
      elements: page1,
      properties: 'yun.slideUpInSlowly',
      options: {
        delay: 0
      }
    }, {
      elements: page6,
      properties: 'yun.slideUpInSlowly',
      options: {
        delay: 0
      }
    }, {
      elements: page2,
      properties: 'yun.slideUpInSlowly',
      options: {
        delay: 0
      }
    }, {
      elements: page3,
      properties: 'yun.slideUpInSlowly',
      options: {
        delay: 0
      }
    }, {
      elements: page4,
      properties: 'yun.slideUpInSlowly',
      options: {
        delay: 0
      }
    }, {
      elements: page5,
      properties: 'yun.slideUpInSlowly',
      options: {
        delay: 0
      }
    }, {
      elements: page7,
      properties: 'yun.slideUpInSlowly',
      options: {
        delay: 0
      }
    }, {
      elements: page8,
      properties: 'yun.slideUpInSlowly',
      options: {
        delay: 0
      }
    }
  ];


  //$.Velocity.RunSequence(indexSeq);
  page1.velocity("transition.bounceDownIn",{delay: 300});
  page2.velocity("transition.swoopIn",{delay: 500});
  page3.velocity("yun.slideUpInSlowly2",{delay: 1600});
  page5.velocity("yun.slideUpInSlowly",{delay: 2100});
  page4.velocity("yun.slideUpInSlowly2",{delay: 2600});
  page6.velocity("transition.bounceDownIn",{delay: 3400});
  page7.velocity("transition.shrinkIn",{delay: 4000});
  page8.velocity("transition.shrinkIn",{delay: 4300});

}