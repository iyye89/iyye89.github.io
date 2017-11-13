var delayB4StartGame = 500;
var _debug = true;
var showPlayButton = false;
var activeRotator = true;
if(typeof(gameIsPortrait) == 'undefined') activeRotator = false;
//var ga = function(){};
//TIMER
var Ad_timer =  document.getElementById('Ad_timer');
var currTime = 15;
var maxTime = 0;
Ad_timer.innerHTML = currTime;
var Ad_timerTimer;

//MANAGER
var adsManager;
var adsLoader;
var adsRequest;
var adDisplayContainer;
var intervalTimer;
var CDBetweenInterTimer;

var lastRequest;

if(typeof(CDBetweenInter) == 'undefined')	var CDBetweenInter = 120 * 1000; //	s * 1000
var apply_CDBetweenInter_to_first_MR = true;
//Size ADS
var maxSizeAdsWidth = 500;
var maxSizeAdsHeight = 350;
var sizeWindow = {};
var widthWindow;

var contentBase = document.getElementById("mainContainer").innerHTML;
var videoContent = document.getElementById('c2canvasdiv');

var pourcentLessWindow = 0;
var startPourcentLessWindow = 30;
var sizeBarIOS8 = 35;
var reallyOnMobile = false;
var onMobile = false;

//Script to Load asynchrone
var tabScriptToLoad = [];
tabScriptToLoad.push("c2runtime.js");

var TOB4Launch;
var canFireAnInter = !apply_CDBetweenInter_to_first_MR;

function createAdDisplayContainer() {
	adDisplayContainer = new google.ima.AdDisplayContainer(document.getElementById('adContainer'));
}

//_________________________________________
//Request Ads >> Request the Ad
//	param : 
//		bool isInter : true if interstitial
//_________________________________________
function requestAds(isInter) {
	pubIsLoaded = true;
	if(isInter == null){
		isInter = false;
	}
	createAdDisplayContainer();
	adDisplayContainer.initialize();

	// Create ads loader.
	adsLoader = new google.ima.AdsLoader(adDisplayContainer);
	// Request video ads.
	adsRequest = new google.ima.AdsRequest();

	if(isInter){
		adsLoader.removeEventListener(
			google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
			onAdsManagerLoaded,
			false
		);
		adsLoader.removeEventListener(
			google.ima.AdErrorEvent.Type.AD_ERROR,
			onAdError,
			false
		);
		adsLoader.addEventListener(
		google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
			onAdsManagerLoadedInter,
			false
		);
		adsLoader.addEventListener(
			google.ima.AdErrorEvent.Type.AD_ERROR,
			onAdErrorInter,
			false
		);

		adsRequest.linearAdSlotWidth = maxMidRollWidth;
		adsRequest.linearAdSlotHeight = maxMidRollHeight;
		adsRequest.nonLinearAdSlotWidth = maxMidRollWidth;
		adsRequest.nonLinearAdSlotHeight = maxMidRollHeight;

		//adsRequest.adTagUrl = 'http://pubads.g.doubleclick.net/gampad/ads?sz=400x300&iu=/14206847/Playzool_Mid-roll&ciu_szs&impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&description_url=playzool.com&channel=1351190264+2827923463';
		adsRequest.adTagUrl = '';
	
	}
	else{
		adsLoader.addEventListener(
			google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
			onAdsManagerLoaded,
			false
		);
		adsLoader.addEventListener(
			google.ima.AdErrorEvent.Type.AD_ERROR,
			onAdError,
			false
		);

		var obj = getSizeWindow();
		adsRequest.linearAdSlotWidth = obj.x;
		adsRequest.linearAdSlotHeight = obj.y;
		adsRequest.nonLinearAdSlotWidth = obj.x;
		adsRequest.nonLinearAdSlotHeight = obj.y;
		
		adsRequest.adTagUrl = '';
	}

	if(isInter){}else{
		console.log("Launch rquest for pub");
		adsLoader.requestAds(adsRequest);	
	}
}

function onAdsManagerLoaded(adsManagerLoadedEvent) {
	var events=[{"name":google.ima.AdEvent.Type.LOADED,"callback":onAdEvent},
				{"name":google.ima.AdEvent.Type.STARTED,"callback":onAdEvent},
				{"name":google.ima.AdEvent.Type.COMPLETE,"callback":onAdEvent},
				{"name":google.ima.AdEvent.Type.USER_CLOSE,"callback":onAdEvent},
				{"name":google.ima.AdEvent.Type.CLICK,"callback":onAdEvent},
				{"name":google.ima.AdEvent.Type.ALL_ADS_COMPLETED,"callback":onAdEvent},
				{"name":google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,"callback":onContentResumeRequested},
				{"name":google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,"callback":onContentPauseRequested},
				{"name":google.ima.AdEvent.Type.AD_ERROR,"callback":onAdError}];
	
	adsManager = adsManagerLoadedEvent.getAdsManager(videoContent);

	for (var index in events) {
		adsManager.addEventListener(
			events[index].name,
			events[index].callback
		);
	}

	try {		
		var obj = getSizeWindow();
		
		adsManager.init(obj.x, obj.y, google.ima.ViewMode.NORMAL);
		adsManager.start();
	} catch (adError) {
		errorOnAdd();
	}
}

function onAdEvent(adEvent) {
	var ad = adEvent.getAd();
	window.adEvent = adEvent;
	if(_debug){console.log(adEvent.type);}

	switch (adEvent.type) {
		case google.ima.AdEvent.Type.LOADED:
			hideGameForAd();
			setForAds();
			if(ad.getContentType().indexOf("video") != -1 || ad.getContentType() == ""){
				document.getElementById("mainContainer").style.backgroundColor = "black";
			}
			else{
				document.getElementById("mainContainer").style.backgroundColor = "white";
			}
			break;
		case google.ima.AdEvent.Type.STARTED:
			//if not "video" >>> display for "image_text_flash"
			if(typeof(fireEvent) != 'undefined') fireEvent('preroll_start');
			if(ad.getContentType().indexOf("video") == -1){
				document.getElementById("titleTimer").style.display = "block";
				var obj = getSizeWindow();
				var ad_Width = ad.getWidth();
				var ad_Height = ad.getHeight();
				if(onMobile){
					changeViewportBySize({x:ad_Width,y:ad_Height});
					addMetaViewPortSetSize(1 - (pourcentLessWindow/100));
					if(iOSVersion >= 8.0){
						document.getElementById('adContainer').style.marginTop = parseFloat(document.getElementById('adContainer').style.marginTop) + (sizeBarIOS8/2) + 10  + "px";
					}
					addCssAdsContainer(ad_Width,ad_Height);
				}
				else{
					document.getElementById('adContainer').style.marginTop = -((maxSizeAdsHeight - ad_Height)/2)+"px";
					addCssAdsContainer(ad_Width,ad_Height);
				}
				addCssTimer(ad_Height);
				startTimerForIMG();
			}
			else{
				startTimerForVideo(ad.getDuration());
				
			}
			break;
		case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
			if(typeof(fireEvent) != 'undefined') fireEvent('preroll_allComplete');
			if(typeof(fireEvent) != 'undefined') fireEvent('preroll_end');
			//case google.ima.AdEvent.Type.COMPLETE:
			TOB4Launch = setTimeout(function(){showGame("complete");},500);
			break;
		case google.ima.AdEvent.Type.CLICK:
			if(typeof(fireEvent) != 'undefined') fireEvent('preroll_click');
			if(typeof(fireEvent) != 'undefined') fireEvent('preroll_end');
			TOB4Launch = setTimeout(function(){showGame("click");},500);
			break;
		case google.ima.AdEvent.Type.USER_CLOSE:
			if(typeof(fireEvent) != 'undefined') fireEvent('preroll_close');
			if(typeof(fireEvent) != 'undefined') fireEvent('preroll_end');
			showGame("close");
			break;
	}
}

function onAdError(adErrorEvent) {
	if(_debug){
		console.log("onAdError");
		console.log(adErrorEvent.getError());
	}
	addMetaViewPort();
	errorOnAdd();
}

function onContentPauseRequested() {
	if(_debug){console.log("Pause Request");}
}

function onContentResumeRequested() {
	if(_debug){console.log("onContentResumeRequested");}
}

function destroyObjectAds () {
	if(adsLoader != null){
		adsLoader.destroy();
	}
	adsLoader = undefined;
	if(adDisplayContainer != null){
		adDisplayContainer.destroy();
	}
	adDisplayContainer = undefined;
	if(adsManager != null){
		adsManager.destroy();
	}
	adsManager = undefined;
	pubIsLoaded = false;
	nextTouchLoadPubInter();
}
//_____________________________________________________________________________________

//startTimerForIMG >> Start timer and stop it when it's end >>> for "image_text_flash"
function startTimerForIMG(){
	currTime = 15;
	Ad_timerTimer = setInterval(
		function() {
			currTime-=1;
			document.getElementById('Ad_timer').innerHTML = currTime;
			if(currTime < 0){
				clearInterval(Ad_timerTimer);
				if(typeof(fireEvent) != 'undefined') fireEvent('preroll_timerEnd');
				if(typeof(fireEvent) != 'undefined') fireEvent('preroll_end');
				showGame("timerEnd");
				
			}
		},
		1000
	);
}

//StartTimer - Start timer and stop it when it's end -- for "Video"

function startTimerForVideo(timeMax){
	document.getElementById("containerProgressBar").style.display = "block";
	currTime = timeMax;
	maxTime = timeMax;
	Ad_timerTimer = setInterval(
		function() {
			//currTime-=0.1;
			currTime = adsManager.getRemainingTime();
			document.getElementById("progressBar").style.width = (100*(maxTime - currTime))/maxTime + "%";
			if(currTime < 0){
				document.getElementById("containerProgressBar").style.display = "none";
				clearInterval(Ad_timerTimer);
			}
		},
		100
	);
}

//ErrorOnAdd
function errorOnAdd(){
	if(typeof(fireEvent) != 'undefined') fireEvent('preroll_error');
	if(typeof(fireEvent) != 'undefined') fireEvent('preroll_end');
	showGame("error");
}

function hideGameForAd(){
	document.getElementById("c2canvasdiv").style.display = "none";
	document.getElementById("mainContainer").style.display = "block";
	document.getElementById("titleTimer").style.display = "none";
	$("body").css("background-color","white");
}

function showGame(message){
	if(message == null){
		message = "null";
	}else{
		if(_debug){console.log("ShowGame Message : " + message);}
	}
	if(Ad_timerTimer != null){
		clearInterval(Ad_timerTimer);
	}
	document.getElementById("c2canvasdiv").style.display = "block";;
	document.getElementById("containerProgressBar").style.display = "none";
	document.getElementById("mainContainer").style.display = "none";
	addMetaViewPort();
	loadGame();
	destroyObjectAds();
}

//Size of window
//return obj{x,y}
function getSizeWindow(){
	var obj = {};
	var w = window,
	d = document,
	e = d.documentElement,
	g = d.getElementsByTagName('body')[0];
	obj.x = w.innerWidth || e.clientWidth || g.clientWidth;
	obj.y = w.innerHeight|| e.clientHeight|| g.clientHeight;
	return obj;
}

//get the real size of the window
function getRealSizeWindow(){
	var size = getMetaViewportSize();
	addMetaViewPortSetSize(1);
	var sizeWindow = getSizeWindow();
	addMetaViewPortSetSize(size);
	
	return sizeWindow;
}

function checkSizeWindow(){
	onMobile = 0;
	var obj = getRealSizeWindow();
	var h,v;
	//is  on Mobile
	if(obj.x < maxSizeAdsWidth || obj.y < maxSizeAdsHeight){
		onMobile = 1;
	}
}

function changeViewportBySize(sizeObj){
	var obj = sizeWindow;
	var h,v,result;
	var size = sizeObj;
	if(onMobile){
		if(iOSVersion >= 8.0){
			obj.y = obj.y - sizeBarIOS8;
			obj.x = obj.x - 10;
		}
		h = 100 - ((obj.x / size.x) * 100);
		v = 100 - ((obj.y / size.y) * 100);
		
		var result2 = Math.max(h,v);
		result2 = result2 + ((result2 *10) /100);
		result = Math.min(100,Math.max(0,result2));
		pourcentLessWindow = result;
	}
}

function hideAll(){
	document.getElementById("mainContainer").style.display = "none";
	document.getElementById("c2canvasdiv").style.display = "none";
	document.getElementById("containerProgressBar").style.display = "none";
}

function clickOnButonAds(){
	widthWindow = getSizeWindow().x;
	checkSizeWindow();
	sizeWindow = getRealSizeWindow();
	
	
	document.getElementById("c2canvasdiv").style.display = "block";
	document.getElementById("buttonPlayContainer").style.display = "none";
	document.getElementById("mainContainer").style.display = "block";
	var p = document.getElementById("buttonPlayContainer");
	p.parentElement.removeChild(p);
	if(onMobile){
		pourcentLessWindow = startPourcentLessWindow;
		addMetaViewPortSetSize(1 - (pourcentLessWindow/100));
	}
	else{
		pourcentLessWindow = 0;
		addMetaViewPortSetSize(1);
	}
	if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1 || navigator.userAgent.match(/iemobile/i)){
		onMobile = 0;
	}
	//setTimeout(function(){requestAds(false);},100);
	TOB4Launch = setTimeout(function(){showGame("complete");},500);
}

function loadGame(){
	console.log("LoadGame");
	for (var i = 0; i < tabScriptToLoad.length; i++) {
	
		$.getScript(tabScriptToLoad[i]);
	}

	window.timerC2MA = setInterval(function(){
		if(typeof(window.cr_createRuntime) != "undefined" && typeof(jQuery) != "undefined" ){
									//FORCE PLATFORM TAG
						window.XMLHttpRequest.prototype.trueOpen = window.XMLHttpRequest.prototype.open;
						window.XMLHttpRequest.prototype.open = function() {
							if(this.responseURL.indexOf('_GCODE') != -1){
								this.responseURL = this.responseURL.replace('_GCODE', '_PZOOL');
							}
							this.trueOpen.apply(this, arguments);
						};
						clearInterval(window.timerC2MA);
			console.log('launch');
			launchGame();
		}
	},100);	
}

//ROTATOR START
function checkOrientation(){
	// console.log("checkOrientation");
	if(!activeRotator || !reallyOnMobile)	return true;
	console.log("activated and on mobile");
	if(gameIsPortrait && jQuery(window).width() > jQuery(window).height()){
		displayRotator('portrait');
		return false;
	}
	if(!gameIsPortrait && jQuery(window).width() < jQuery(window).height()){
		displayRotator('landscape');
		return false;
	}
	return true;
}

function displayRotator(orientation){
	var gameElement = document.getElementById("c2canvasdiv");
	var rotatorElement = document.getElementById("rotator");
	// if(gameElement.style.display != "block" || rotatorElement.style.display != "none" || (window["cr_getC2Runtime"]().isSuspended !== false && window["cr_getC2Runtime"]().pi  !== false )) return false;
	if(gameElement.style.display != "block" || rotatorElement.style.display != "none") return false;
	cr_setSuspended(true);
	gameElement.style.display = "none";
	rotatorElement.innerHTML = "";
	rotatorElement.innerHTML = '<img id="rotatorLogo" src="http://playzool.com/common/img/rotate-device-to-' + orientation + '.jpg" />';
	rotatorElement.style.display = "block";
	rotatorElement.style.backgroundColor = "black";
	rotatorElement.style.width = "100%";
	rotatorElement.style.height = "100%";
	window.centerRotatorTimer = setInterval(function(){	centerRotator();	}, 100);
	return true;
}

function centerRotator(){
	var rotatorElement = document.getElementById("rotator");
	rotatorElement.style.paddingLeft = jQuery(window).width() / 2 - jQuery("#rotatorLogo").width() / 2 +"px";
	rotatorElement.style.paddingTop = jQuery(window).height() / 2 - jQuery("#rotatorLogo").height() / 2 +"px";
	rotatorElement.style.paddingBottom = jQuery(window).height() / 2 - jQuery("#rotatorLogo").height() / 2 +"px";
}

function hideRotator(){
	var gameElement = document.getElementById("c2canvasdiv");
	var rotatorElement = document.getElementById("rotator");
	if(rotatorElement.style.display != "block") return false;
	rotatorElement.innerHTML = "";
	rotatorElement.style.display = "none";
	gameElement.style.display = "block";
	// if(window["cr_getC2Runtime"]().isSuspended === true) cr_setSuspended(false);
	cr_setSuspended(false);
	clearInterval(window.centerRotatorTimer);
	return true;
}
//ROTATOR END

function launchGame(){
	if(typeof(fireEvent) != 'undefined') fireEvent('onGameStart');
	if(!canFireAnInter && apply_CDBetweenInter_to_first_MR)	CDBetweenInterTimer = setTimeout(function(){	canFireAnInter = true;	}, CDBetweenInter);
	jQuery(window).resize(function() {
		cr_sizeCanvas(jQuery(window).width(), jQuery(window).height());
		if(checkOrientation())	hideRotator();
	});
	
	// Create new runtime using the c2canvas
	cr_createRuntime('c2canvas');
	setTimeout(function(){ checkOrientation(); }, 500);
	
	// Pause and resume on page becoming visible/invisible
	function onVisibilityChanged() {
		if (document.hidden || document.mozHidden || document.webkitHidden || document.msHidden)
			cr_setSuspended(true);
		else
			cr_setSuspended(false);
	};
	document.body.style.backgroundColor="black";
	document.addEventListener('visibilitychange', onVisibilityChanged, false);
	document.addEventListener('mozvisibilitychange', onVisibilityChanged, false);
	document.addEventListener('webkitvisibilitychange', onVisibilityChanged, false);
	document.addEventListener('msvisibilitychange', onVisibilityChanged, false);
}

function send(sUrl,type) {
	var scriptLoad  = document.createElement("script");
	if(type = "file"){
		scriptLoad.src  = sUrl;
	}else if(type="js"){
		scriptLoad.innerHTML = sUrl;
	}
	scriptLoad.type = "text/javascript";
	document.body.appendChild(scriptLoad);
	document.body.removeChild(scriptLoad);
}

function addMetaViewPort(){
	var content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui";
	document.getElementsByName("viewport")[0].setAttribute('content',content);
}

function addMetaViewPortNoScale(){

	document.getElementsByName("viewport")[0].setAttribute('content',"user-scalable=no, minimal-ui");
}

function addMetaViewPortSetSize(size){
	var content = "width=device-width, initial-scale="+size+", maximum-scale="+size+", minimum-scale="+size+", user-scalable=no, minimal-ui";
	document.getElementsByName("viewport")[0].setAttribute('content',content);
}

function getMetaViewportSize(){
	var t = document.getElementsByName("viewport");
	var result = [];
	var size = 1;
	
	if(t.length > 0){
		t = t[0].getAttribute("content");
		if(t != undefined){
			result = t.match(/[0-9.]+/gi);
		}
	}
	if(result != null && result.length > 0){
		size = parseFloat(result[0]);
	}
	return size;
}


//CSS ADS
function setForAds(){
	document.getElementById("adContainer").childNodes[0].style.margin = "auto";
	document.getElementById("adContainer").childNodes[0].style.top = 0;
	document.getElementById("adContainer").childNodes[0].style.bottom = 0;
	document.getElementById("adContainer").childNodes[0].style.left = 0;
	document.getElementById("adContainer").childNodes[0].style.right = 0;
	document.getElementById("adContainer").childNodes[0].style.position = "absolute";
}

function addCssTimer(adsHeight){
	document.getElementById('adTitle').style.position = "inital";
	document.getElementById("adTitle").style.textAlign = "center";
	document.getElementById("adTitle").style.height = "1px";
	document.getElementById("adTitle").style.margin = "auto";
	document.getElementById("adTitle").style.top = adsHeight + 1 + "px";
	document.getElementById("adTitle").style.bottom = "0px";
	document.getElementById("adTitle").style.left = "0px";
	document.getElementById("adTitle").style.right = "0px";
	document.getElementById("adTitle").style.position = "absolute";
}

/*	//Pixel correction margin top on ad
function addCssAdsContainer(adsWidth,adsHeight){
	var length = document.getElementById('adContainer').childNodes[0].childNodes.length - 1;
	document.getElementById('adContainer').childNodes[0].childNodes[length].width = adsWidth;
	document.getElementById('adContainer').childNodes[0].childNodes[length].height = adsHeight;
	document.getElementById("adContainer").childNodes[0].style.width = adsWidth + "px";
	document.getElementById("adContainer").childNodes[0].style.height = adsHeight + "px";
}
*/
function addCssAdsContainer(adsWidth,adsHeight){
    var length = document.getElementById('adContainer').childNodes[0].childNodes.length - 1;
    document.getElementById('adContainer').childNodes[0].childNodes[length].width = adsWidth;
    document.getElementById('adContainer').childNodes[0].childNodes[length].height = adsHeight+7;
    document.getElementById("adContainer").childNodes[0].style.width = adsWidth + "px";
    document.getElementById("adContainer").childNodes[0].style.height = (adsHeight+7) + "px";
}
//_____________________________________________________________________________________

sizeWindow = getRealSizeWindow();

/*var eventOnClick = setTimeout(function(){
	document.getElementById("buttonPlay").onclick  = clickOnButonAds;
	document.getElementById("buttonPlay").addEventListener("touchstart", clickOnButonAds, false);
},100);*/

hideAll();
if (navigator.userAgent.match(/(mobile|android|iphone|ipad|blackberry|symbian|symbianos|symbos|netfront|model-orange|javaplatform|iemobile|windows phone|samsung|htc|opera mobile|opera mobi|opera mini|presto|huawei|blazer|bolt|doris|fennec|gobrowser|iris|maemo browser|mib|cldc|minimo|semc-browser|skyfire|teashark|teleca|uzard|uzardweb|meego|nokia|bb10|playbook)/gi)) {
	onMobile = true;
	reallyOnMobile = true;
	document.getElementById("buttonPlayContainer").style.display = "block";
	if(showPlayButton === false){
		//THIS 2 FOLLOWING LINES UNACTIVE PLAY BUTTON
		//clearTimeout(eventOnClick);
		clickOnButonAds();
	}
} else {
	//alert('1')
   //clearTimeout(eventOnClick);
   clickOnButonAds();
}

var iOSVersion = parseFloat(
	('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0,''])[1])
	.replace('undefined', '3_2').replace('_', '.').replace('_', '')
) || false;





//__________________________________________________________________________________________________
var canTouchForPub = false;
function touchStart(){
	if(navigator.userAgent.match(/iemobile/i)) {
		return;
	}
	console.log(";...");
	if(canTouchForPub){
		requestAds(true);
		canTouchForPub = false;
	}
}
addEventListener("touchstart", touchStart, false)

//get max size for the ad
var maxMidRollWidth = Math.min($(window).width(), 500);
var maxMidRollHeight = Math.min($(window).height(), 350);
var intervalTimer2;

function launchAd(){
	console.log("launching ad");
	if(navigator.userAgent.match(/iemobile/i)) {
		//return;
	}

	widthWindow = getSizeWindow().x;
	checkSizeWindow();
	sizeWindow = getRealSizeWindow();
	document.getElementById("c2canvasdiv").style.display = "block";
	document.getElementById("mainContainer").style.display = "block";

	if(onMobile){
		pourcentLessWindow = startPourcentLessWindow;
		addMetaViewPortSetSize(1 - (pourcentLessWindow/100));
	}
	else{
		pourcentLessWindow = 0;
		addMetaViewPortSetSize(1);
	}
	if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1 || navigator.userAgent.match(/iemobile/i)){
		onMobile = 0;
	}
	hideGameForAd();
	cr_setSuspended(true);
	setTimeout(function(){requestAds(true);},100);
}

function loadGame(){
	console.log("LoadGame");
	for (var i = 0; i < tabScriptToLoad.length; i++) {
	
		//$.getScript(tabScriptToLoad[i]);
		send(tabScriptToLoad[i],"file");
	}

	window.timerC2MA = setInterval(function(){
		if(typeof(window.cr_createRuntime) != "undefined" && typeof(jQuery) != "undefined" ){
			clearInterval(window.timerC2MA);
			console.log('launch');
			launchGame();
		}
	},100);	
}

function onAdsManagerLoadedInter(adsManagerLoadedEvent) {
	var events=[{"name":google.ima.AdEvent.Type.LOADED,"callback":onAdEventInter},
				{"name":google.ima.AdEvent.Type.STARTED,"callback":onAdEventInter},
				{"name":google.ima.AdEvent.Type.COMPLETE,"callback":onAdEventInter},
				{"name":google.ima.AdEvent.Type.USER_CLOSE,"callback":onAdEventInter},
				{"name":google.ima.AdEvent.Type.CLICK,"callback":onAdEventInter},
				{"name":google.ima.AdEvent.Type.ALL_ADS_COMPLETED,"callback":onAdEventInter},
				{"name":google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,"callback":onContentResumeRequestedInter},
				{"name":google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,"callback":onContentPauseRequestedInter},
				{"name":google.ima.AdEvent.Type.AD_ERROR,"callback":onAdErrorInter}];

	adsManager = adsManagerLoadedEvent.getAdsManager(videoContent);

	for (var index in events) {
		adsManager.addEventListener(
			events[index].name,
			events[index].callback);
	}
	
	try {
		adsManager.init(maxMidRollWidth, maxMidRollHeight, google.ima.ViewMode.NORMAL);
		adsManager.start();
	} catch (adError) {
		onAdErrorInter(adError);
	}
}

function onAdEventInter(adEvent) {
	var ad = adEvent.getAd();
	if(_debug){console.log("INTER",adEvent.type);}
	switch (adEvent.type) {
		case google.ima.AdEvent.Type.LOADED:
			// This is the first event sent for an ad
			goToAd();
			document.getElementById("mainContainer").style.display = "none";
			setForAds();
			if(ad.getContentType().indexOf("video") != -1 || ad.getContentType() == ""){
				document.getElementById("mainContainer").style.backgroundColor = "black";
			}
			else{
				document.getElementById("mainContainer").style.backgroundColor = "white";
			}
			break;
		case google.ima.AdEvent.Type.STARTED:
			//if not "video" >>> display for "image_text_flash"
			if(typeof(fireEvent) != 'undefined') fireEvent('midroll_start');
			if(ad.getContentType().indexOf("video") == -1){
				document.getElementById("titleTimer").style.display = "block";
				var obj = getSizeWindow();
				var ad_Width = ad.getWidth();
				var ad_Height = ad.getHeight();
				if(onMobile){
					changeViewportBySize({x:ad_Width,y:ad_Height});
					addMetaViewPortSetSize(1 - (pourcentLessWindow/100));
					if(iOSVersion >= 8.0){
						document.getElementById('adContainer').style.marginTop = parseFloat(document.getElementById('adContainer').style.marginTop) + (sizeBarIOS8/2) + 10  + "px";
					}
					addCssAdsContainer(ad_Width,ad_Height);
				}
				else{
					document.getElementById('adContainer').style.marginTop = -((maxSizeAdsHeight - ad_Height)/2)+"px";
					addCssAdsContainer(ad_Width,ad_Height);
				}
				addCssTimer(ad_Height);
				startTimerForIMGInter();
				
				
			}
			else{
				startTimerForVideo(ad.getDuration());
				
			}
			$( "#mainContainer" ).slideDown(600);
			break;
		case google.ima.AdEvent.Type.CLICK:
			if(typeof(fireEvent) != 'undefined') fireEvent('midroll_click');
			if(typeof(fireEvent) != 'undefined') fireEvent('midroll_end');
			clearInterval(intervalTimer2)
			TOB4Launch = setTimeout(function(){back2Game();},500);
			break;
		// case google.ima.AdEvent.Type.COMPLETE:
		case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
			// This event indicates the ad has finished
			if(typeof(fireEvent) != 'undefined') fireEvent('midroll_allComplete');
			if(typeof(fireEvent) != 'undefined') fireEvent('midroll_end');
			clearInterval(intervalTimer2)
			TOB4Launch = setTimeout(function(){back2Game();},500);
			break;
		case google.ima.AdEvent.Type.USER_CLOSE:
			if(typeof(fireEvent) != 'undefined') fireEvent('midroll_close');
			if(typeof(fireEvent) != 'undefined') fireEvent('midroll_end');
			clearInterval(intervalTimer2)
			TOB4Launch = setTimeout(function(){back2Game();},500);
			break;
	}
}

function back2Game(){
	cr_setSuspended(false);
	if(Ad_timerTimer != null){
		clearInterval(Ad_timerTimer);
	}
	document.getElementById("c2canvasdiv").style.display = "block";
	document.getElementById("containerProgressBar").style.display = "none";
	document.getElementById("mainContainer").style.display = "none";
	addMetaViewPort();
	cr_sizeCanvas(jQuery(window).width(), jQuery(window).height());
	setTimeout(function(){$(window).scrollTop(0);},200);
	/*cr_setSuspended(true);
	cr_setSuspended(false);*/
	destroyObjectAds();
	checkOrientation();
}

function goToAd(){
	hideGameForAd();
	cr_setSuspended(true);
}

function onAdErrorInter(adErrorEvent) {
	// Handle the error logging.
	if(typeof(fireEvent) != 'undefined') fireEvent('midroll_error');
	if(typeof(fireEvent) != 'undefined') fireEvent('midroll_end');
	console.log(adErrorEvent.getError());
	back2Game();
}

function onContentPauseRequestedInter() {
}

function onContentResumeRequestedInter() {
}

function startTimerForIMGInter(){
	//return;
	currTime = 15;
	Ad_timerTimer = setInterval(
		function() {
			currTime-=1;
			document.getElementById('Ad_timer').innerHTML = currTime;
			if(currTime < 0){
				clearInterval(Ad_timerTimer);
				if(typeof(fireEvent) != 'undefined') fireEvent('midroll_timerEnd');
				if(typeof(fireEvent) != 'undefined') fireEvent('midroll_end');
				back2Game();
				
			}
		},
		1000
	);
}
//___________________________Delay ads_______________________________________________
var pubIsLoaded = false;

function launchPubInter(){
	// if(!canFireAnInter) return;
	if(navigator.userAgent.match(/iemobile/i)) {
		return;
	}

	widthWindow = getSizeWindow().x;
	checkSizeWindow();
	sizeWindow = getRealSizeWindow();
	document.getElementById("c2canvasdiv").style.display = "block";
	document.getElementById("mainContainer").style.display = "block";
	

	if(onMobile){
		pourcentLessWindow = startPourcentLessWindow;
		addMetaViewPortSetSize(1 - (pourcentLessWindow/100));
	}
	else{
		pourcentLessWindow = 0;
		addMetaViewPortSetSize(1);
	}
	if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1 || navigator.userAgent.match(/iemobile/i)){
		onMobile = 0;
	}
	hideGameForAd();
	cr_setSuspended(true);
	//Launch the pub
	// adsLoader.requestAds(adsRequest);
	if(adsLoader != "undefined"){
		adsLoader.requestAds(adsRequest);
		canFireAnInter = false;
		CDBetweenInterTimer = setTimeout(function(){	canFireAnInter = true;	}, CDBetweenInter);
	}else{
		back2Game();
	}
}
/*
*	c2LayoutChange(state,name,force)     : called on construct when layout change
*
*	string state : "in" when enter on the layout, "out" when left the layout
*	string name : name of the layout
*	bool forcePub :  [default = 1]  1 = pub ; 0= noPub
*/
function c2LayoutChange(state,name,force){
	if(typeof(force) != "undefined" && force == false){  
		return;
	}
	if(typeof(showInterDFP) == "undefined" || !showInterDFP){
		return;
	}
	switch(name) {
	    case "Splash":
	        break;
	    case "LevelSelect":
	        break;
	    case "GameMain":
			if(state == "in"){
				/*
				// setTimeout(function(){
		    		if(!pubIsLoaded && delayInter){
		    			canTouchForPub = true;
		    			if (navigator.userAgent.match(/(android|iphone|ipad|blackberry|symbian|symbianos|symbos|netfront|model-orange|javaplatform|iemobile|windows phone|samsung|htc|opera mobile|opera mobi|opera mini|presto|huawei|blazer|bolt|doris|fennec|gobrowser|iris|maemo browser|mib|cldc|minimo|semc-browser|skyfire|teashark|teleca|uzard|uzardweb|meego|nokia|bb10|playbook)/gi)) {}else{
		    				canTouchForPub = false;
		    				requestAds(true);
		    			}
		    		}
		    	// },1500);
				*/
				nextTouchLoadPubInter();
	    	}else if(state == "out"){

	    	}
	        break;
	    case "GameOver":
	    	if(state == "in"){
	    		if(canFireAnInter){
		    		launchPubInter();
		    	}
	    	}else if(state == "out"){
	    		
	    	}
	        break;
	}
}
var firstTime = true;
function nextTouchLoadPubInter(){
	if(!pubIsLoaded){// && delayInter){
		canTouchForPub = true;
		firstTime = false;
		if (navigator.userAgent.match(/(mobile|android|iphone|ipad|blackberry|symbian|symbianos|symbos|netfront|model-orange|javaplatform|iemobile|windows phone|samsung|htc|opera mobile|opera mobi|opera mini|presto|huawei|blazer|bolt|doris|fennec|gobrowser|iris|maemo browser|mib|cldc|minimo|semc-browser|skyfire|teashark|teleca|uzard|uzardweb|meego|nokia|bb10|playbook)/gi)) {}else{
			canTouchForPub = false;
			requestAds(true);
		}
	}
}


