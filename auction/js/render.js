var scale = 1;
var css_width = 320;
var page_height = $(window).height();
var page_width = $(window).width();
scale = page_height / 508;
css_width = page_width / scale; //css宽度，跟页面宽度相同了

//$('body').css("-webkit-transform", " scale(" + scale + ","+scale+")");