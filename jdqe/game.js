var GAME_ID = "unfreeze_penguins";

var stage;
var mc;
var fps = 22;
var GET;
var data = [];
var library;

var LANDSCAPE_MODE = true;
var BUILD_BACK = false;

var STATE_LOAD = 0;
var STATE_LOGO = 1;
var STATE_MENU = 2;
var STATE_GAME = 3;
var STATE_COMBO = 4;
var STATE_COMIX = 5;

var gameState = STATE_LOAD;
var gameScore = 0;

var CONST_WIDTH_ELEM = 22; //1 element width

var CONST_START_POS_BL = {x: 30, y:-44};//стартовая позиция
var CONST_POS_START_Y = CONST_START_POS_BL.y;
var CONST_TIMEOUT_MOVE = 3000;//seconds to move up all elements
var CONST_LOOSE_Y = 47;//у - координата, после которой проигрыш

var CONST_ANIM_SPEED_MOVE_UP = 5;//tween speed move up

//scope
var CONST_SCORE_ONE_OBJ = 10;
//Все игровое поле
var CONST_AREA_SIZE = {x:12, y:15};

var gameArea = [];
var spritesArr = [];

var CONST_ALL_BONUSES =
[
	"bomb", "vert_lightning", "hor_lightning", "hor_vert_lightning", "diag_lightning"
];

var CONST_ALL_COMBO =
[
	"combo_type_1", "combo_type_2","combo_type_3","combo_type_4","combo_type_5"
];

var CONST_COMBO =
[
	{//1
		types:["type_1", "type_1", "type_2"],
		img_name:"combo_1"
	},
	{
		types:["type_4", "type_4", "type_4"],
		img_name:"combo_2"
	},
	{
		types:["type_3", "type_3", "type_3"],
		img_name:"combo_3"
	},
	{
		types:["type_2", "type_5", "type_2"],
		img_name:"combo_4"
	},
	{
		types:["type_5", "type_3", "type_4"],
		img_name:"combo_5"
	},
	{//2
		types:["type_2", "type_5", "type_1"],
		img_name:"combo_6"
	},
	{
		types:["type_4", "type_3", "type_2"],
		img_name:"combo_7"
	},
	{
		types:["type_2", "type_2", "type_2"],
		img_name:"combo_8"
	},
	{
		types:["type_1", "type_1", "type_1"],
		img_name:"combo_9"
	},
	{
		types:["type_5", "type_5", "type_5"],
		img_name:"combo_10"
	},
	{//3
		types:["type_5", "type_4", "type_2"],
		img_name:"combo_11"
	},
	{
		types:["type_1", "type_3", "type_1"],
		img_name:"combo_12"
	},
	{
		types:["type_2", "type_4", "type_5"],
		img_name:"combo_13"
	},
	{
		types:["type_3", "type_2", "type_1"],
		img_name:"combo_14"
	},
	{
		types:["type_5", "type_5", "type_4"],
		img_name:"combo_15"
	}
];

var current_level;
var block_click = false;
var line_cnt = 0;
var win_text;
var help_popup = [];
var help_show = false;

window.onload = function()
{
	GET = Utils.parseGet();
	
	Utils.addMobileListeners(LANDSCAPE_MODE);

	Utils.addFitLayoutListeners();
	Utils.mobileCorrectPixelRatio();
    
    ExternalAPI.init();
	
	setTimeout(startLoad, 600);
};

function startLoad()
{
	var resolution = Utils.getMobileScreenResolution(LANDSCAPE_MODE);

	if(GET["debug"] == 1) resolution = Utils.getScaleScreenResolution(1, LANDSCAPE_MODE);

	//resolution = Utils.getScaleScreenResolution(2, LANDSCAPE_MODE);

	Utils.globalScale = resolution.scale;

	Utils.createLayout(document.getElementById("main_container"), resolution);
	
	document.getElementById('progress_container').style.background = '#666';

	Utils.addEventListener("fitlayout", function()
	{
		if(stage)
		{
			stage.drawScene(document.getElementById("screen"));
			buildBackground();
		}
	});
	Utils.addEventListener("lockscreen", function()	{ if(stage && stage.started) stage.stop(); });
	Utils.addEventListener("unlockscreen", function() { if(stage && !stage.started) stage.start(); });

	Utils.mobileHideAddressBar();

	if(GET["debug"] != 1) Utils.checkOrientation(LANDSCAPE_MODE);
	var path = Utils.imagesRoot+"/"+Utils.globalScale+"/";

	var assets =
			[
			{"name":"ach_icon","src":"ach_icon.png","width":34,"height":35},
			{"name":"bomb","src":"bomb.png","width":22,"height":22},
			{"name":"bomb_remove","src":"bomb_remove.png","width":148,"height":126,"frames":9},
			{"name":"closed","src":"closed.png","width":22,"height":22},
			{"name":"closed_remove","src":"closed_remove.png","width":63,"height":69,"frames":7},
			{"name":"close_popup_btn","src":"close_popup_btn.png","width":15,"height":15},
			{"name":"back_btn_combo","src":"combo/back_btn_combo.png","width":63,"height":34},
			{"name":"combo_1","src":"combo/combo_1.png","width":116,"height":34},
			{"name":"combo_10","src":"combo/combo_10.png","width":116,"height":34},
			{"name":"combo_11","src":"combo/combo_11.png","width":116,"height":34},
			{"name":"combo_12","src":"combo/combo_12.png","width":116,"height":34},
			{"name":"combo_13","src":"combo/combo_13.png","width":116,"height":34},
			{"name":"combo_14","src":"combo/combo_14.png","width":116,"height":34},
			{"name":"combo_15","src":"combo/combo_15.png","width":116,"height":34},
			{"name":"combo_2","src":"combo/combo_2.png","width":116,"height":34},
			{"name":"combo_3","src":"combo/combo_3.png","width":116,"height":34},
			{"name":"combo_4","src":"combo/combo_4.png","width":116,"height":34},
			{"name":"combo_5","src":"combo/combo_5.png","width":116,"height":34},
			{"name":"combo_6","src":"combo/combo_6.png","width":116,"height":34},
			{"name":"combo_7","src":"combo/combo_7.png","width":116,"height":34},
			{"name":"combo_8","src":"combo/combo_8.png","width":116,"height":34},
			{"name":"combo_9","src":"combo/combo_9.png","width":116,"height":34},
			{"name":"combo_text2","src":"combo/combo_text2.png","width":254,"height":28},
			{"name":"combo_type_1","src":"combo/combo_type_1.png","width":6,"height":8},
			{"name":"combo_type_2","src":"combo/combo_type_2.png","width":6,"height":8},
			{"name":"combo_type_3","src":"combo/combo_type_3.png","width":6,"height":8},
			{"name":"combo_type_4","src":"combo/combo_type_4.png","width":6,"height":8},
			{"name":"combo_type_5","src":"combo/combo_type_5.png","width":6,"height":8},
			{"name":"comboview","src":"comboview.png","width":84,"height":30},
			{"name":"combo_game","src":"combo_game.png","width":63,"height":63},
			{"name":"combo_icon","src":"combo_icon.png","width":72,"height":69},
			{"name":"combo_text","src":"combo_text.png","width":54,"height":14},
			{"name":"end_text","src":"comix/end_text.png","width":222,"height":57},
			{"name":"scr1","src":"comix/scr1.png","width":251,"height":116},
			{"name":"scr2","src":"comix/scr2.png","width":78,"height":69},
			{"name":"scr3","src":"comix/scr3.png","width":251,"height":118},
			{"name":"scr4","src":"comix/scr4.png","width":251,"height":91},
			{"name":"scr41","src":"comix/scr41.png","width":255,"height":93},
			{"name":"scr42","src":"comix/scr42.png","width":255,"height":93},
			{"name":"scr5","src":"comix/scr5.png","width":282,"height":195},
			{"name":"skip","src":"comix/skip.png","width":71,"height":29},
			{"name":"continue_btn","src":"continue_btn.png","width":175,"height":39},
			{"name":"diag_lightning","src":"diag_lightning.png","width":22,"height":22},
			{"name":"diag_lightning_remove","src":"diag_lightning_remove.png","width":63,"height":69,"frames":8},
			{"name":"game_back","src":"game_back.png","width":318,"height":320},
			{"name":"game_flame","src":"game_flame.png","width":318,"height":320},
			{"name":"go","src":"go.png","width":118,"height":52},
			{"name":"Tips_1_1","src":"helpTips/Tips_1_1.png","width":130,"height":80,"frames":12},
			{"name":"Tips_1_2","src":"helpTips/Tips_1_2.png","width":130,"height":80,"frames":12},
			{"name":"Tips_2_1","src":"helpTips/Tips_2_1.png","width":139,"height":89,"frames":11},
			{"name":"Tips_2_2","src":"helpTips/Tips_2_2.png","width":139,"height":89,"frames":11},
			{"name":"Tips_3_1","src":"helpTips/Tips_3_1.png","width":133,"height":78,"frames":11},
			{"name":"Tips_3_2","src":"helpTips/Tips_3_2.png","width":133,"height":78,"frames":11},
			{"name":"Tips_4_1","src":"helpTips/Tips_4_1.png","width":76,"height":130,"frames":7},
			{"name":"Tips_4_2","src":"helpTips/Tips_4_2.png","width":76,"height":130,"frames":7},
			{"name":"Tips_4_3","src":"helpTips/Tips_4_3.png","width":76,"height":112,"frames":7},
			{"name":"Tips_4_4","src":"helpTips/Tips_4_4.png","width":76,"height":130,"frames":5},
			{"name":"Tips_5_1","src":"helpTips/Tips_5_1.png","width":130,"height":86,"frames":7},
			{"name":"Tips_5_2","src":"helpTips/Tips_5_2.png","width":130,"height":86,"frames":6},
			{"name":"Tips_5_3","src":"helpTips/Tips_5_3.png","width":130,"height":86,"frames":6},
			{"name":"Tips_5_4","src":"helpTips/Tips_5_4.png","width":130,"height":86,"frames":6},
			{"name":"Tips_6_1","src":"helpTips/Tips_6_1.png","width":130,"height":86,"frames":7},
			{"name":"Tips_6_2","src":"helpTips/Tips_6_2.png","width":130,"height":86,"frames":7},
			{"name":"Tips_6_3","src":"helpTips/Tips_6_3.png","width":130,"height":86,"frames":7},
			{"name":"Tips_6_4","src":"helpTips/Tips_6_4.png","width":130,"height":86,"frames":4},
			{"name":"Tips_7_1","src":"helpTips/Tips_7_1.png","width":148,"height":126,"frames":6},
			{"name":"Tips_7_2","src":"helpTips/Tips_7_2.png","width":148,"height":126,"frames":6},
			{"name":"Tips_7_3","src":"helpTips/Tips_7_3.png","width":148,"height":126,"frames":6},
			{"name":"Tips_7_4","src":"helpTips/Tips_7_4.png","width":148,"height":126,"frames":6},
			{"name":"Tips_7_5","src":"helpTips/Tips_7_5.png","width":148,"height":126,"frames":2},
			{"name":"Tips_8_1","src":"helpTips/Tips_8_1.png","width":130,"height":80,"frames":7},
			{"name":"Tips_8_2","src":"helpTips/Tips_8_2.png","width":130,"height":80,"frames":7},
			{"name":"Tips_8_3","src":"helpTips/Tips_8_3.png","width":130,"height":80,"frames":7},
			{"name":"Tips_8_4","src":"helpTips/Tips_8_4.png","width":130,"height":80,"frames":4},
			{"name":"Tips_9_1","src":"helpTips/Tips_9_1.png","width":130,"height":88,"frames":7},
			{"name":"Tips_9_2","src":"helpTips/Tips_9_2.png","width":130,"height":88,"frames":7},
			{"name":"Tips_9_3","src":"helpTips/Tips_9_3.png","width":130,"height":88,"frames":7},
			{"name":"help_temp","src":"help_temp.png","width":130,"height":78},
			{"name":"hightscores_btn","src":"hightscores_btn.png","width":97,"height":32},
			{"name":"hor_lightning","src":"hor_lightning.png","width":22,"height":22},
			{"name":"hor_lightning_remove","src":"hor_lightning_remove.png","width":48,"height":52,"frames":8},
			{"name":"hor_vert_lightning","src":"hor_vert_lightning.png","width":22,"height":22},
			{"name":"hor_vert_lightning_remove","src":"hor_vert_lightning_remove.png","width":63,"height":69,"frames":8},
			{"name":"level_complete","src":"level_complete.png","width":257,"height":70},
			{"name":"level_start","src":"level_start.png","width":254,"height":40},
			{"name":"light_anim_l","src":"light_anim_l.png","width":60,"height":20,"frames":3},
			{"name":"light_anim_r","src":"light_anim_r.png","width":60,"height":20,"frames":3},
			{"name":"logo_game","src":"logo_game.png","width":159,"height":46},
			{"name":"lvl_text","src":"lvl_text.png","width":22,"height":28,"frames":10},
			{"name":"fon_din1","src":"mainMenu/fon_din1.png","width":55,"height":59},
			{"name":"fon_din2","src":"mainMenu/fon_din2.png","width":226,"height":212},
			{"name":"logo","src":"mainMenu/logo.png","width":222,"height":64},
			{"name":"main_menu_back","src":"mainMenu/main_menu_back.png","width":480,"height":320},
			{"name":"pengui_block","src":"mainMenu/pengui_block.png","width":186,"height":199},
			{"name":"soundOFF","src":"mainMenu/soundOFF.png","width":26,"height":26},
			{"name":"soundON","src":"mainMenu/soundON.png","width":26,"height":26},
			{"name":"main_menu","src":"main_menu.png","width":139,"height":31},
			{"name":"main_menu_btn","src":"main_menu_btn.png","width":90,"height":23},
			{"name":"new_game_btn","src":"new_game_btn.png","width":175,"height":39},
			{"name":"next_btn","src":"next_btn.png","width":105,"height":20},
			{"name":"ni_btn","src":"ni_btn.png","width":76,"height":25},
			{"name":"ok_btn","src":"ok_btn.png","width":74,"height":25},
			{"name":"pause_back","src":"pause_back.png","width":179,"height":320},
			{"name":"pause_btn","src":"pause_btn.png","width":139,"height":31},
			{"name":"clear_back","src":"popups/clear_back.png","width":182,"height":122},
			{"name":"end_game_back","src":"popups/end_game_back.png","width":181,"height":119},
			{"name":"loose_back","src":"popups/loose_back.png","width":182,"height":120},
			{"name":"popup_back","src":"popups/popup_back.png","width":480,"height":320},
			{"name":"popup_back2","src":"popups/popup_back2.png","width":320,"height":320},
			{"name":"ready","src":"ready.png","width":255,"height":52},
			{"name":"restart","src":"restart.png","width":91,"height":23},
			{"name":"restart2","src":"restart2.png","width":139,"height":31},
			{"name":"resume","src":"resume.png","width":139,"height":31},
			{"name":"submit_score","src":"submit_score.png","width":79,"height":23},
			{"name":"try_again","src":"try_again.png","width":79,"height":26},
			{"name":"type_1","src":"type_1.png","width":22,"height":22},
			{"name":"type_1_remove","src":"type_1_remove.png","width":63,"height":68,"frames":8},
			{"name":"type_2","src":"type_2.png","width":22,"height":22},
			{"name":"type_2_remove","src":"type_2_remove.png","width":63,"height":68,"frames":8},
			{"name":"type_3","src":"type_3.png","width":22,"height":22},
			{"name":"type_3_remove","src":"type_3_remove.png","width":63,"height":68,"frames":8},
			{"name":"type_4","src":"type_4.png","width":22,"height":22},
			{"name":"type_4_remove","src":"type_4_remove.png","width":63,"height":68,"frames":8},
			{"name":"type_5","src":"type_5.png","width":22,"height":22},
			{"name":"type_5_remove","src":"type_5_remove.png","width":63,"height":68,"frames":8},
			{"name":"vert_lightning","src":"vert_lightning.png","width":22,"height":22},
			{"name":"vert_lightning_remove","src":"vert_lightning_remove.png","width":63,"height":69,"frames":8},
			
			
			{"name":"tip1","src":"tips/tip1.png"},
			{"name":"tip2","src":"tips/tip2.png"},
			{"name":"tip3","src":"tips/tip3.png"},
			{"name":"tip4","src":"tips/tip4.png"},
			{"name":"tip5","src":"tips/tip5.png"},
			{"name":"tip6","src":"tips/tip6.png"},
			{"name":"tip7","src":"tips/tip7.png"},
			{"name":"tip8","src":"tips/tip8.png"},
			{"name":"tip9","src":"tips/tip9.png"},
			
			{"name":"font1","src":"font1.png"},
			{"name":"font2","src":"font2.png"},
			{"name":"font3","src":"font3.png"},
			
			{"name":"text1","src":"text1.png"},
			{"name":"text2","src":"text2.png"},
			{"name":"text3","src":"text3.png"},
			{"name":"text4","src":"text4.png"},
			{"name":"more_games","src":"more_games.png","width":177,"height":44},
			]
	library = new AssetsLibrary('images', Utils.globalScale, assets);

	TTLoader.create(loadImagesEnd, true);
	library.load(TTLoader.loadComplete, TTLoader.showLoadProgress);
}

var iosMode = false;
var mixer;
var music_play;

function loadImagesEnd(data)
{
	document.getElementById('progress_container').style.display = 'none';
	document.getElementById('screen_container').style.display = 'block';
	document.getElementById('screen_background_container').style.display = 'block';

	//FontsManager.embed("font_reg", "fonts/font.ttf");

	iosMode = navigator.userAgent.toLowerCase().indexOf("mac") != -1;

	mixer = new AudioMixer("music", (iosMode ? 1 : 10));

	if(getMusicState())
	{
		mixer.play("main_track", true, null, 0);
		music_play = true;
	}
	else
	{
		mixer.stop(0);
		music_play = false;
	}

	if(GET["debug"] != 1)
	{
		gameState = STATE_COMIX;
		createScene();
		
		//gameState = STATE_GAME;
		//createScene(0);
	}
}

function createStage()
{
	if(stage)
	{
		stage.destroy();
		stage.stop();
	}
	stage = new Stage('screen', 480, 320, false);
	stage.delay = 1000/fps;
	stage.ceilSizes = true;
	stage.onpretick = preTick;
	stage.onposttick = postTick;
	stage.showFPS = false;
	//stage.fillColor = "#FF0";
}

var move_up_interval;

function createScene(level_num)
{
	createStage();
	clearInterval(move_up_interval);
	
	block_click = false;
	
	if(gameState == STATE_MENU)
	{
		mainMenu();
		musicConrols(460, 20);
		document.getElementById('screen_background_container').style.background = '#038ee9';
	}
	else if(gameState == STATE_GAME)
	{
		createLevel(level_num);
		musicConrols(460, 65);
		document.getElementById('screen_background_container').style.background = '#082f56';
		///current_level = 10;
		///createPopup("win");
	}
	else if(gameState == STATE_COMBO)
	{
		document.getElementById('screen_background_container').style.background = '#038ee9';
		showComboScr();
	}
	else if(gameState == STATE_COMIX)
	{
		document.getElementById('screen_background_container').style.background = '#038ee9';
		startComix();
	}
	BUILD_BACK = true;
	stage.start();
}

function musicConrols(x, y)
{
	var music;
	if(!getMusicState())
	{
		music = library.getSprite("soundOFF");
	}
	else
	{
		music = library.getSprite("soundON");
	}
	music.onclick = function()
	{
		if(!getMusicState())
		{
			music.bitmap = library.getSprite("soundON").bitmap;
			Utils.setCookie("music", 1);
			mixer.play("main_track", true, null, 0);
			music_play = true;
		}
		else
		{
			music.bitmap = library.getSprite("soundOFF").bitmap;
			Utils.setCookie("music", 0);
			mixer.stop(0);
			music_play = false;
		}
	}

	music.x = x;
	music.y = y;
	stage.addChild(music);

}

function getMusicState()
{
	var music_state2 = parseInt(Utils.getCookie("music"));

	if(music_state2 == 0)
	{
		return false;
	}
	else
	{
		return true;
	}
}

var combo_scr = [];

function showComboScr(event)
{
	if(event && !pause_flag)
	{
		block_click = true;
	}
	var back = library.getSprite("main_menu_back");
	back.x = 240;
	back.y = 160;
	stage.addChild(back);
	combo_scr.push(back);

	var text = library.getSprite("text1");
	text.x = 240; text.y = 30;
	stage.addChild(text);
	
	combo_scr.push(text);

	for(var i=0; i<CONST_COMBO.length; i++)
	{
		var spr = library.getSprite(CONST_COMBO[i].img_name);
		var test = parseInt(Utils.getCookie("open_"+CONST_COMBO[i].img_name));
		if(!test) spr.opacity = 0.7;//не открыто
		var n = Math.floor(i/3);
		spr.x = (i-n*3)*150 + 90;
		spr.y = n*40 + 70
		//spr.y = 70 + i*40;
		stage.addChild(spr);
		combo_scr.push(spr);
	}

	var back_btn =  library.getSprite("back_btn_combo");
	back_btn.x = 240;
	back_btn.y = 280;
	back_btn.onclick = function()
	{
		for(var i=0; i<combo_scr.length; i++)combo_scr[i].destroy = true;
		if(event)
		{
			if(!pause_flag)
			{
				block_click = false;
			}
			return false;
		}
		else
		{
			gameState = STATE_MENU;
			createScene();
		}
		return false;
	}
	stage.addChild(back_btn);
	combo_scr.push(back_btn);
}

function buildBackground()
{
	stage.drawScene(document.getElementById("screen_background"), true);
}

function showHighscores()
{
	/*if(ExternalAPI.check())
	{
		ExternalAPI.showScoreboard(function() {});
	}*/
}

function submitScores()
{
	/*if(ExternalAPI.check())
	{
		if(ExternalAPI.checkUserLoggedIn()) insertScores();
	}*/
}

function insertScores()
{
	/*if(ExternalAPI.check())
	{
		ExternalAPI.submitScores(gameScore, function() {});
	}*/
}

function preTick()
{
	if(BUILD_BACK)
	{
		BUILD_BACK = false;
		buildBackground();
	}

	if(gameState == STATE_GAME)
	{
		win_text.write(line_cnt + "/" + CONST_LEVELS[current_level].win_lines);
		level_text.write((current_level+1) + "/" + CONST_LEVELS.length);
		score_text.write(gameScore);
	}
}

function getIndexByPos(x, y)
{
	//var index_x = (x - spritesArr[0][0].x)/CONST_WIDTH_ELEM;
	//var index_y = (y- spritesArr[0][0].y)/CONST_WIDTH_ELEM ;
	var x = (x - CONST_START_POS_BL.x)/CONST_WIDTH_ELEM;
	var y = (y - CONST_START_POS_BL.y)/CONST_WIDTH_ELEM;
	return {x:x, y:y};
}

function getPosByIndex(x, y)
{
	var index_x = x*CONST_WIDTH_ELEM + CONST_START_POS_BL.x;
	var index_y = y*CONST_WIDTH_ELEM + CONST_START_POS_BL.y;
	return {x:index_x, y:index_y};
}

function getGameTypeByIndex(index_x, index_y)
{
	var gametype = gameArea[index_y][index_x];
	if(gametype) return gametype;
	else return false;
}

function destroySprByIndex(index_x, index_y)
{
	lock_destroy = true;

	if(gameArea[index_y][index_x] != 0)
	{
		var pos = getPosByIndex(index_x, index_y);

		if
		(
			gameArea[index_y][index_x] == "hor_lightning" ||
			gameArea[index_y][index_x] == "hor_vert_lightning" ||
			gameArea[index_y][index_x] == "diag_lightning"
		)
		{
			if(getMusicState() && !Utils.touchScreen) mixer.play("energy");

			var spr = library.getSprite("light_anim_l");
			spr.animDelay = 3;
			spr.scaleX = 160/spr.width;

			if(gameArea[index_y][index_x] == "diag_lightning")
			{
				spr.x = pos.x + spr.width/2*spr.scaleX*Math.sin(Math.PI/4);
				spr.y = pos.y + spr.width/2*spr.scaleX*Math.cos(Math.PI/4);
				spr.rotation = Math.PI/4;
			}
			else
			{
				spr.x = 100;
				spr.y = pos.y;
			}
			spr.onenterframe = function(e){ if(e.target.currentFrame == e.target.totalFrames - 1)e.target.destroy = true;}
			stage.addChild(spr);

			var spr = library.getSprite("light_anim_r");
			spr.animDelay = 3;
			spr.scaleX = 160/spr.width;

			if(gameArea[index_y][index_x] == "diag_lightning")
			{
				spr.x = pos.x - spr.width/2*spr.scaleX*Math.sin(Math.PI/4);
				spr.y = pos.y - spr.width/2*spr.scaleX*Math.cos(Math.PI/4);
				spr.rotation = Math.PI/4;
			}
			else
			{
				spr.x = 220;
				spr.y = pos.y;
			}
			spr.onenterframe = function(e){ if(e.target.currentFrame == e.target.totalFrames - 1)e.target.destroy = true;}
			stage.addChild(spr);

		}

		if
		(
			gameArea[index_y][index_x] == "vert_lightning" ||
			gameArea[index_y][index_x] == "hor_vert_lightning" ||
			gameArea[index_y][index_x] == "diag_lightning"
		)
		{
			if(getMusicState() && !Utils.touchScreen) mixer.play("energy");

			var spr = library.getSprite("light_anim_l");
			spr.animDelay = 3;
			spr.scaleX = 160/spr.width;

			if(gameArea[index_y][index_x] == "diag_lightning")
			{
				spr.x = pos.x + spr.width/2*spr.scaleX*Math.sin(-Math.PI/4);
				spr.y = pos.y + spr.width/2*spr.scaleX*Math.cos(-Math.PI/4);
				spr.rotation = -Math.PI/4;
			}
			else
			{
				spr.x = pos.x ;
				spr.y = 100;
				spr.rotation = Math.PI/2;
			}
			spr.onenterframe = function(e){ if(e.target.currentFrame == e.target.totalFrames - 1)e.target.destroy = true;}
			stage.addChild(spr);

			var spr = library.getSprite("light_anim_r");
			spr.animDelay = 3;
			spr.scaleX = 160/spr.width;

			if(gameArea[index_y][index_x] == "diag_lightning")
			{
				spr.x = pos.x - spr.width/2*spr.scaleX*Math.sin(-Math.PI/4);
				spr.y = pos.y - spr.width/2*spr.scaleX*Math.cos(-Math.PI/4);
				spr.rotation = -Math.PI/4;
			}
			else
			{
				spr.x = pos.x;
				spr.y = 220;
				spr.rotation = -Math.PI/2;
			}
			spr.onenterframe = function(e){ if(e.target.currentFrame == e.target.totalFrames - 1)e.target.destroy = true;}
			stage.addChild(spr);

		}

		if(gameArea[index_y][index_x] == "bomb") if(getMusicState() && !Utils.touchScreen) mixer.play("bomb");

		var spr = library.getSprite(gameArea[index_y][index_x] + "_remove");

		//фикс неправильных координат анимации в синем типе
		if(gameArea[index_y][index_x] == "type_1")
		{
			spr.x = pos.x + 2;
			spr.y = pos.y + 6;
			spr.gotoAndPlay(1);
		}
		else
		{
			spr.x = pos.x + 2;
			spr.y = pos.y + 4;
		}
		//spr.animDelay = 30;

		spr.onenterframe = function(e)
		{
			if(e.target.currentFrame == e.target.totalFrames - 2)
			{
				e.target.destroy = true;
			}
		}
		stage.addChild(spr);
		//scoreText("+"+CONST_SCORE_ONE_OBJ, pos.x, pos.y);

		if(spritesArr[index_y][index_x] != 0)
		{
			spritesArr[index_y][index_x].destroy = true;
			spritesArr[index_y][index_x] = 0;
		}

		gameArea[index_y][index_x] = 0;
	}
	all_destr_cnt++;
}

function postTick()
{
	//Utils.drawIphoneLimiter(stage, LANDSCAPE_MODE);
}

function showHelpPopup()
{
	if(!block_click)block_click = true;

	var level = CONST_LEVELS[current_level];

	if(level.show_help)
	{
		pause_flag = true;
		help_show = true;

		var back_spr = library.getSprite(null);
		back_spr.width = 320;
		back_spr.height = 320;
		back_spr.x = 157;
		back_spr.y = 160;
		back_spr.fillColor = "#000";
		back_spr.opacity = 0.5;
		/*back_spr.onclick = function()
		{
			for(var i=0; i<help_popup.length; i++) help_popup[i].destroy = true;
			block_click = false;
			return false;
		};*/
		stage.addChild(back_spr);

		help_popup.push(back_spr);

		var curr_help_spr = library.getSprite(level.show_help[0]);
		curr_help_spr.cnt = 0;
		curr_help_spr.x = 160;
		curr_help_spr.y = 160;
		curr_help_spr.animDelay = 4;
		curr_help_spr.onenterframe = function(e)
		{
			cycleSpritePartAnim(e.target);
		}
		curr_help_spr.onclick = function()
		{
			for(var i=0; i<help_popup.length; i++) help_popup[i].destroy = true;
			if(block_click)block_click = false;
			pause_flag = false;
			help_show = false;
			return false;
		}
		stage.addChild(curr_help_spr);
		
		if(level.help_text)
		{
			mc = library.getSprite(level.help_text);
			mc.x = 160;
			mc.y = curr_help_spr.y - curr_help_spr.height/2 - 20;
			stage.addChild(mc);
			help_popup.push(mc);
		}

		help_popup.push(curr_help_spr);
	}
	else
	{
		if(block_click)block_click = false;
	}
}


function cycleSpritePartAnim(spr)
{
	if(spr.currentFrame == spr.totalFrames-1)
	{
		var level = CONST_LEVELS[current_level];

		spr.cnt = spr.cnt + 1;

		if(spr.cnt >= level.show_help.length)spr.cnt = 0;

		var replace_spr = library.getSprite(level.show_help[spr.cnt]);
		spr.bitmap = replace_spr.bitmap;
		spr.totalFrames = replace_spr.totalFrames;
		spr.totalLayers = replace_spr.totalLayers;
		spr.gotoAndPlay(0);
	}
}

var level_text;
var score_text;
var combo_temp = [];
var pause_flag = false;

function createLevel(level, flag)
{
	block_click = false;
	lock_destroy = false;

	pause_flag = false;

	clearInterval(move_up_interval);

	move_up_interval = setInterval('moveUp()', CONST_TIMEOUT_MOVE);

	if(!level)
	{
		current_level = 0;
	}
	else
	{
		current_level = level;
	}

	line_cnt = 0;

	if(flag)return;

	var level = CONST_LEVELS[current_level];

	clearCombo();

	//reset level values
	gameArea = [];
	spritesArr = [];

	gameScore = 0;

	var const_count_bubbles = CONST_LEVELS[current_level].start_area.x*CONST_LEVELS[current_level].start_area.y;

	//reset y
	CONST_START_POS_BL.y = CONST_POS_START_Y;

	for(var y=CONST_AREA_SIZE.y-1; y>=0; y--)
	{
		gameArea[y] = [];
		spritesArr[y] = [];

		for(var x=CONST_AREA_SIZE.x-1; x>=0; x--)
		{
			if(const_count_bubbles > 0)
			{
				gameArea[y][x] = getRandomElement();

				var sprite = library.getSprite(gameArea[y][x]+"");
				sprite.x = CONST_START_POS_BL.x +  x * CONST_WIDTH_ELEM;
				sprite.y = CONST_START_POS_BL.y +  y * CONST_WIDTH_ELEM;
				sprite.onclick = elementClick;
				sprite.setZIndex(100);
				sprite.gametype = gameArea[y][x]+"";
				stage.addChild(sprite);

				//gameArea[y][x].sprite = sprite;
				spritesArr[y][x] = sprite;

				const_count_bubbles--;
			}
			else
			{
				gameArea[y][x] = 0;
				spritesArr[y][x] = 0;
			}
		}
	}

	var back = library.getSprite("game_back");
	back.x = 159;
	back.y = 160;
	back.static = true;
	back.zIndex = 10;
	stage.addChild(back);

	var frame = library.getSprite("game_flame");
	frame.x = 159;
	frame.y = 152;
	frame.static = true;
	frame.setZIndex(10000);
	stage.addChild(frame);


	var combo = library.getSprite("combo_text");
	combo.x = 180;
	combo.y = 10;
	combo.static = true;
	stage.addChild(combo);

	var combo_flame = library.getSprite("comboview");
	combo_flame.x = 250;
	combo_flame.y = 15;
	combo_flame.static = true;
	stage.addChild(combo_flame);

	//pause menu
	var pause_back = library.getSprite("pause_back");
	pause_back.x = 390;
	pause_back.y = 160;
	pause_back.static = true;
	//pause_back.static = true;
	stage.addChild(pause_back);

	var logo_game = library.getSprite("logo_game");
	logo_game.x = 396;
	logo_game.y = 32;
	logo_game.static = true;
	//pause_back.static = true;
	stage.addChild(logo_game);

	var pause_game = library.getSprite("pause_btn");
	pause_game.x = pause_back.x+7;
	pause_game.y = 112;
	pause_game.static = true;
	pause_game.onclick = function(e)
	{
		if(help_show) return false;

		if(pause_flag)
		{
			e.target.bitmap = library.getSprite("pause_btn").bitmap;
			if(e.target.back_spr)e.target.back_spr.destroy = true;
			if(e.target.text_spr)e.target.text_spr.destroy = true;
			pause_flag = false;
			BUILD_BACK = true;
			if(block_click)block_click = false;
		}
		else
		{
			e.target.bitmap = library.getSprite("resume").bitmap;
			pause_flag = true;
			BUILD_BACK = true;
			if(!block_click)block_click = true;

			var sprite = library.getSprite("popup_back2");
			sprite.x = 157;
			sprite.y = 160;
			sprite.fillColor = "#000";
			sprite.opacity = 0.5;
			stage.addChild(sprite);

			e.target.pause_type = true;

			e.target.back_spr = sprite;

			var pause_text = library.getSprite("text2");
			pause_text.x = 157;
			pause_text.y = 130;
			stage.addChild(pause_text);

			e.target.text_spr = pause_text;
		}
		return false;
	}
	stage.addChild(pause_game);

	var restart = library.getSprite("restart2");
	restart.x = pause_back.x + 7;
	restart.y = 152;
	restart.static = true;
	restart.onclick = function()
	{
		gameState = STATE_GAME;
		createScene(current_level);
		return false;
	}
	stage.addChild(restart);

	var menu_btn = library.getSprite("main_menu");
	menu_btn.x = pause_back.x + 7;
	menu_btn.y = 192;
	menu_btn.static = true;
	menu_btn.onclick = function()
	{
		gameState = STATE_MENU;
		createScene();
		return false;
	}
	stage.addChild(menu_btn);

	var more_games = library.getSprite("more_games");
	more_games.x = pause_back.x + 7;
	more_games.y = 230;
	more_games.setPropScale(0.85);
	more_games.onclick = showMoreGames;
	stage.addChild(more_games);

	var next_line = library.getSprite("next_btn");
	next_line.x = 260;
	next_line.y = 295;
	next_line.static = true;
	next_line.onclick = function()
	{
		if(!block_click)
		{
			clearInterval(move_up_interval);
			move_up_interval = null;
			moveUp();
			move_up_interval = setInterval('moveUp()', CONST_TIMEOUT_MOVE);
		}
		return false;
	}
	stage.addChild(next_line);

	var combo_icon = library.getSprite("combo_game");
	combo_icon.x = pause_back.x + 7;
	combo_icon.y = 280;
	combo_icon.static = true;
	combo_icon.onclick = showComboScr;
	stage.addChild(combo_icon);
	
	mc = library.getSprite("text3");
	mc.x = 17; mc.y = 284;
	mc.scaleX = mc.scaleY = 0.8;
	mc.static = true;
	stage.addChild(mc);
	
	win_text = new Text(library.getAsset("font1", true).bitmap, 10, 12);
	win_text.x = 74; win_text.y = 285;
	win_text.charSpacing = -2;
	win_text.align = win_text.ALIGN_RIGHT;
	win_text.write(line_cnt + "/" + CONST_LEVELS[current_level].win_lines);
	
	mc = library.getSprite("text4");
	mc.x = 17; mc.y = 10;
	mc.scaleX = mc.scaleY = 0.8;
	mc.static = true;
	stage.addChild(mc);
	
	level_text = new Text(library.getAsset("font2", true).bitmap, 8, 10);
	level_text.x = 67; level_text.y = 11;
	level_text.charSpacing = -1;
	level_text.align = level_text.ALIGN_RIGHT;
	level_text.write((current_level+1) + "/" + CONST_LEVELS.length);
	
	score_text = new Text(library.getAsset("font3", true).bitmap, 8, 10);
	score_text.x = 112; score_text.y = 11;
	score_text.charSpacing = -1;
	score_text.align = score_text.ALIGN_CENTER;
	score_text.write(gameScore);

	BUILD_BACK = true;

	showHelpPopup();
}


function getRandomElement()
{
	var level = CONST_LEVELS[current_level];
	var rand = Math.random();
	var types_arr = [];

	for(var i=0; i<level.colors.length; i++) types_arr.push(level.colors[i]);

	if(rand < 0.1)
	{
		if(level.closed) types_arr.push("closed");
	}

	var rand_index;

	if(rand < 0.2)//0.08
	{
		if(level.bonuses.length > 0)
		{
			for(var i=0; i<level.bonuses.length; i++){ types_arr.push(level.bonuses[i])};
			rand_index = Math.floor(Math.random() * types_arr.length);
		}
		else
		{
			rand_index = Math.floor(Math.random() * types_arr.length)
		}
	}
	else
	{
		rand_index = Math.floor(Math.random() * types_arr.length)
	}

	return types_arr[rand_index];
}

var search_type = null;

var searchMask = [];
var bonus_flag = false;
var lock_destroy = false;
var all_destr_cnt = 0;

function elementClick(event)
{
	if(block_click || lock_destroy) return;
	bonus_flag = false;
	all_destr_cnt = 0;

	var index = getIndexByPos(event.target.x, event.target.y);

	search_type = getGameTypeByIndex(index.x, index.y);

	//clear search chains flag
	searchMask = [];
	
	for(var y=0; y<gameArea.length; y++)
	{
		var row = [];
		for(var x=0; x<gameArea[y].length; x++)
		{
			row[x] = 0;
		}
		searchMask[y] = row;
	}

	if(CONST_LEVELS[current_level].bonuses)
	{
		for(var i=0; i<CONST_LEVELS[current_level].bonuses.length; i++)
		{
			if(search_type == CONST_LEVELS[current_level].bonuses[i])
			{
				checkBonus(index.x, index.y);
				bonus_flag = true;
				break;
			}
		}
	}

	//check click element by mask
	if(bonus_flag)
	{
		for(var y=0; y<searchMask.length; y++)
		{
			for(var x=0; x<searchMask[y].length; x++)
			{
				if(searchMask[y][x] == 1)
				{
					destroySprByIndex(x, y);
				}
			}
		}
	}
	else
	{
		checkChains(index.x, index.y);

		var remove_counter = [];

		for(var y=0; y<searchMask.length; y++)
		{
			for(var x=0; x<searchMask[y].length; x++)
			{
				if(searchMask[y][x] == 1)
				{
					remove_counter.push({y:y, x:x});
				}
			}
		}

		if(remove_counter.length >=3)
		{
			for(var i=0; i<remove_counter.length; i++)
			{
				destroySprByIndex(remove_counter[i].x, remove_counter[i].y);
			}
			comboCheck(search_type);
		}
	}

	lock_destroy = false;

	if(all_destr_cnt > 0)
	{
		if(getMusicState() && !Utils.touchScreen) mixer.play("ice-breaking");
		var score = getScore(all_destr_cnt);
		gameScore += all_destr_cnt*score;
		scoreText("+"+all_destr_cnt*score, event.target.x, event.target.y);
	}

	checkGravity();//setTimeout('checkGravity()', 300);
}

function getScore(cnt)
{
	if (cnt < 6) return 10;
	if (cnt >= 6 && cnt < 15) return 20;
	if (cnt >= 15 && cnt < 20) return 30;
	if (cnt >= 20 && cnt < 28) return 40;
	if (cnt >= 28) return 50;
}

function comboCheck(type)
{
	addCheckCombo();
	var spr = library.getSprite("combo_"+ type);
	spr.x = 223 + ((combo_temp.length >= 3) ? 0:combo_temp.length * 27);
	spr.y = 14;
	spr.scaleX = spr.scaleY = 1.5;
	spr.type = type;
	stage.addChild(spr);
	combo_temp.push(spr);
}

function addCheckCombo()
{
	if(combo_temp.length >=	 3)
	{
		var cnt = 0;
		var win_combo = null;

		var temp_arr = [];

		for(var i=0; i<combo_temp.length; i++)
		{
			temp_arr.push(combo_temp[i].type);
		}

		for(var i=0; i<CONST_COMBO.length; i++)
		{

			for(var k=0; k<CONST_COMBO[i].types.length; k++)
			{
				if(CONST_COMBO[i].types[k] == temp_arr[k])
				{
					cnt++;
					if(cnt >=3)
					{
						win_combo = CONST_COMBO[i];
					}
				}
				else
				{
					cnt = 0;
				}
			}
		}

		if(win_combo)
		{
			var test = parseInt(Utils.getCookie("open_"+win_combo.img_name));

			if(!test)
			{
				Utils.setCookie("open_"+win_combo.img_name, 1);

				var spr = library.getSprite("combo_text2");
				spr.scaleX = spr.scaleY = 0.1;
				spr.onclick = function(){return false;};
				spr.x = -50;
				spr.y = 70;
				stage.addChild(spr);
				show_arr.push(spr);
				animTextStart();
			}
		}

		clearCombo();
	}

}

function clearCombo()
{
	for(var j=0; j<combo_temp.length; j++)
	{
		if(combo_temp[j])combo_temp[j].destroy = true;
	}
	combo_temp = [];
}

function checkBonus(index_x, index_y)
{

	var diffs = [];
	var hor = false;
	var diag = false;
	var vert = false;

	if(search_type == "bomb")
	{
		diffs =
		[
			{x: index_x, y: index_y},
			{x: index_x+1, y: index_y},
			{x: index_x-1, y: index_y},

			{x: index_x+1, y: index_y+1},
			{x: index_x, y: index_y+1},
			{x: index_x-1, y: index_y+1},

			{x: index_x+1, y: index_y-1},
			{x: index_x, y: index_y-1},
			{x: index_x-1, y: index_y-1}
		];
	}
	else if(search_type == "vert_lightning")
	{
		vert = true;
	}
	else if(search_type == "hor_lightning")
	{
		hor = true;
	}
	else if(search_type == "hor_vert_lightning")
	{
		vert = true;
		hor = true;
	}
	else if(search_type == "diag_lightning")
	{
		searchMask[index_y][index_x] = 1;

		var i=1;
		var diffs =
		[
			{x: 1, y: 1},
			{x: -1, y: 1},
			{x: 1, y: -1},
			{x: -1, y: -1}
		];

		var ok = true;

		while(ok)
		{
			ok = false

			for(var k = 0; k<diffs.length; k++)
			{
				var x = index_x + i*diffs[k].x;
				var y = index_y + i*diffs[k].y;

				if
				(  x >= CONST_LEVELS[current_level].start_area.x ||
				   x < 0 ||
				   y >= gameArea.length ||
				   y < 0
				)
				{
				}
				else
				{
					ok = true;

					if(searchMask[y][x] != 1)
					{
						searchMask[y][x] = 1;
						checkRecurse(x, y);
					}
				}
			}
			i++;
		}
		return;
	}

	for(var y=0; y<gameArea.length; y++)
	{
		for(var x=0; x<gameArea[y].length; x++)
		{
			if(hor && vert)//horizontal bonus + vertical bonus
			{
				if(y == index_y ||  x == index_x)
				{
					if(searchMask[y][x] != 1)
					{
						searchMask[y][x] = 1;
						checkRecurse(x, y);
					}
				}
			}
			else if(hor && y == index_y && !vert)//horizontal bonus
			{
				if(searchMask[y][x] != 1)
				{
					searchMask[y][x] = 1;
					checkRecurse(x, y);
				}
			}
			else if(vert && x == index_x && !hor)//vertical bonus
			{
				if(searchMask[y][x] != 1)
				{
					searchMask[y][x] = 1;
					checkRecurse(x, y);
					break;
				}
			}
			else //bomb
			{
				for(var i=0; i<diffs.length; i++)
				{
					if
					(  diffs[i].x > gameArea[y].length-1 ||
					   diffs[i].y > gameArea.length-1 ||
					   diffs[i].y < 0 ||
					   diffs[i].x < 0
					)
					{
						continue;
					}
					else if(searchMask[diffs[i].y][diffs[i].x] != 1)
					{
						searchMask[diffs[i].y][diffs[i].x] = 1;

						checkRecurse(diffs[i].x, diffs[i].y);

						/*for(var k=0; k<CONST_ALL_BONUSES.length; k++)
						{
							if(CONST_ALL_BONUSES[k] == gameArea[diffs[i].y][diffs[i].x])
							{
								checkBonus(diffs[i].x, diffs[i].y);
							}
						}*/
					}
				}
			}
		}

	}
}

function checkRecurse(x, y)
{
	for(var k=0; k<CONST_ALL_BONUSES.length; k++)
	{
		if(CONST_ALL_BONUSES[k] == gameArea[y][x])
		{
			search_type = CONST_ALL_BONUSES[k];
			checkBonus(x, y);
		}
	}
}

var show_arr = [];
var next_level_flag = false;

function animTextStart()
{
	block_click = true;

	var tween = show_arr[0].addTween("scaleX", 1, 10, Easing.linear.out);
	tween.onchange = function(e)
	{
		e.target.obj.scaleY = e.target.obj.scaleX;
	}
	tween.onfinish = function(e)
	{
		setTimeout('animTextEnd()', 1500);
	}

	show_arr[0].x = -50;

	var tween2 = show_arr[0].addTween("x", 160, 10, Easing.linear.out);

	if(show_arr[0].add_text)var text = show_arr[0].add_text;

	if(text)
	{
		for(var i=0; i<text.sprites.length; i++)
		{
			var tween3 = text.sprites[i].addTween("x",160 + text.delta + 20*i, 10, Easing.linear.out);
			tween3.play();
		}
	}
	tween.play();
	tween2.play();
}

function animTextEnd()
{
	if(!show_arr[0]) return;

	var tween = show_arr[0].addTween("scaleX", 0, 10, Easing.linear.out);

	tween.onchange = function(e)
	{
		e.target.obj.scaleY = e.target.obj.scaleX;
	}

	tween.onfinish = function(e)
	{
		e.target.obj.destroy = true;
		show_arr.shift();

		if(show_arr.length < 0 || !show_arr.length)
		{
			block_click = false;
		}

		if(e.target.obj.add_text){e.target.obj.add_text.write("")};

		if(show_arr.length > 0)
		{
			animTextStart();
		}
		else if(next_level_flag)
		{
			next_level_flag = false;

			//слудующий уровень
			clearInterval(move_up_interval);

			help_show = false;
			lock_destroy = false;

			if(block_click)block_click = false;

			move_up_interval = setInterval('moveUp()', CONST_TIMEOUT_MOVE);
			current_level++;
			showHelpPopup();

			/*for(var i=0; i<stage.objects.length; i++)
			{
				if(stage.objects[i].pause_type)
				{
					if(pause_flag)
					{
						stage.objects[i].bitmap = library.getSprite("pause_btn").bitmap;
						if(stage.objects[i].back_spr)stage.objects[i].back_spr.destroy = true;
						if(stage.objects[i].text_spr)stage.objects[i].text_spr.destroy = true;
						pause_flag = false;
						BUILD_BACK = true;
					}
				}
			}*/
		}
	}

	var tween2 = show_arr[0].addTween("x", 490, 15, Easing.linear.out);

	if(show_arr[0].add_text)var text = show_arr[0].add_text;

	if(text)
	{
		for(var i=0; i<text.sprites.length; i++)
		{
			var tween3 = text.sprites[i].addTween("x",490 + text.delta + 20*i, 10, Easing.linear.out);
			tween3.play();
		}
	}

	tween.play();
	tween2.play();
}

//level popup
function createPopup(type)
{
	if(!type) return;
	if(!block_click)block_click = true;

	clearInterval(move_up_interval);
	move_up_interval = null;
	next_level_flag = false;

	switch(type)
	{
		case "win":
			//if(block_click)block_click = false;
			help_show = true;

			clearCombo();

			line_cnt = 0;

			if(getMusicState() && !iosMode) mixer.play("win");

			saveLevelsScores(current_level, gameScore);

			if(current_level + 1 >= CONST_LEVELS.length)
			{
				createPopup("all_levels");
				return;
			}

			var sprite = library.getSprite("level_complete");
			sprite.scaleX = sprite.scaleY = 0.1;
			sprite.onclick = function(){return false;};
			sprite.x = -50;
			sprite.y = 160;
			stage.addChild(sprite);

			show_arr.push(sprite);

			var sprite = library.getSprite("level_start");
			sprite.scaleX = sprite.scaleY = 0.1;
			sprite.onclick = function(){return false;};
			sprite.x = -50;
			sprite.y = 160;
			stage.addChild(sprite);

			var text = new Text(library.getSprite("lvl_text").bitmap, 22, 28);
			text.x = -50;
			text.y = 160;
			text.delta = 50;//сдвиг относительно надписи LEVEL
			text.align = text.ALIGN_CENTER;
			for(var i=0; i<text.sprites.length; i++){text.sprites[i].scaleX=text.sprites[i].scaleY=1.2};
			text.write((current_level + 2) + "");

			sprite.add_text = text;

			show_arr.push(sprite);

			var sprite = library.getSprite("ready");
			sprite.scaleX = sprite.scaleY = 0.1;
			sprite.onclick = function(){return false;};
			sprite.x = -50;
			sprite.y = 160;
			stage.addChild(sprite);

			show_arr.push(sprite);

			var sprite = library.getSprite("go");
			sprite.scaleX = sprite.scaleY = 0.1;
			sprite.onclick = function(){return false;};
			sprite.x = -50;
			sprite.y = 160;
			stage.addChild(sprite);

			show_arr.push(sprite);

			next_level_flag = true;

			animTextStart();
			
			ExternalAPI.exec('showAds');
			ExternalAPI.openWidget(160, 50, "I scored " + gameScore + " in Unfreeze Penguins game! Try to beat me!");

		break;

		case "all_levels":
			var sprite = library.getSprite("popup_back2");
			sprite.onclick = function(){return false;};
			sprite.x = 160;
			sprite.y = 160;
			stage.addChild(sprite);

			var sprite = library.getSprite("end_game_back");
			sprite.onclick = function(){return false;};
			sprite.x = 160;
			sprite.y = 160;
			stage.addChild(sprite);

			var end_game_btn = library.getSprite("main_menu_btn");
			end_game_btn.x = 160;
			end_game_btn.y = 200;
			end_game_btn.onclick = function()
			{
				gameState = STATE_MENU;
				createScene();
				return false;
			}
			stage.addChild(end_game_btn);

		break;

		case "lost":
			//saveLevelsScores(current_level, gameScore);

			if(getMusicState() && !iosMode) mixer.play("defeat");

			var sprite = library.getSprite("popup_back2");
			sprite.onclick = function(){return false;};
			sprite.x = 157;
			sprite.y = 160;
			stage.addChild(sprite);

			var sprite = library.getSprite("loose_back");
			sprite.onclick = function(){return false;};
			sprite.x = 160;
			sprite.y = 160;
			stage.addChild(sprite);

			var main_menu_btn = library.getSprite("main_menu_btn");
			main_menu_btn.x = 120;
			main_menu_btn.y = 190;
			main_menu_btn.onclick = function()
			{
				gameState = STATE_MENU;
				createScene();
				return false;
			}
			stage.addChild(main_menu_btn);

			var restart = library.getSprite("restart");
			restart.x = 205;
			restart.y = 190;
			restart.onclick = function()
			{
				gameState = STATE_GAME;
				createScene(current_level);
				return false;
			}
			stage.addChild(restart);

		break;
		case "clear_scores":
			var sprite = library.getSprite("clear_back");
			sprite.onclick = function()
			{
				return false;
			};
			sprite.x = 240;
			sprite.y = 160;
			stage.addChild(sprite);

			var btn_ok = library.getSprite("ok_btn");
			btn_ok.x = 200;
			btn_ok.y = 190;
			btn_ok.onclick = function()
			{
				for(var i=0; i<CONST_LEVELS.length; i++)
				{
					if(parseInt(Utils.getCookie("level_"+ i)))
					{
						Utils.setCookie("level_"+i, null);
					}
				}

				for(var i=0; i<CONST_COMBO.length; i++)
				{
					if(parseInt(Utils.getCookie("open_"+CONST_COMBO[i].img_name)))
					{
						Utils.setCookie("open_"+CONST_COMBO[i].img_name, null);
					}
				}

				gameState = STATE_GAME;
				createScene();
				return false;
			}
			stage.addChild(btn_ok);

			var btn_cancel = library.getSprite("ni_btn");
			btn_cancel.x = 280;
			btn_cancel.y = 190;
			btn_cancel.onclick = function()
			{
				gameState = STATE_MENU;
				createScene();
				return false;
			}
			stage.addChild(btn_cancel);
		break;
	}
}

var anim_flag = false;

function checkGravity()
{
	anim_flag = false;

	for(var y=gameArea.length-1; y >= 0; y--)
	{
		for(var x=gameArea[y].length-1; x >= 0; x--)
		{
			var index_x = x;
			var index_y = y;

			while
			(
				(index_y + 1 < gameArea.length && index_y + 1 > 0) &&
				gameArea[index_y + 1][index_x] == 0 && gameArea[index_y][index_x] != 0
			)
			{
				if(spritesArr[index_y][index_x] != null)
				{
					anim_flag = true;

					if(!spritesArr[index_y][index_x].down_cnt)
					{
						spritesArr[index_y][index_x].down_cnt = 1;
					}
					else
					{
						spritesArr[index_y][index_x].down_cnt++;
					}

					/*spritesArr.index_x = index_x;
					spritesArr.index_y = index_y;

					for(var i=0; i<move_down_arr[i]; i++)
					{
						if(move_down_arr[i].obj.index_x == index_x && move_down_arr[i].obj.index_y == index_y)
						{
							move_down_arr[i].dist += 1;
						}
						else
						{
							move_down_arr.push({obj:spritesArr[index_y][index_x], dist:1});
						}
					}*/
				}
				spritesArr[index_y + 1][index_x] = spritesArr[index_y][index_x];
				spritesArr[index_y][index_x] = 0;

				gameArea[index_y + 1][index_x] = gameArea[index_y][index_x];
				gameArea[index_y][index_x] = 0;
				index_y++;
			}
		}
	}

	////setTimeout('checkGravity2()', 200);
	if(anim_flag)
	{
		for(var y=0; y<gameArea.length; y++)
		{
			for(var x=0; x<gameArea[y].length; x++)
			{
				if(spritesArr[y][x] && spritesArr[y][x].down_cnt)
				{
					addYAnim(spritesArr[y][x]);
				}
			}
		}
	}
	else
	{
		checkGravity2();
	}
}

var lock_timeout;

function addYAnim(spr)
{
	if(!block_click)block_click = true;
	clearTimeout(lock_timeout);
	var tween = spr.addTween('y', spr.y + spr.down_cnt*CONST_WIDTH_ELEM, 4, Easing.linear.easeOut);
	tween.onfinish = function(e)
	{
		e.target.obj.down_cnt = null;
		clearTimeout(lock_timeout);
		lock_timeout = setTimeout('checkGravity2();', 200);
		//if(block_click)block_click = false;
		//checkGravity2();
	}
	tween.play();
}

function checkGravity2()
{
	var anim_flag = false;

	var h = gameArea.length;
	var w = gameArea[0].length;
	var ex;

	for (var i = 1; i < Math.floor(w/2); i++)
	{
		ex = i + 0;
		if (gameArea[h-1][ex] == 0)
		{
			while ((ex > 0) && (gameArea[h-1][ex-1]))
			{
				anim_flag = true;
				replaceCols(ex, ex-1, false);
				ex--;
			}
		}

		ex = w - i - 1;
		if (gameArea[h-1][ex] == 0)
		{
			while ((ex >= Math.ceil(w/2)) && (gameArea[h-1][ex+1]))
			{
				anim_flag = true;
				replaceCols(ex, ex+1, true);
				ex++;
			}
		}
	}

	if(anim_flag)
	{
		for(var y=0; y<gameArea.length; y++)
		{
			for(var x=0; x<gameArea[y].length; x++)
			{
				if(spritesArr[y][x] && spritesArr[y][x].x_cnt)
				{
					addXAnim(spritesArr[y][x]);
				}
			}
		}
	}
	else
	{
		block_click = false;
	}
}

var lock_timeout2;

function addXAnim(spr)
{
	if(!block_click)block_click = true;
	clearTimeout(lock_timeout2);

	var tween = spr.addTween('x', spr.x + spr.x_cnt*CONST_WIDTH_ELEM, 4, Easing.linear.easeOut);
	tween.onfinish = function(e)
	{
		e.target.obj.x_cnt = null;
		clearTimeout(lock_timeout2);
		lock_timeout = setTimeout('block_click = false;',150);
		//if(block_click)block_click = false;
		//checkGravity2();
	}
	tween.play();
}

function replaceCols(x1, x2, flag)
{
	 var h = gameArea.length;

	 for (var y = 0; y < h; y++)
	 {
		var tmp = gameArea[y][x1].valueOf();
		gameArea[y][x1] = gameArea[y][x2];
		gameArea[y][x2] = tmp;

		 if(!spritesArr[y][x2].x_cnt)
		{
			spritesArr[y][x2].x_cnt = 0;
		}

		if(flag)
		{
			spritesArr[y][x2].x_cnt--;
			//spritesArr[y][x2].x = spritesArr[y][x2].x - CONST_WIDTH_ELEM;
		}
		else
		{
			spritesArr[y][x2].x_cnt++;
			//spritesArr[y][x2].x = spritesArr[y][x2].x + CONST_WIDTH_ELEM;
		}

		var tmp2 = spritesArr[y][x1];
		spritesArr[y][x1] = spritesArr[y][x2];
		spritesArr[y][x2] = tmp2;
	 }
}

function checkChains(index_x, index_y)
{

	var diffs =
	[
		{x: index_x, y: index_y},
		{x: index_x+1, y: index_y},
		{x: index_x, y: index_y+1},
		{x: index_x-1, y: index_y},
		{x: index_x, y: index_y-1}
	];
	
	for(var y=0; y<gameArea.length; y++)
	{
		for(var x=0; x<gameArea[y].length; x++)
		{
			for(var i=0; i<diffs.length; i++)
			{
				if
				(  diffs[i].x > gameArea[y].length-1 ||
				   diffs[i].y > gameArea.length-1 ||
				   diffs[i].y < 0 ||
				   diffs[i].x < 0
				)
				{
					continue;
				}
				else
				{
					if
					(
						searchMask[diffs[i].y][diffs[i].x] != 1 &&
						gameArea[diffs[i].y][diffs[i].x] == search_type
					)
					{
						searchMask[diffs[i].y][diffs[i].x] = 1;
						checkChains(diffs[i].x, diffs[i].y);
					}
				}
			}
		}
	}
}

var move_up = false;
var lock = false;

function moveUp()
{
	if(block_click) return;

	//if(line_cnt == 2)lock = true;

	line_cnt++;

	if(line_cnt > CONST_LEVELS[current_level].win_lines)
	{
		if(!block_click)block_click = true;
		createPopup("win");
		return;
	}

	gameArea.shift();
	spritesArr.shift();

	for(var y=0; y<CONST_AREA_SIZE.y-1; y++)
	{
		for(var x=0; x<CONST_AREA_SIZE.x; x++)
		{
			if(spritesArr[y][x])spritesArr[y][x].y -= CONST_WIDTH_ELEM;
		}
	}

	var row = [];
	var row2 = [];

	for(var x=0; x<CONST_LEVELS[current_level].start_area.x; x++)
	{
		row[x] = getRandomElement();

		var sprite = library.getSprite(row[x]+"");
		sprite.x = CONST_START_POS_BL.x +  x * CONST_WIDTH_ELEM;
		sprite.y = CONST_START_POS_BL.y +  spritesArr.length * CONST_WIDTH_ELEM;

		sprite.onclick = elementClick;
		sprite.setZIndex(100);
		sprite.gametype = row[x]+"";
		stage.addChild(sprite);

		row2[x] = sprite;
	}

	spritesArr.push(row2);
	gameArea.push(row);

	checkLoose();
	/*if(gameArea[y][x].gametype && !gravity_enable)
	{
		var tween = gameArea[y][x].addTween("y", gameArea[y][x].y - CONST_WIDTH_ELEM, CONST_ANIM_SPEED_MOVE_UP, Easing.linear.out, null, null);

		tween.onchange = function()
		{
			move_up = true;
			block_click = true;
		}
		tween.onfinish = function()
		{
			move_up = false;
			block_click = false;
		}

		tween.play();*/
}

function animMoveCycleY(spr)
{
	var tween = spr.addTween("y", spr.params.end, spr.params.time, Easing.linear.out);
	tween.onfinish = function(e)
	{
		e.target.obj.y = 400;
		animMoveCycleY(e.target.obj);
	}
	tween.play();
}

function mainMenu()
{
  	var back = library.getSprite("main_menu_back");
    back.x = 240;
    back.y = 160;
	back.static = true;
    stage.addChild(back);

	var dis1 = library.getSprite("fon_din1");
	dis1.x = 18;
	dis1.y = 160;
	dis1.params = {end: -50, time:200};
	stage.addChild(dis1);

	animMoveCycleY(dis1);

	var dis1 = library.getSprite("fon_din1");
	dis1.x = 255;
	dis1.y = 280;
	dis1.params = {end: -180, time:300};
	stage.addChild(dis1);

	animMoveCycleY(dis1);

	/*var dis2 = library.getSprite("fon_din2");
	dis2.x = 240;
	dis2.y = 160;
	dis2.params = {end: -120, time:200};
	stage.addChild(dis2);

	animMoveCycleY(dis2);*/

    var logo = library.getSprite("logo");
	logo.x = 240;
	logo.y = 35;
   // back.static = true;
    stage.addChild(logo);

    var new_game = library.getSprite("new_game_btn");
    new_game.x = 373;
    new_game.y = 100;
	new_game.static = true;
    new_game.onclick = function(e)
	{
		createPopup("clear_scores");
		return false;
    };
	stage.addChild(new_game);

 	var new_game = library.getSprite("pengui_block");
    new_game.x = 130;
    new_game.y = 180;
	new_game.static = true;
	stage.addChild(new_game);

	var continue_btn = library.getSprite("continue_btn");
	continue_btn.x = 373;
	continue_btn.y = 155;
	continue_btn.static = true;
	continue_btn.onclick = function()
	{
		var load_level = 0;

		for(var i=0; i<CONST_LEVELS.length+1; i++)
		{
			var test = parseInt(getLevelsScores(i));
			if(!test)
			{
				load_level = i;
				break;
			}
		}

		if(load_level > CONST_LEVELS.length-1)
		{
			load_level = 19;
		}
		gameState = STATE_GAME;
		createScene(load_level);

		return false;
	}
    stage.addChild(continue_btn);


	var more_games = library.getSprite("more_games");
	more_games.x = 373;
	more_games.y = 205;
	more_games.onclick = showMoreGames;
	stage.addChild(more_games);

	/*var ach_icon = library.getSprite("ach_icon");
	ach_icon.x = 140;
	ach_icon.y = 210;
	stage.addChild(ach_icon);*/

	var combo_icon = library.getSprite("combo_game");
	combo_icon.x = 373;
	combo_icon.y = 265;
	combo_icon.static = true;
	combo_icon.onclick = function()
	{
		gameState = STATE_COMBO;
		createScene();
		return false;
	}
	stage.addChild(combo_icon);

	buildBackground();
}

function showMoreGames()
{
	window.open(ExternalAPI.getMoreGamesURL(), "_blank");
}
function checkLoose()
{
	for(var y=0; y<spritesArr.length; y++)
	{
		for(var x=0; x<spritesArr[y].length; x++)
		{
			if(spritesArr[y][x].y <= CONST_LOOSE_Y && spritesArr[y][x].bitmap != null)
			{
				createPopup("lost");
			}
		}
	}
}
/*Level scopes*/
function getLevelsScores(level_num)
{
	var s = Utils.getCookie("level_"+level_num);
    return s;
}

function saveLevelsScores(level_num, scope)
{
    var test_scope = getLevelsScores(level_num);
    if(test_scope > scope)
	{
        return;
    }
	else
	{
        Utils.setCookie("level_"+level_num, scope);
        //submitScores();
    }
}

function getTotalLevelsScores()
{
	var sum = 0;
	for(var i=0; i<levels.length; i++)
	{
		if(getLevelsScores(i)) sum += parseInt(getLevelsScores(i));
	}
	return sum;
}
/*End level scopes*/

function scoreText(score, x, y)
{
	if(x > 290) x = 290;
	if(x < 0) x = 35;
	if(y > 370) y = 370;
	if(y < 0) y = 50;
	
	var text = new Text(library.getAsset("font1", true).bitmap, 10, 12);
	text.x = x; text.y = y;
	text.write(score);

	var tw = stage.createTween(text, "y", y, y-30, 14);
	tw.onchange = moveText;
	tw.onfinish = destroyText;
	tw.play();
}

function moveText(e)
{
	e.target.obj.write(e.target.obj.text);
}

function destroyText(e)
{
	e.target.obj.write("");
}

function Text(font, width, height)
{
	this.ALIGN_LEFT = 0;
	this.ALIGN_RIGHT = 1;
	this.ALIGN_CENTER = 2;
	
	this.font = font;
	this.x = 0;
	this.y = 0;
	this.width = width;
	this.height = height;
	this.align = this.ALIGN_LEFT;
	this.rotation = 0;
	this.charSpacing = 0;
	this.static = false;
	
	this.charMap = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '/', '+'];
	
	this.sprites = [];
	
	this.text = "";
	
	this.manageSprites = function(text)
	{
		var i, char;
		var len = text.length;
		var sp_len = this.sprites.length;
		if(sp_len < len)
		{
			for(i=0; i<len-sp_len; i++)
			{
				char = new Sprite(this.font, this.width, this.height, this.charMap.length);
				this.sprites.push(char);
				stage.addChild(char);
			}
		}
		
		if(sp_len > len)
		{
			for(i=0; i<sp_len-len; i++) stage.removeChild(this.sprites[i]);
			this.sprites.splice(0, sp_len-len);
		}
	}
	
	this.write = function(text)
	{
		var curX, curY, p, p2, n;
		
		text = text + "";
		
		this.text = text;
		
		this.manageSprites(text);

		curX = this.x;
		curY = this.y;
		if(this.align == this.ALIGN_CENTER) curX = this.x - (text.length-1)/2*(this.width+this.charSpacing);
		if(this.align == this.ALIGN_RIGHT) curX = this.x - (text.length-1)*(this.width+this.charSpacing);

		p = new Vector(curX-this.x, 0);
		p.rotate(-this.rotation);
		curX = p.x + this.x;
		curY = p.y + this.y;
		
		p = new Vector(0, 0);
		for(var i=0; i<text.length; i++)
		{
			this.sprites[i].visible = true;
			n = this.charMap.indexOf(text.substr(i, 1));
			if(n < 0) this.sprites[i].visible = false;
			else
			{
				this.sprites[i].gotoAndStop(n);
				p2 = p.clone();
				p2.rotate(-this.rotation);
				this.sprites[i].x = p2.x + curX;
				this.sprites[i].y = p2.y + curY;
				this.sprites[i].rotation = this.rotation;
				this.sprites[i].static = this.static;
				p.x += this.width+this.charSpacing;
			}
		}
	}
}