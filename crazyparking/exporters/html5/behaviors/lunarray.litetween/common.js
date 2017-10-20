var easeOutBounceArray = [];
var easeInElasticArray = [];
var easeOutElasticArray = [];
var easeInOutElasticArray = [];
var easeInCircle = [];
var easeOutCircle = [];
var easeInOutCircle = [];
var easeOutBack = [];
var easeInOutBack = [];
var litetween_precision = 10000;
var updateLimit = 0; //0.0165;

function easeOutBounce(t,b,c,d) {
	if ((t/=d) < (1/2.75)) {
		return c*(7.5625*t*t) + b;
	} else if (t < (2/2.75)) {
		return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
	} else if (t < (2.5/2.75)) {
		return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
	} else {
		return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
	}		
}

function integerize(t, d)
{
  return Math.round(t/d*litetween_precision);
}

function easeFunc(easing, t, b, c, d)
{
  switch (easing) {
	case 0:		// linear
		return c*t/d + b;
	case 1:		// easeInQuad
		return c*(t/=d)*t + b;
	case 2:		// easeOutQuad
		return -c *(t/=d)*(t-2) + b;
	case 3:		// easeInOutQuad
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	case 4:		// easeInCubic
		return c*(t/=d)*t*t + b;
	case 5:		// easeOutCubic
		return c*((t=t/d-1)*t*t + 1) + b;
	case 6:		// easeInOutCubic
		if ((t/=d/2) < 1) 
			return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	case 7:		// easeInQuart
		return c*(t/=d)*t*t*t + b;
	case 8:		// easeOutQuart
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	case 9:		// easeInOutQuart
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	case 10:		// easeInQuint
		return c*(t/=d)*t*t*t*t + b;
	case 11:		// easeOutQuint
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	case 12:		// easeInOutQuint
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	case 13:		// easeInCircle
		return easeInCircle[integerize(t,d)];
	case 14:		// easeOutCircle
		return easeOutCircle[integerize(t,d)];;
	case 15:		// easeInOutCircle
		return easeInOutCircle[integerize(t,d)];;
	case 16:		// easeInBack
		var s = 0;
		if (s==0) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	case 17:		// easeOutBack
		return easeOutBack[integerize(t,d)];
	case 18:		// easeInOutBack
		return easeInOutBack[integerize(t,d)];
	case 19:	//easeInElastic
		return easeInElasticArray[integerize(t, d)];
	case 20:	//easeOutElastic
    return easeOutElasticArray[integerize(t,d)];
	case 21:	//easeInOutElastic
    return easeInOutElasticArray[integerize(t,d)];
	case 22:	//easeInBounce
		return c - easeOutBounceArray[integerize(d-t, d)] + b;
	case 23:	//easeOutBounce
		return easeOutBounceArray[integerize(t, d)];
		//return easeOutBounce(t,b,c,d);
	case 24:	//easeInOutBounce
		if (t < d/2) 
      return (c - easeOutBounceArray[integerize(d-(t*2), d)] + b) * 0.5 +b;
		else 
      return easeOutBounceArray[integerize(t*2-d, d)] * .5 + c*.5 + b;
	case 25:	//easeInSmoothstep
		var mt = (t/d) / 2;
		return (2*(mt * mt * (3 - 2*mt)));
	case 26:	//easeOutSmoothstep
		var mt = ((t/d) + 1) / 2;
		return ((2*(mt * mt * (3 - 2*mt))) - 1);
	case 27:	//easeInOutSmoothstep
		var mt = (t / d);
		return (mt * mt * (3 - 2*mt));
	};
	
	// should not reach here
	return 0;
};

(function preCalculateArray() {
  var d = 1.0;
  var b = 0.0;
  var c = 1.0;
  var result = 0.0;
  var a = 0;
  var p = 0;
  var t = 0;
  var s = 0;

  for (var ti = 0; ti <= litetween_precision; ti++) {
    t = ti/litetween_precision; 
  	if ((t/=d) < (1/2.75)) {
  		result = c*(7.5625*t*t) + b;
  	} else if (t < (2/2.75)) {
  		result = c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
  	} else if (t < (2.5/2.75)) {
  		result = c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
  	} else {
  		result = c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
  	}		
    easeOutBounceArray[ti] = easeOutBounce(ti/litetween_precision, b, c, d);

    t = ti/litetween_precision; a = 0; p = 0;
    if (t==0) result = b; if ((t/=d)==1) result = b+c; 
    if (p==0) p=d*.3;	if (a==0 || a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
		result = -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    easeInElasticArray[ti] = result;

    t = ti/litetween_precision; a = 0; p = 0;
		if (t==0) result= b;  if ((t/=d)==1) result= b+c;  if (p == 0) p=d*.3;
		if (a==0 || a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		result= (a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b);
    easeOutElasticArray[ti] = result;

    t = ti/litetween_precision; a = 0; p = 0;
		if (t==0) result = b; 
		if ((t/=d/2)==2) result = b+c;  
		if (p==0) p=d*(.3*1.5);
		if (a==0 || a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) 
      result = -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b
    else
		  result = a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    easeInOutElasticArray[ti] = result;
    
    t = ti/litetween_precision; easeInCircle[ti] = -(Math.sqrt(1-t*t) - 1);
    t = ti/litetween_precision; easeOutCircle[ti] = Math.sqrt(1 - ((t-1)*(t-1)));

    t = ti/litetween_precision; 
		if ((t/=d/2) < 1) result = -c/2 * (Math.sqrt(1 - t*t) - 1) + b
    else result = c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    easeInOutCircle[ti] = result;

    t = ti/litetween_precision; s = 0;
		if (s==0) s = 1.70158;
		result = c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    easeOutBack[ti] = result;

    t = ti/litetween_precision; s = 0; if (s==0) s = 1.70158;
		if ((t/=d/2) < 1) 
      result = c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b
    else
		  result = c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    easeInOutBack[ti] = result;
	}	
}())

var TweenObject = function() 
{
	var constructor = function (tname, tweened, easefunc, initial, target, duration, enforce) 
	{
		//0=Position|1=Size|2=Width|3=Height|4=Angle|5=Opacity|6=Value only
    //state -> 0=paused | 1=playing | 2=reversing | 3=seek only
    this.name = tname;
    this.value = 0; 
    this.setInitial(initial);
    this.setTarget(target);
    this.easefunc = easefunc;
    this.tweened = tweened;
    this.duration = duration;
    this.progress = 0;
    this.state = 0;
    this.onStart = false;
    this.onEnd = false;
    this.onReverseStart = false;
    this.onReverseEnd = false;
    this.lastKnownValue = 0; 
    this.lastKnownValue2 = 0;
    this.enforce = enforce; 
    this.pingpong = 1.0;
	}
	
	return constructor;
}();

(function () {
	TweenObject.prototype = {
	};

  TweenObject.prototype.setInitial = function (initial)
  {
    this.initialparam1 = parseFloat(initial.split(",")[0]); 
    this.initialparam2 = parseFloat(initial.split(",")[1]);
		this.lastKnownValue = 0;
		this.lastKnownValue2 = 0;
  } 
  
  TweenObject.prototype.setTarget = function (target)
  {
    this.targetparam1 = parseFloat(target.split(",")[0]);
    this.targetparam2 = parseFloat(target.split(",")[1]);
    if (isNaN(this.targetparam2)) this.targetparam2 = this.targetparam1;
  }

  TweenObject.prototype.OnTick = function(dt) 
  {
    //stopped
    if (this.state === 0) return -1.0;
     
    //if starting
    if (this.state === 1) 
      this.progress += dt;
    
    //if reversing
    if (this.state === 2) 
      this.progress -= dt;

    //seek
    if (this.state === 3) {
      this.state = 0;
    } 

    //ping pong
    if (this.state === 4) {
      this.progress += dt * this.pingpong;
    } 

    //loop
    if (this.state === 5) {
      this.progress += dt * this.pingpong;
    } 

    if (this.progress < 0) {
      //it has reached negative timeline due to reversing, pausing
      this.progress = 0;
      //if it's ping pong, don't stop
      if (this.state !== 4) {
        this.state = 0;
      } else {
        this.pingpong = 1;
      }
      this.onReverseEnd = true;
      return 0.0;
    } else if (this.progress > this.duration) {
      //it has reached more than duration, pausing
      this.progress = this.duration;
      if (this.state === 4) {
        this.pingpong = -1;
      } else if (this.state === 5) {
        this.progress = 0.0;
      } else {
        this.state = 0;
      }
      this.onEnd = true;
      return 1.0;
    } else {
      var factor = easeFunc(this.easefunc, this.progress, 0, 1, this.duration);
      return factor;
    }
  };  
}());
