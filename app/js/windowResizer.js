// JavaScript Document


$(document).ready(function(e) {
	var mainwrap = $(window);
	var contentwrap = $('.wrapper'); //item to be scaled
	var contH = contentwrap.innerHeight();
	var contW = contentwrap.innerWidth(); //init these from the css...
	var displayRatio = contW/contH;
	//$("body").css('height', '100vh');
	console.log($("body").css('height'));
	
	function iOSversion() {
	  if (/iP(hone|od|ad)/.test(navigator.platform)) {
	    // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
	    var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
	    return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
	  }
	}
	function checkios7(){
		var iosVer = iOSversion();
		if (iosVer < 8) {
			console.log('good ios')
			return true;
		}else{
			console.log('bad ios')
			return false;
		}
	}
	var badiosVer = checkios7(); // true < 7
	
	
    $( window ).resize(function() {
		doResizer();
	});
	doResizer = function(){
		
		contH = contentwrap.innerHeight();
		contW = contentwrap.innerWidth(); //init these from the css...
		displayRatio = contW/contH;
		
		var screenRatio = mainwrap.innerWidth() / mainwrap.innerHeight() ;
		
		if (badiosVer) {
		  $("body").css('height', mainwrap.innerHeight()); // ios 7 vh bug fix
		}	
		
		if (screenRatio >= displayRatio){
			
			var theRatio = mainwrap.innerHeight() / contH;
			if(mainwrap.innerWidth() < contW){
				var newOffset =  -(((contW) / 2) - (( mainwrap.innerWidth() ) / 2)) ; // centering
				TweenLite.set(contentwrap,{x:newOffset, y:0,  scale:theRatio  });
			}else{
				TweenLite.set(contentwrap,{x:0, y:0,scale:theRatio});
			}
		}else{
			
			var theRatio = mainwrap.innerWidth() / contW;
			if(mainwrap.innerWidth() < contW){
				var newOffset =  -(((contW) / 2) - (( mainwrap.innerWidth() ) / 2)) ; // centering
				TweenLite.set(contentwrap,{x:newOffset, y:0, scale:theRatio  });
			}else{
				TweenLite.set(contentwrap,{x:0, y:0,scale:theRatio});
			}
		}
		
	}
	doResizer();
	
});