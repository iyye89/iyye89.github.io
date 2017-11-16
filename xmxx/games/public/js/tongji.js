function allloads(){
	function getcookie(name){
		var nameValue = "";
		var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
		if (arr = document.cookie.match(reg)) {
			nameValue = decodeURI(arr[2]);
		}
		return nameValue;
	};
	var ua = navigator.userAgent.toLowerCase();
	//微信显示
	if(ua.match(/MicroMessenger/i) == "micromessenger"){
		document.getElementsByClassName("top-nav-shrink")[0].style.display="block";
		return;
	}
	var wan_from = getcookie("lastfrom");
	if(wan_from==1||wan_from==2){
		//document.getElementsByClassName("top-nav-shrink")[0].style.display="none";
		if(wan_from==1){
			//这里是处理摸摸ios客户端设置标题，且不显示
			var bIsIpad = ua.match(/ipad/i) == "ipad";
			var bIsIphoneOs = ua.match(/iphone os/i) == "iphone os";
			if ((ua.match(/client-mo365/i) == "client-mo365") && (bIsIpad || bIsIphoneOs)) {
               var e = document.createElement("iframe");
				e.src = "mo365callback://settitle?title="+encodeURIComponent(document.title); //紧接着上一行写
				e.style.widht=0;
				e.style.height=0;
				e.style.display="none";
				var obj = document.body.appendChild(e);
            }
		}
	}else{
		if (ua.match(/qiqi-client/i) == "qiqi-client"||ua.match(/client-mo365/i) == "client-mo365"||ua.match(/qiqiios/i) == "qiqiios") {
			//document.getElementsByClassName("top-nav-shrink")[0].style.display="none";
			//这个还是客户端 不显示
		}else{
			//网页版本，显示出来
			document.getElementsByClassName("top-nav-shrink")[0].style.display="block";
		} 
	}	
}
function addLoadEvent(func){
 var oldonload=window.onload;
 if(typeof window.onload!="function"){
	 window.onload=func;
  }
 else{
	 window.onload=function(){
		  oldonload();
		  func();
	   }
	 }
}
addLoadEvent(allloads);
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F8e184f398f25babea6fd9110f3b0b1b4' type='text/javascript'%3E%3C/script%3E"));
document.write(unescape("%3Cscript src='/game-count.html?action=post_view&_time="+Math.random()+"&comeurl="+encodeURIComponent(location.href)+"' type='text/javascript'%3E%3C/script%3E"));


