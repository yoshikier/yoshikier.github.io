function configWxshare(title, desc, link, imgUrl) {
  if (!window.wx) return;

  wx.onMenuShareTimeline({
    title: desc, // 分享标题
    link: link, // 分享链接
    imgUrl: imgUrl, // 分享图标
    success: function() {
      // 用户确认分享后执行的回调函数

    },
    cancel: function() {
      // 用户取消分享后执行的回调函数
    }
  });

  wx.onMenuShareAppMessage({
    title: title, // 分享标题
    desc: desc, // 分享描述
    link: link, // 分享链接
    imgUrl: imgUrl, // 分享图标
    type: '', // 分享类型,music、video或link，不填默认为link
    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: function() {
      // 用户确认分享后执行的回调函数
    },
    cancel: function() {
      // 用户取消分享后执行的回调函数
    }
  });
}

$(document).ready(function() {
  // -------------配置-------------
  // var API_URL = 'http://bdaladdin.duapp.com/wxshare/api/';
  var API_URL = 'http://bdaladdin.duapp.com/wxshare-hs/api/';
  $.ajax({
    url: API_URL,
    data: {
      url: window.location.href
    },
    dataType: "jsonp"
  }).success(function(data) {

    if (data.status != 'ok') {
      return;
    }

    // console.log(data);
    wx.config({
      // debug: true,
      appId: data.appId,
      timestamp: data.timestamp,
      nonceStr: data.nonceStr,
      signature: data.signature,
      jsApiList: [
        // 所有要调用的 API 都要加到这个列表中
        'onMenuShareTimeline', 'onMenuShareAppMessage'
      ]
    });
    wx.ready(function() {
      // -------------配置-------------
      // var ROOT_URL = 'http://dev.benbun.com/web/durexart/';
      var ROOT_URL = 'http://m.durex.com.cn/qr/artmuseum/';
      var title = '液体主义群展';
      var desc = '杜蕾斯的第一座美术馆';
      var link = ROOT_URL;
      var imgUrl = ROOT_URL + 'images/wxshare.jpg';
      configWxshare(title, desc, link, imgUrl);
    });

  });
});
