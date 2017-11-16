function toggleWanShare(oper){
	var mo365_wan_share = document.getElementById('mo365-wan-share');
	var mo365_wan_fix = document.getElementById('mo365-wan-fix');
    if(oper=='show'){
    	mo365_wan_share.style.display="block";
    	mo365_wan_fix.style.display="block";
    }else{
    	mo365_wan_share.style.display="none";
    	mo365_wan_fix.style.display="none";
    }
}
//列表tab
function showWanList(n) {
	var o = document.getElementById('tags-nav').getElementsByTagName("A");
	var c = document.getElementsByName("games-section");
	for (i = 0; l = o.length, i < l; o[i].className = '', c[i].style.display = 'none', i++)
		;
	o[n].className = 'active';
	c[n].style.display = 'block';
}

//分享的
function toggleShareMask(){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.indexOf('qiqiios') !== -1){
		do_share_ios();
	} else if(ua.indexOf('qiqi-client') !== -1){
		//window.android.setShareText();
		window.android.setShareContent_();
	} else {
		var mo365_share_mask = document.getElementsByName('mo365-share-mask')[0];
		var isshow = mo365_share_mask.style.display;
		if(isshow=='none'){
			mo365_share_mask.style.display="block";
		}else{
			mo365_share_mask.style.display="none";
		}
	}
    
}
//顶部栏
function toggleTopMenu(target){
	var top_nav_shrink = document.getElementsByName('top-nav-shrink')[0];
	var margin_left = top_nav_shrink.style.marginLeft;
	if(parseInt(margin_left)>0){
		var i = 100;
		var animateopen = setInterval(function(){
			top_nav_shrink.style.cssText="left: -"+(i--)+"%;";
			if(i<=2){
    			top_nav_shrink.style.cssText="left: 0%;margin-left: 0px;";
    			target.innerHTML='<i class="icon-close"></i>';
    			clearInterval(animateopen);
			}
		},1);
	}else{
		var i = 0;
		var animateclose = setInterval(function(){
			top_nav_shrink.style.cssText="left: -"+(i++)+"%;";
			if(i>=96){
    			top_nav_shrink.style.cssText="left: -100%;margin-left: 50px;";
    			target.innerHTML='<i class="icon-open"></i>';
    			clearInterval(animateclose);
			}
		},1);
	}
}

function toWeixinFav(){
	location.href="http://mp.weixin.qq.com/s?__biz=MjM5NzQyNzIxMA==&mid=217124536&idx=1&sn=747ee0e09a7c101eca81d08307735adb#rd";
}

function do_share_ios(){
	window.location.href = "qiqicallback://shareText?thumb="+encodeURI(pic_new)+'&title=encodeURI(奇奇微信助手)';
}



