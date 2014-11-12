// JavaScript Document


$(document).ready(function(e) {
	var mainwrap = $(window);
	var contentwrap = $('.wrapper'); //item to be scaled
	var contH = contentwrap.innerHeight();
	var contW = contentwrap.innerWidth(); //init these from the css...
	var displayRatio = contW/contH;
	
    $( window ).resize(function() {
		doResizer();
	});
	doResizer = function(){
		
		contH = contentwrap.innerHeight();
		contW = contentwrap.innerWidth(); //init these from the css...
		displayRatio = contW/contH;
		
		var screenRatio = mainwrap.innerWidth() / mainwrap.innerHeight() ;
		
		if (screenRatio >= displayRatio){
			
			var theRatio = mainwrap.innerHeight() / contH;
			if(mainwrap.innerWidth() < contW){
				var newOffset =  -(((contW) / 2) - (( mainwrap.innerWidth() ) / 2)) ; // centering
				TweenLite.set(contentwrap,{x:newOffset, y:0, force3D:true, scale:theRatio  });
			}else{
				TweenLite.set(contentwrap,{x:0, y:0,scale:theRatio,force3D:true});
			}
		}else{
			
			var theRatio = mainwrap.innerWidth() / contW;
			if(mainwrap.innerWidth() < contW){
				var newOffset =  -(((contW) / 2) - (( mainwrap.innerWidth() ) / 2)) ; // centering
				TweenLite.set(contentwrap,{x:newOffset, y:0, force3D:true, scale:theRatio  });
			}else{
				TweenLite.set(contentwrap,{x:0, y:0,scale:theRatio,force3D:true});
			}
		}
	}
	doResizer();
	
});