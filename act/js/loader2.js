var ROOT_URL = './';
// var ROOT_URL = 'http://durexcdn.ccgslb.com.cn/';

var Loader = function(baseUrl) {
  this.baseUrl = baseUrl || "";
  this.imageArr = [];
  this.asyncArr = [];
  this.syncArr = [];
  this.queues = new Array();
  this.loadedPages = 0;
};
Loader.prototype = {
  loadScript: function(src, callback) {
    var head = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
      script, options;
    var url;
    if (src.indexOf("http://") >= 0) {
      url = src;
    } else {
      url = this.baseUrl + "js/" + src;
    }
    //var url = this.baseUrl + "js/" + src;
    script = document.createElement("script");
    script.async = false;
    script.type = "text/javascript";
    script.charset = "utf-8";
    // url = url + (/\?/.test(url) ? "&" : "?") + "_=" + (new Date()).getTime();
    script.src = url;
    head.insertBefore(script, head.firstChild);
    if (callback) {
      document.addEventListener ? script.addEventListener("load", callback, false) : script.onreadystatechange = function() {
        if (/loaded|complete/.test(script.readyState)) {
          script.onreadystatechange = null;
          callback();
        }
      }
    }
  },
  loadCSS: function(src, callback) {

  },
  loadImage: function(src, callback) {
    var image = new Image();
    //var that = this;
    var url;
    if (src.indexOf("http://") >= 0) {
      url = src;
    } else {
      url = this.baseUrl + "images/" + src;
    }
    image.src = url;
    image.addEventListener('load', function(_src, _callback, _image, that) {
      return function(e) {
        _callback.apply(this, arguments);
        that.insertImage(_src, {
          loaded: true,
          img: _image
        });
      }
    }(src, callback, image, this));
    image.addEventListener('error', function(_src, _callback, _image, that) {
      return function(e) {
        _callback.apply(this, arguments);
        that.insertImage(_src, {
          loaded: false,
          img: _image
        });
      }
    }(src, callback, image, this));
  },
  insertImage: function(url, obj) {
    this.imageArr[url] = obj;
  },
  load: function(type, src, callback) {
    switch (type) {
      case "script":
        this.loadScript(src, callback);
        break;
      case "css":
        this.loadCSS(src, callback);
        break;
      case "image":
        this.loadImage(src, callback);
        break;
      default:
        break;
    }
  },
  loadSync: function(configs, percentage, next, index) {
    if (configs.length > 0) {
      index = index || 0;
      var config = configs[index];
      var that = this;
      this.load(config[0], config[1], function() {
        if (index < configs.length - 1) {
          percentage(configs.length, index);
          that.loadSync(configs, percentage, next, index + 1);
        } else {
          next.apply(this, arguments);
        }
      });
    } else {
      next();
    }

  },
  loadAsync: function(configs, percent, finish) {
    var index = 0;
    for (var i = 0; i < configs.length; i++) {
      var config = configs[i];
      this.load(config[0], config[1], function() {
        index++;
        percent(configs.length, index);
        if (index == configs.length) {
          finish.apply(this, arguments);
        }
      })
    }
  },
  addQueue: function(type, url, sync, loader_index) {
    var config = [type, url];
    loader_index = loader_index || 0;
    if (sync) {
      //同步列队
      this.queues[loader_index].syncArr.push(config);
      //this.syncArr.push(config)
    } else {
      this.queues[loader_index].asyncArr.push(config);
      //this.asyncArr.push(config);
    }
  },
  getTotalCount: function() {
    var total_count = 0;
    for (var i = 0; i < this.queues.length; i++) {
      var total = this.queues[i].asyncArr.length + this.queues[i].syncArr.length;
      total_count += total;
    }
    return total_count;
  },
  getAlreadyCount: function(index) {
    var total_count = 0;
    for (var i = 0; i < index; i++) {
      var total = this.queues[i].asyncArr.length + this.queues[i].syncArr.length;
      total_count += total;
    }
    return total_count;
  },
  execQueue: function(percent, finish, loader_index) {
    loader_index = loader_index || 0;
    var total = this.queues[loader_index].asyncArr.length + this.queues[loader_index].syncArr.length;
    var that = this;
    this.loadSync(this.queues[loader_index].syncArr,
      function(a, index) {
        percent(total, index, loader_index, that.getAlreadyCount(loader_index) + index, that.getTotalCount());
      },
      function() {
        that.loadAsync(that.queues[loader_index].asyncArr, function(a, index) {
          percent(total, index + that.queues[loader_index].syncArr.length, loader_index, that.getAlreadyCount(loader_index) + index, that.getTotalCount())
        }, function() {
          //当前page全部执行完毕之后
          finish(loader_index); //执行依次finish回调
          if (loader_index < that.queues.length - 1) {
            that.execQueue(percent, finish, loader_index + 1);
          }
        });
      }, 0);
  },
  loadConfig: function(config, percent, finish, page_index) {
    var total_queue_count = config.pages.length;
    page_index = page_index || 0;
    this.queues.push({
      asyncArr: [],
      syncArr: [],
      finished: false
    });
    var js = config.basic.js;
    for (var i = 0; i < js.length; i++) {
      if (js[i].sync) { //同步列队
        this.addQueue("script", js[i].url, true, 0);
      } else {
        this.addQueue("script", js[i].url, false, 0);
      }
    }
    var images = config.basic.images;
    for (var i = 0; i < images.length; i++) {
      this.addQueue("image", images[i], false, 0);
    }
    var pages = config.pages;
    for (var i = 0; i < pages.length; i++) {
      var page = pages[i];
      if (i > 0) {
        this.queues.push({
          asyncArr: [],
          syncArr: [],
          finished: false
        });
      }

      for (var j = 0; j < page.dom.length; j++) {
        var _dom = page.dom[j]; //获取该dom元素的fill
        if (_dom.src) {
          this.addQueue("image", _dom.src, false, i);
        }
      }
    }
    this.execQueue(percent, finish, page_index); //执行同步loading
  }
}
var a;
var act;
var render;
var loader = new Loader(ROOT_URL);
var jqueryInit = false;


function onLoadedAll() {
  // console.log('onLoadedAll');
  a = new Animate(page_config);
  act = new Action();
  render = new Render(a, act, page_config);
  render.render();
  a.start();

  $("#loader").hide();

  FastClick.attach(document.body);

  // debug
  // a.showPage(2);
  // a.showPage(3);
  // a.showPage(8);
  // a.showPage(7);
  // act.show([1]);
  // $('#share').show();
}

loader.load("script", "config_plus2.js", function() {
  // console.log('page_config', page_config);
  loader.loadConfig(page_config, function(total, index, pindex, real_index, real_total) {
    // console.log('percent', total, index, pindex, real_index, real_total);
    var rate = real_index / real_total;
    document.getElementById("loader_data").innerHTML = Math.floor(rate * 100) + "%";
  }, function(pindex) {
    // console.log('Loaded page#' + pindex);
    page_config.pages[pindex].finished = true;
    ++loader.loadedPages;
    if (loader.loadedPages >= 10) {
      onLoadedAll();
    }
  }, 0);
});
