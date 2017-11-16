jQuery(document).ready(function($){
	var fx =  '<section class="f-ggx" style="display:none"><div class="m-gamewf guanbi"></div><div class="m-fxdiv"><div><a href="/"><img src="skin/n2015/images/index.png">首页</a></div><div><a href=""><img src="skin/n2015/images/refresh.png">刷新</a></div><div><a href="javascript:void(0)"><img src="skin/n2015/images/collect.png">分享</a></div></div><a href="javascript:void(0)" class="m-close guanbi"><img src="skin/n2015/images/up.png"></a></section>'
	var tishi = '游戏玩法和分享';
	var wanfa = _gameset.neir;
	$(".t-k").after(fx);
	$(".t-k a").append(tishi);
	$(".m-gamewf").append(wanfa);
	$(".t-k a").click(function(){
		$(".t-k").hide();
		$(".f-ggx").show(200);
	});
	$(".guanbi").click(function(){
		$(".t-k").show(200);
		$(".f-ggx").hide(200);
	});
	if(_gameset.isheng=='1'){
	  orient();
	  $(window).bind( 'orientationchange', function(e){
	    orient();
	  });
	}
});
var winWidth = 0;
var winHeight = 0;
var viewable_width = 0;
var viewable_height = 0;
function findDimensions(){
	//获取窗口宽度
	if (window.innerWidth)
	winWidth = window.innerWidth;
	else if ((document.body) && (document.body.clientWidth))
	winWidth = document.body.clientWidth;
	//获取窗口高度
	if (window.innerHeight)
		winHeight = window.innerHeight;
	else if ((document.body) && (document.body.clientHeight))
		winHeight = document.body.clientHeight;
	if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth){
		winHeight = document.documentElement.clientHeight;
		winWidth = document.documentElement.clientWidth;
	}
	//可显示区域尺寸
	viewable_width = parseInt(winWidth);
	viewable_height = parseInt(winHeight);
	if(viewable_width>0 && viewable_height>0){
		document.getElementById("playgame").width = viewable_width+"px";
		document.getElementById("playgame").height = viewable_height+"px";

	}
}
  function orient() {
    if (window.orientation == 0 || window.orientation == 180) {
    $("body").attr("class", "portrait");
    orientation = 'portrait';
      var heng = '<section class="tishi" style="display:">该游戏需要横屏游戏<br>请<span>打开屏幕自适应<br>并将手机横放</span></section>'
	$("body").append(heng);
	findDimensions();
      return false;
    }
   else if (window.orientation == 90 || window.orientation == -90) {
     	$(".tishi").hide();
        findDimensions();
   return false;
    }
  }
findDimensions();