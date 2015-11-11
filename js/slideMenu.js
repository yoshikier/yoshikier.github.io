$(function () {

		//定义需要的元素对象 和需要的属性值
    var $liCur = $(".menu-list li.current"),
        curP = $liCur.position().left,
        curW = $liCur.outerWidth(true),
        $slider = $(".slide-bg"),
        $navBox = $(".menu-list");
    $targetEle = $(".menu-list li a"),
    $currentA = $(".menu-list li.current a");

    //加载完dom结构 初始化当前导航背景位置
    $slider.stop().animate({
            "left": curP,
            "width": curW
        }, 500, function () {

    		//鼠标划过导航
        $targetEle.mouseover(function () {

        		//鼠标滑动时 如果划过的元素不是当前选中的菜单，则设置字的颜色为#333333
            if (!$(this).parent("li").hasClass("current")) {
                $currentA.css("color", "#333333");
            }

            var $_this = $(this),
            		$_parent = $(this).parent(),
                _width = $_parent.outerWidth(true),
                posL = $_parent.position().left;
           	
            $slider.stop(false, true).animate({
                "left": posL,
                "width": _width
            }, 300,function(){
            	$($_this).css("color", "#fff");
            });

            


        //鼠标离开元素时执行效果
        }).mouseleave(function () {
        		$slider.stop(false,true).animate();
        		//如果li里面没有current  则设置其他元素为#333333
            if (!$(this).parent("li").hasClass("current")) {
                $(this).css("color", "#333333")
            }
        });

        //鼠标离开导航时
        $navBox.mouseleave(function (cur, wid) {
        		$slider.stop(false,true).animate();
            cur = curP;
            wid = curW;
            $targetEle.css("color", "#333333"); 
            $slider.stop(true, true).animate({
                "left": cur,
                "width": wid
            }, 350,function(){ 	
            	$currentA.css("color", "#ffffff");
            })
        })
    })
});
			