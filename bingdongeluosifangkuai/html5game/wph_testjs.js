landscape_preferred=false;landscape=landscape_preferred;var rotategfx=new Image();rotategfx.src="flip.png";rotatewidth=960;rotateheight=640;var loadbar1=new Image();loadbar1.src="load.png";var barwidth=190;var barheight=280;loadcanvas=null;c_graphics=null;function init()
{loadcanvas=document.getElementById('loading_screen');if(loadcanvas!=null)
{c_graphics=loadcanvas.getContext("2d");loadcanvas.width=window.innerWidth;loadcanvas.height=window.innerHeight;c_width=loadcanvas.width;c_height=loadcanvas.height;}}
init();function ios_remove_addressbar()
{if((navigator.userAgent.indexOf("iPhone")!=-1)||(navigator.userAgent.indexOf("iPad")!=-1)||(navigator.userAgent.indexOf("iPod")!=-1))
{window.scrollTo(0,0);}
return 0;}
function RenderLoadingBar_Standard(_graphics,_width,_height,_total,_current,_loadingscreen){{if(loadcanvas==null){init();}
ios_remove_addressbar();var widthmult=c_width/_width;var heightmult=c_height/_height;var x=(_width- barwidth)/ 2;				// center the loading bar
{c_graphics.drawImage(loadbar1,0,0,w,barheight,x*widthmult,y*heightmult,w*widthmult,barheight*heightmult);}
if(landscape!=landscape_preferred)
{c_graphics.drawImage(rotategfx,0,0,rotatewidth,rotateheight,0,0,c_width,c_height);}}}
function doOnOrientationChange()
{init();if(landscape_preferred==true)
{switch(window.orientation)
{case 0:landscape=false;break;default:landscape=true;break;}}
else
{switch(window.orientation)
{case-90:case 90:landscape=true;break;default:landscape=false;break;}}}
window.addEventListener('orientationchange',doOnOrientationChange);window.addEventListener('resize',doOnOrientationChange);doOnOrientationChange();