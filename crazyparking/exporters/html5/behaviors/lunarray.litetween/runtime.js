// ECMAScript 5 strict mode
"use strict";
assert2(cr, "cr namespace not created");
assert2(cr.behaviors, "cr.behaviors not created");

function trim (str) {
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}
/////////////////////////////////////
// Behavior class
cr.behaviors.lunarray_LiteTween = function(runtime)
{
	this.runtime = runtime;
};

(function ()
{
	var behaviorProto = cr.behaviors.lunarray_LiteTween.prototype;
		
	/////////////////////////////////////
	// Behavior type class
	behaviorProto.Type = function(behavior, objtype)
	{
		this.behavior = behavior;
		this.objtype = objtype;
		this.runtime = behavior.runtime;
	};
	
	var behtypeProto = behaviorProto.Type.prototype;

	behtypeProto.onCreate = function()
	{
	};

	/////////////////////////////////////
	// Behavior instance class
	behaviorProto.Instance = function(type, inst)
	{
		this.type = type;
		this.behavior = type.behavior;
		this.inst = inst;				// associated object instance to modify
		this.runtime = type.runtime;
		this.i = 0;		// progress
	};
	
	var behinstProto = behaviorProto.Instance.prototype;
	
	behinstProto.onCreate = function()
	{
		// Load properties
    this.playmode = this.properties[0];
    this.active = (this.playmode == 1) || (this.playmode == 2) || (this.playmode == 4) || (this.playmode == 5);
		this.tweened = this.properties[1]; // 0=Position|1=Size|2=Width|3=Height|4=Angle|5=Opacity|6=Value only|7=Horizontal|8=Vertical
		this.easing = this.properties[2];
		this.target = this.properties[3];
		this.targetmode = this.properties[4];
    if (this.targetmode === 1) this.target = "relative("+this.target+")";
		this.duration = this.properties[5];
		this.enforce = (this.properties[6] === 1);
    this.value = 0;
    
    this.tween_list = {};
    this.addToTweenList("default", this.tweened, this.easing, "current", this.target, this.duration, this.enforce);

    if (this.properties[0] === 1) this.startTween(0)
    if (this.properties[0] === 2) this.startTween(2)
    if (this.properties[0] === 3) this.startTween(3)
	};

	behinstProto.parseCurrent = function(tweened, parseText)
  {
    if (parseText === undefined) parseText = "current";
    var parsed = trim(parseText);
    parseText = trim(parseText);
    var value = this.value;

    if (parseText === "current") {
      switch (tweened) {
        case 0: parsed = this.inst.x + "," + this.inst.y; break;
        case 1: parsed = this.inst.width + "," + this.inst.height; break;
        case 2: parsed = this.inst.width + "," + this.inst.height; break;
        case 3: parsed = this.inst.width + "," + this.inst.height; break;
        case 4: parsed = cr.to_degrees(this.inst.angle) + "," + cr.to_degrees(this.inst.angle); break;
        case 5: parsed = (this.inst.opacity*100) + "," + (this.inst.opacity*100); break;
        case 6: parsed = value + "," + value; break;
        case 7: parsed = this.inst.x + "," + this.inst.y; break;
        case 8: parsed = this.inst.x + "," + this.inst.y; break;
        default:  break;
      }
    }
    if (parseText.substring(0,8) === "relative") {
      var param1 = parseText.match(/\((.*?)\)/);
      if (param1) {
        var relativex = parseFloat(param1[1].split(",")[0]);
        var relativey = parseFloat(param1[1].split(",")[1]);
      }
      if (isNaN(relativex)) relativex = 0; 
      if (isNaN(relativey)) relativey = 0; 
      switch (tweened) {
        case 0: parsed = (this.inst.x+relativex) + "," + (this.inst.y+relativey); break;
        case 1: parsed = (this.inst.width+relativex) + "," + (this.inst.height+relativey); break;
        case 2: parsed = (this.inst.width+relativex) + "," + (this.inst.height+relativey); break;
        case 3: parsed = (this.inst.width+relativex) + "," + (this.inst.height+relativey); break;
        case 4: parsed = (cr.to_degrees(this.inst.angle)+relativex) + "," + (cr.to_degrees(this.inst.angle)+relativey); break;
        case 5: parsed = (this.inst.opacity*100+relativex) + "," + (this.inst.opacity*100+relativey); break;
        case 6: parsed = value+relativex + "," + value+relativex; break;
        case 7: parsed = (this.inst.x+relativex) + "," + (this.inst.y); break;
        case 8: parsed = (this.inst.x) + "," + (this.inst.y+relativex); break;
        default:  break;
      }
    }
    return parsed;
  };
  
	behinstProto.addToTweenList = function(tname, tweened, easing, init, targ, duration, enforce)
  {
    init = this.parseCurrent(tweened, init);
    targ = this.parseCurrent(tweened, targ);
    if (this.tween_list[tname] !== undefined) {
      delete this.tween_list[tname]
    } 
    this.tween_list[tname] = new TweenObject(tname, tweened, easing, init, targ, duration, enforce);
  };
	
  //initialize all needed parameter for tweening
	behinstProto.saveToJSON = function ()
	{
	};
	
	// called when loading the full state of the game
	behinstProto.loadFromJSON = function (o)
	{
	};

	behinstProto.setProgressTo = function (mark)
	{
    if (mark > 1.0) mark = 1.0;
    if (mark < 0.0) mark = 0.0;

    for (var i in this.tween_list) { 
      var inst = this.tween_list[i];
      inst.lastKnownValue = 0;
      inst.lastKnownValue2 = 0;
      inst.state = 3;
      inst.progress = mark * inst.duration;
      var factor = inst.OnTick(0);
      this.updateTween(inst, factor);
    }
  }

	behinstProto.startTween = function (startMode)
	{
    for (var i in this.tween_list) {
      var inst = this.tween_list[i];
      if (startMode === 0) {
        inst.progress = 0.000001;
        inst.lastKnownValue = 0;
        inst.lastKnownValue2 = 0;
        inst.onStart = true;
        inst.state = 1;
      }
      if (startMode === 1) {
        inst.state = 1;
      }
      if (startMode === 2) {
        inst.progress = 0.000001;
        inst.lastKnownValue = 0;
        inst.lastKnownValue2 = 0;
        inst.onStart = true;
        inst.state = 4;
      }
      if (startMode === 3) {
        inst.progress = 0.000001;
        inst.lastKnownValue = 0;
        inst.lastKnownValue2 = 0;
        inst.onStart = true;
        inst.state = 5;
      }
    }
  }

	behinstProto.stopTween = function (stopMode)
	{
    for (var i in this.tween_list) {
      var inst = this.tween_list[i];
      if (stopMode === 1) inst.progress = 0.0; 
      if (stopMode === 2) inst.progress = inst.duration;
      inst.state = 3;
      var factor = inst.OnTick(0);
      this.updateTween(inst, factor);
    }
  }

	behinstProto.reverseTween = function(reverseMode)
	{
    for (var i in this.tween_list) {
      var inst = this.tween_list[i];
      if (reverseMode === 1) {
        inst.progress = inst.duration;
        inst.lastKnownValue = 0;
        inst.lastKnownValue2 = 0;
        inst.onReverseStart = true;
      } 
      inst.state = 2;
    }
  }
	
	behinstProto.updateTween = function (inst, factor)
	{
    if (inst.tweened === 0) {
      //if tweening position
      if (inst.enforce) {
        //enforce new coordinate
	      this.inst.x = inst.initialparam1 + (inst.targetparam1 - inst.initialparam1) * factor;
        this.inst.y = inst.initialparam2 + (inst.targetparam2 - inst.initialparam2) * factor;
      } else {
        //compromise coordinate change
        this.inst.x += ((inst.targetparam1 - inst.initialparam1) * factor) - inst.lastKnownValue;
        this.inst.y += ((inst.targetparam2 - inst.initialparam2) * factor) - inst.lastKnownValue2;
        inst.lastKnownValue = ((inst.targetparam1 - inst.initialparam1) * factor); 
        inst.lastKnownValue2 = ((inst.targetparam2 - inst.initialparam2) * factor);
      }
    } else if (inst.tweened === 1) {
      //if tweening size
      if (inst.enforce) {
  			this.inst.width = inst.initialparam1 + (inst.targetparam1 - inst.initialparam1) * factor;
	   		this.inst.height = inst.initialparam2 + (inst.targetparam2 - inst.initialparam2) * factor;
      } else {
      	this.inst.width += ((inst.targetparam1 - inst.initialparam1) * factor) - inst.lastKnownValue;
      	this.inst.height += ((inst.targetparam2 - inst.initialparam2) * factor) - inst.lastKnownValue2;
        inst.lastKnownValue = ((inst.targetparam1 - inst.initialparam1) * factor); 
        inst.lastKnownValue2 = ((inst.targetparam2 - inst.initialparam2) * factor); 
      }
    } else if (inst.tweened === 2) {
      //if tweening size width only
      if (inst.enforce) {
      	this.inst.width = inst.initialparam1 + ((inst.targetparam1 - inst.initialparam1) * factor);
      } else {
      	this.inst.width += ((inst.targetparam1 - inst.initialparam1) * factor) - inst.lastKnownValue;
        inst.lastKnownValue = ((inst.targetparam1 - inst.initialparam1) * factor); 
      }
    } else if (inst.tweened === 3) {
      //if tweening size height only
      if (inst.enforce) {
      	this.inst.height = inst.initialparam2 + ((inst.targetparam2 - inst.initialparam2) * factor);
      } else {
      	this.inst.height += ((inst.targetparam2 - inst.initialparam2) * factor) - inst.lastKnownValue2;
        inst.lastKnownValue2 = ((inst.targetparam2 - inst.initialparam2) * factor); 
      }
    } else if (inst.tweened === 4) {
      //if tweening angle
      if (inst.enforce) {
  		  var tangle = inst.initialparam1 + (inst.targetparam1 - inst.initialparam1) * factor;
  		  this.inst.angle = cr.clamp_angle(cr.to_radians(tangle));
      } else {
  		  var tangle = ((inst.targetparam1 - inst.initialparam1) * factor) - inst.lastKnownValue;
  		  this.inst.angle = cr.clamp_angle(this.inst.angle + cr.to_radians(tangle));
        inst.lastKnownValue = (inst.targetparam1 - inst.initialparam1) * factor; 
      }
    } else if (inst.tweened === 5) {
      //if tweening opacity
      if (inst.enforce) {
  		  this.inst.opacity = (inst.initialparam1 + (inst.targetparam1 - inst.initialparam1) * factor) / 100;
      } else {
  		  this.inst.opacity += (((inst.targetparam1 - inst.initialparam1) * factor) - inst.lastKnownValue) / 100;
        inst.lastKnownValue = ((inst.targetparam1 - inst.initialparam1) * factor);
      }
    } else if (inst.tweened === 6) {
      //if tweening value
      if (inst.enforce) {
  		  this.value = (inst.initialparam1 + (inst.targetparam1 - inst.initialparam1) * factor);
      } else {
  		  this.value += (((inst.targetparam1 - inst.initialparam1) * factor) - inst.lastKnownValue);
        inst.lastKnownValue = ((inst.targetparam1 - inst.initialparam1) * factor);
      }
    } else if (inst.tweened === 7) {
      //if tweening position X only
      if (inst.enforce) {
        //enforce new coordinate
	      this.inst.x = inst.initialparam1 + (inst.targetparam1 - inst.initialparam1) * factor;
      } else {
        //compromise coordinate change
        this.inst.x += ((inst.targetparam1 - inst.initialparam1) * factor) - inst.lastKnownValue;
        inst.lastKnownValue = ((inst.targetparam1 - inst.initialparam1) * factor); 
      }
    } else if (inst.tweened === 8) {
      //if tweening position Y only
      if (inst.enforce) {
        //enforce new coordinate
        this.inst.y = inst.initialparam2 + (inst.targetparam2 - inst.initialparam2) * factor;
      } else {
        //compromise coordinate change
        this.inst.y += ((inst.targetparam2 - inst.initialparam2) * factor) - inst.lastKnownValue2;
        inst.lastKnownValue2 = ((inst.targetparam2 - inst.initialparam2) * factor);
      }
    }
    this.inst.set_bbox_changed();
  }
  
	behinstProto.tick = function ()
	{
		var dt = this.runtime.getDt(this.inst);
    
    var inst = this.tween_list["default"];

    if (inst.state !== 0) {
      if (inst.onStart) {
  			this.runtime.trigger(cr.behaviors.lunarray_LiteTween.prototype.cnds.OnStart, this.inst);
        inst.onStart = false;
      }
  
      if (inst.onReverseStart) {
  		  this.runtime.trigger(cr.behaviors.lunarray_LiteTween.prototype.cnds.OnReverseStart, this.inst);
        inst.onReverseStart = false;
      }

      this.active = (inst.state == 1) || (inst.state == 2) || (inst.state == 4) || (inst.state == 5);
      var factor = inst.OnTick(dt);
      this.updateTween(inst, factor);

      if (inst.onEnd) {
  		  this.runtime.trigger(cr.behaviors.lunarray_LiteTween.prototype.cnds.OnEnd, this.inst);
        inst.onEnd = false;
      }
  
      if (inst.onReverseEnd) {
  		  this.runtime.trigger(cr.behaviors.lunarray_LiteTween.prototype.cnds.OnReverseEnd, this.inst);
        inst.onReverseEnd = false;
      }
    }
	};

	//////////////////////////////////////
	// Conditions
	behaviorProto.cnds = {};
	var cnds = behaviorProto.cnds;
	
	cnds.IsActive = function ()
	{
		return (this.tween_list["default"].state !== 0);
	};

	cnds.CompareProgress = function (cmp, v)
	{
    var inst = this.tween_list["default"];
		return cr.do_cmp((inst.progress / inst.duration), cmp, v);
	};

	cnds.OnStart = function ()
	{
    if (this.tween_list["default"] === undefined) 
      return false;

    return this.tween_list["default"].onStart;    
	};

	cnds.OnReverseStart = function ()
	{
    if (this.tween_list["default"] === undefined) 
      return false;

    return this.tween_list["default"].onReverseStart;    
	};

  cnds.OnEnd = function ()
	{
    if (this.tween_list["default"] === undefined) 
      return false;
      
    return this.tween_list["default"].onEnd;    
	};

  cnds.OnReverseEnd = function ()
	{
    if (this.tween_list["default"] === undefined) 
      return false;

    return this.tween_list["default"].onReverseEnd;    
	};
  //////////////////////////////////////
	// Actions
	behaviorProto.acts = {};
	var acts = behaviorProto.acts;
	
	acts.Start = function (startmode)
	{
    this.startTween(startmode);
	};

	acts.Stop = function (stopmode)
	{
    this.stopTween(stopmode);
	};

	acts.Reverse = function (revMode)
	{
    this.reverseTween(revMode);
	};

 	acts.ProgressTo = function (progress)
	{
    this.setProgressTo(progress);
	};
	
	acts.SetDuration = function (x)
	{
    if (isNaN(x)) return;
    if (x < 0) return;
    if (this.tween_list["default"] === undefined) return;
		this.tween_list["default"].duration = x;
	};

	acts.SetEnforce = function (x)
	{
    if (this.tween_list["default"] === undefined) return;
		this.tween_list["default"].enforce = (x===1);
	};

	acts.SetInitial = function (x)
	{
    if (this.tween_list["default"] === undefined) return;
    var init = this.parseCurrent(this.tween_list["default"].tweened, x);
		this.tween_list["default"].setInitial(init);
	};

	acts.SetTarget = function (targettype, absrel, x)
	{
    if (this.tween_list["default"] === undefined) return;
    if (isNaN(x)) return;
    var parsed = x + "";
    var inst = this.tween_list["default"];
    this.targetmode = absrel;
    if (absrel === 1) {
      //relative
      switch (targettype) {
        case 0: parsed = (this.inst.x + x) + "," + inst.targetparam2; break;
        case 1: parsed = inst.targetparam1 + "," + (this.inst.y + x); break;
        case 2: parsed = "" + cr.to_degrees(this.inst.angle + cr.to_radians(x)); break; //angle
        case 3: parsed = "" + (this.inst.opacity*100) + x; break; //opacity
        case 4: parsed = (this.inst.width + x) + "," + inst.targetparam2; break; //width
        case 5: parsed = inst.targetparam1 + "," + (this.inst.height + x); break; //height
        case 6: parsed = x + "," + x; break; //value
        default:  break;
      }
    } else {
      switch (targettype) {
        case 0: parsed = x + "," + inst.targetparam2; break;
        case 1: parsed = inst.targetparam1 + "," + x; break;
        case 2: parsed = x+","+x; break; //angle
        case 3: parsed = x+","+x; break; //opacity
        case 4: parsed = x + "," + inst.targetparam2; break; //width
        case 5: parsed = inst.targetparam1 + "," + x; break; //height
        case 6: parsed = x + "," + x; break; //value
        default:  break;
      }
    }
    var init = this.parseCurrent(this.tween_list["default"].tweened, "current");
    var targ = this.parseCurrent(this.tween_list["default"].tweened, parsed);
 		inst.setInitial(init);
 		inst.setTarget(targ);
	};              

	acts.SetTweenedProperty = function (x)
	{
    if (this.tween_list["default"] === undefined) return;
		this.tween_list["default"].tweened = x;
	};

	acts.SetEasing = function (x)
	{
    if (this.tween_list["default"] === undefined) return;
		this.tween_list["default"].easefunc = x;
	};

 	acts.SetValue = function (x)
	{
    var inst = this.tween_list["default"];
		this.value = x;
    if (inst.tweened === 6)
      inst.setInitial( this.parseCurrent(inst.tweened, "current") );
	};

	acts.SetParameter = function (tweened, easefunction, target, duration, enforce)
	{
    if (this.tween_list["default"] === undefined) {
      this.addToTweenList("default", tweened, easefunction, initial, target, duration, enforce);
    } else {
      var inst = this.tween_list["default"];
      inst.tweened = tweened; 
  		inst.easefunc = easefunction;
      inst.setInitial( this.parseCurrent(tweened, "current") );
      inst.setTarget( this.parseCurrent(tweened, target) );
      inst.duration = duration; 
      inst.enforce = (enforce === 1); 
    }
	};
	//////////////////////////////////////
	// Expressions
	behaviorProto.exps = {};
	var exps = behaviorProto.exps;
	exps.Progress = function (ret)
	{
    var progress = this.tween_list["default"].progress/this.tween_list["default"].duration; 
    ret.set_float(progress);
	};

	exps.Duration = function (ret)
	{
    ret.set_float(this.tween_list["default"].duration);
	};

	exps.Target = function (ret)
	{
    var inst = this.tween_list["default"];
    var parsed = "N/A"; 
    switch (inst.tweened) {
      case 0: parsed = inst.targetparam1; break;
      case 1: parsed = inst.targetparam2; break;
      case 2: parsed = inst.targetparam1; break;
      case 3: parsed = inst.targetparam1; break;
      case 4: parsed = inst.targetparam1; break;
      case 5: parsed = inst.targetparam2; break;
      case 6: parsed = inst.targetparam1; break;
      default:  break;
    }
    ret.set_float(parsed);
	};

	exps.Value = function (ret)
	{
    var tval = this.value; 
    ret.set_float(tval);
	};
  
}());
