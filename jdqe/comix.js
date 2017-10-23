var comix_interval;
var comix_counter = 0;

var START_COMIX_IMAGES =
[
	{name:'scr1', x:240, y:160, zindex:100, tween_pos:{x:240, y:-50}},
	{name:'scr2', x:260, y:140, zindex:200},
	{name:'scr3', x:240, y:160, zindex:100, destroy:true},
	{name:'scr4', x:240, y:100, zindex:200, destroy:true, tween_pos:{x:240, y:-50}},
	{name:'scr41', x:240, y:100, zindex:200, destroy:true},
	{name:'scr42', x:240, y:100, zindex:400, destroy:true},
	{name:'scr5', x:255, y:170, zindex:300},
	{name:'end_text', x:240, y:160, zindex:200, destroy:true}
];

var COMIX_PLAY;

function startComix()
{
	COMIX_PLAY = null;
	comix_counter = 0;
	COMIX_PLAY = START_COMIX_IMAGES;
	comix_interval = setInterval('createNextComix()', 3000);

	var back = library.getSprite("main_menu_back");
    back.x = 240;
    back.y = 160;
	back.static = true;
    stage.addChild(back);

	var next = library.getSprite("skip");
	next.x = 440;
	next.y = 20;
	next.onclick = function()
	{
		clearInterval(comix_interval);
		gameState = STATE_MENU;
		createScene();
		return false;
	}
	stage.addChild(next);

	createNextComix();
}

function createNextComix()
{
	if(comix_counter >= COMIX_PLAY.length - 1)
	{
		clearInterval(comix_interval);
		gameState = STATE_MENU;
		createScene();
		return;
	}

	var elem = COMIX_PLAY[comix_counter];

	if(elem.destroy)
	{
		for(var i=0; i<stage.objects.length; i++)
		{
			if(stage.objects[i].comix)stage.objects[i].destroy = true;
		}
	}
	else if(elem.name == "head2")
	{
		for(var i=0; i<stage.objects.length; i++)
		{
			if(stage.objects[i].comix2)stage.objects[i].destroy = true;
		}
	}

	var spr = library.getSprite(elem.name);
	spr.opacity = 0.1;
	spr.setZIndex(elem.zindex);
	stage.addChild(spr);

	var tween2 = spr.addTween("opacity", 1, 20, Easing.linear.out, null, null);
	tween2.play();

	var tween;

	if(elem.tween_pos)
	{
		if(elem.x == elem.tween_pos.x && elem.y != elem.tween_pos.y)
		{
			spr.x = elem.x;
			spr.y = elem.tween_pos.y;
			tween = spr.addTween("y", elem.y, 10, Easing.linear.out, null, null);
		}
		else if(elem.y == elem.tween_pos.y && elem.x != elem.tween_pos.x)
		{
			spr.y = elem.y;
			spr.x = elem.tween_pos.x;
			tween = spr.addTween("x", elem.x, 20, Easing.linear.out, null, null);
		}

		if(tween)tween.play();
	}
	else
	{
		spr.x = elem.x;
		spr.y = elem.y;
	}

	if(elem.name == "head1")spr.comix2 = true;
	spr.comix = true;

	comix_counter++;
}

