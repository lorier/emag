//animation for pages


var tl =new TimelineLite ();
var machine1, machine2, machine3;	

function doAnimation(){
	//$(this.target).addClass('bounce');

}	 


function doPageAnimation(pageNumber){
	console.log('in doPagA ' + pageNumber);
	tl = new TimelineLite ();
	if(pageNumber==1){
		
		if(localStorage.playSound != "false"){	
		      tl.add (TweenLite.set(".page1 #pic1", {y:1000, x:800, autoAlpha:1, delay: 1}));	
		      tl.add (TweenLite.set(".page1 #pic2", {top:-800, left:800, autoAlpha:1}));	
			  tl.add (TweenLite.set(".page1 #pic3", {top:800, left:1200, autoAlpha:1}));	
			  tl.add (TweenLite.set(".page1 #pic4", {top:-100, left:1300, autoAlpha:1}));
			  tl.pause();//crazy sound alert thing
			  tl.to(".page1 .headline h2", 1, {autoAlpha:1, delay:.2})

			  .to(".page1 .headline h1", 1, {autoAlpha:1}, "-=.7")				
			  .to(".page1 #pic1", .7, {x:300, y:445, rotation:7, autoAlpha:1, ease:Circ.easeOut}, "-=.7")
			  .to(".page1 #pic3", 1, {left:500, top:390, rotation:-2, autoAlpha:1, ease:Power3.easeOut, delay:1, onStart:soundMachine, onStartParams:["engine"]},  "-=1")		
			  .to(".page1 #pic2", 1, {left:715, top:-10, rotation:-5, autoAlpha:1, ease:Power3.easeOut,delay:1}, "-=1")
			  .to(".page1 #pic4", 1, {left:655, top:170, rotation:3, autoAlpha:1, ease:Power3.easeOut, delay:2}, "-=1")
			  .fromTo(".page1 #mask", 1, {css:{width:0}}, {css:{width:800}, ease:Power1.easeOut}, "-=1")
			  .to(".page1 #swirl", 1, {autoAlpha:1}, "-=1")
			  .to(".page1 #logo", 1, {autoAlpha:1}, "-=.5");
		  }else{
		      tl.add (TweenLite.set(".page1 #pic1", {y:1000, x:800, autoAlpha:1, delay: 1}));	
		      tl.add (TweenLite.set(".page1 #pic2", {top:-800, left:800, autoAlpha:1}));	
			  tl.add (TweenLite.set(".page1 #pic3", {top:800, left:1200, autoAlpha:1}));	
			  tl.add (TweenLite.set(".page1 #pic4", {top:-100, left:1300, autoAlpha:1}));
			  tl.to(".page1 .headline h2", 1, {autoAlpha:1, delay:.2})

			  .to(".page1 .headline h1", 1, {autoAlpha:1}, "-=.7")				
			  .to(".page1 #pic1", .7, {x:300, y:445, rotation:7, autoAlpha:1, ease:Circ.easeOut}, "-=.7")
			  .to(".page1 #pic3", 1, {left:500, top:390, rotation:-2, autoAlpha:1, ease:Circ.easeOut},  "-=.7")		
			  .to(".page1 #pic2", 1, {left:715, top:-10, rotation:-5, autoAlpha:1, ease:Circ.easeOut}, "-=1")
			  .to(".page1 #pic4", 1, {left:655, top:170, rotation:3, autoAlpha:1, ease:Circ.easeOut}, "-=1")
			  .fromTo(".page1 #mask", 1, {css:{width:0}}, {css:{width:800}, ease:Power1.easeOut}, "-=1")
			  .to(".page1 #swirl", 1, {autoAlpha:1}, "-=1")
			  .to(".page1 #logo", 1, {autoAlpha:1}, "-=.5");
  	
		  }

		  console.log('RUN 01' );
	  }else if(pageNumber == 2){
		  
			TweenLite.set(".view-container .clickme", {scale:.01});
			TweenLite.set(".page2 #pic1", {y:1200, x:800, autoAlpha:1});	
			TweenLite.set(".page2 #pic2", {y:1200, x:800, autoAlpha:1});	
			TweenLite.set(".page2 #pic3", {y:1200, x:800, autoAlpha:1});
			TweenLite.set(".page2 #circle", {scale:.5});
			tl.pause();//crazy sound alert thing
			tl.to(".page2 .headline h1", 1, {autoAlpha:1, delay:1})
			  .to(".page2 .headline span.line1", 1, {autoAlpha:1,onStart:soundMachine, onStartParams:["birds2"]}, "-=.5")		
			  .to(".page2 #circle", .5, {autoAlpha:1,scale:1,ease:Power3.easeOut}, "-=.5")
			  .to(".page2 .headline span.line2", 1, {autoAlpha:1}, "+=.5")
			  .to(".page2 .headline span.line3", 1, {autoAlpha:1}, "-=.5")
			  .to(".page2 .headline span.line4", 1, {autoAlpha:1}, "-=.5")
			  .to(".page2 .headline span.line5", 1, {autoAlpha:1}, "-=.5")
			  .to(".page2 #pic1", 1, {x:170, y:445, rotation:-4, autoAlpha:1, ease:Power1.easeOut}, "-=2")
			  .to(".page2 #pic2", 1, {x:190, y:455, rotation:-1, autoAlpha:1, ease:Power3.easeOut}, "-=1.5")
			  .to(".page2 #pic3", 1, {x:390, y:455, rotation:7, autoAlpha:1, ease:Power3.easeOut},  "-=1")
//			  .to(".page2 #pic3", 1, {x:390, y:455, rotation:7, autoAlpha:1, ease:Power3.easeOut,onStart:doAnimation},  "-=1")
			.staggerTo(".view-container .clickme", 1, {scale:1, ease:Quad.easeOut}, 1)
			.staggerTo(".view-container .clickme", 1, {className:"+=bounce", ease:Quad.easeOut}, 1)
			
 
  	  	
	  }else if(pageNumber == 3){
	  	console.log('RUN 03');

	  			var tl = new TimelineLite ();			
	  			      tl.add (TweenLite.set(".page3 #bluebar", {y:0, x:800, autoAlpha:1}));	
	  				  tl.add (TweenLite.set(".page3 #arrow", {x:-80}));	
	  				  tl.pause();//crazy sound alert thing
	  				  tl.to(".page3 .headline h1", 1, {autoAlpha:1, delay:1})
	  				  .to(".page3 p", 1, {autoAlpha:1}, "-=.5")				
	  				  .to(".page3 h2", 1, {autoAlpha:1}, "-=.5")
	  				  .to(".page3 #bluebar", .7, {x:10, y:0, autoAlpha:1, ease:Back.easeOut}, "-=1.5")
	  				  .to(".page3 #arrow", .8, {autoAlpha:1, x:0, ease:Elastic.easeOut}, "-=.7");			
						
	  				// VIDEO BUTTON
	  				/*$('.page3 button').on('click', function () {	
	  				});*/
					

	  }else if(pageNumber == 4){
	  	
  			  tl.add (TweenLite.set(".view-container .clickme", {scale:.01}));
  			  tl.add (TweenLite.set(".page4 #vid-wrap", {y:0, x:-320, autoAlpha:1}));	
  			  tl.add (TweenLite.set(".page4 #arrow", {y:-20, x:0, opacity:0}));	
  			  tl.pause();//crazy sound alert thing
  			  tl.to(".page4 .headline h1", 1, {autoAlpha:1, delay:1})
  			    .to(".page4 .headline p", 1, {autoAlpha:1}, "-=.5")
  				.fromTo(".page4 #mask", 1, {css:{height:0}}, {css:{height:800}, ease:Power1.easeOut}, "-=1")
  				 .to(".page4 #class-list", 1, {autoAlpha:1}, "-=1")
			  
  			  .to(".page4 #vid-wrap", .7, {x:0, y:0, autoAlpha:1, ease:Power3.easeOut}, "-=.7")
  			  .to(".page4 #arrow", .7, {x:0, y:0, autoAlpha:1, ease:Elastic.easeOut}, "+=.7")
  			  .staggerTo(".view-container .clickme", 1, {scale:1, ease:Quad.easeOut}, 1)
			  .staggerTo(".view-container .clickme", 0, {className:'+=bounce'}, .5);

		
	  }else if(pageNumber == 5){  // SLOTS
  		
		var clickAnywhereToClose = false;
  		
  		var clickCount = 0;

  		$(".page5 #play-dot").click(function(){
  			TweenLite.set($(".page5 #play-dot"), {x:0, y:0, scale:.9});
  			TweenLite.to($(".page5 #play-dot"),.1, {x:0, y:0, scale:1,delay:.3});
  			doSlots();
  		});

		
  		function initSlots(){
  			machine1 = $('.page5 #machineFake1').slotMachine({
  				active:2,
  				delay: 400
  			});
  			machine2 = $('.page5 #machineFake2').slotMachine({
  				active:5,
  				delay: 400
  			});
  			machine3 = $('.page5 #machineFake3').slotMachine({
  				active:6,
  				delay: 400
  			});
  		}
  		function doSlots(){

  			soundMachine('slots');
			
  			if (clickCount ==0){
  				console.log('SLOTS: 1');

  				machine1.setRandomize(0);
  				machine2.setRandomize(1);
  				machine3.setRandomize(2);
  				machine1.shuffle(3);
  				machine2.shuffle(3.5);
  				machine3.shuffle(4);
  				clickCount += 1;
  				soundMachine('slots');
  			}else if (clickCount == 1){
  				console.log('SLOTS: 2');
  				machine1.setRandomize(3);
  				machine2.setRandomize(4);
  				machine3.setRandomize(5);
  				machine1.shuffle(3);
  				machine2.shuffle(3.5);
  				machine3.shuffle(4);
  				clickCount += 1;
  				soundMachine('slots');
  			}else if (clickCount == 2){
  				console.log('SLOTS: 3');
  				machine1.setRandomize(6);
  				machine2.setRandomize(7);
  				machine3.setRandomize(8);
  				machine1.shuffle(3);
  				machine2.shuffle(3.5);
  				machine3.shuffle(4);
  				clickCount += 1;
  				soundMachine('slots');
  			}else{
  				console.log('SLOTS: final');
  				machine1.setRandomize(9);
  				machine2.setRandomize(9);
  				machine3.setRandomize(9);
  				machine1.shuffle(3);
  				machine2.shuffle(3.5);
  				machine3.shuffle(4);
  				soundMachine('slots');
  			}
		
  			console.log('cc '+clickCount);
	
  			machine1.shuffle(2);
  			machine2.shuffle(3);
  			machine3.shuffle(4);
  		}
		
		
  		machine1 = '';
  		machine2 = '';
  		machine3 = '';
		
  			tl.set(".view-container .clickme", {scale:.01});
  			tl.set(".page5 #play-dot", {top:-100});
  			tl.set(".page5 .slotWrapper .machineBorder", {opacity:0});
  			tl.pause();//crazy sound alert thing
  			  tl.to(".page5 .headline h1", 1, {autoAlpha:1, delay:1,onComplete:initSlots})
  			    .to(".page5 .headline h2", 1, {autoAlpha:1}, "-=.5")			    
  				.to(".page5 .headline p", 1, {autoAlpha:1}, "-=1")
  			.to(".page5 .slotWrapper .machineBorder", 1, {opacity:1 ,ease:Quad.easeOut,onComplete:doSlots})
			.to(".page5 #play-dot", 1, {autoAlpha:1, top: 0, onComplete:doAnimation,ease:Elastic.easeOut}, "-=.2")
			  .staggerTo(".view-container .clickme", 1, {scale:1, ease:Quad.easeOut}, 1)
		  .staggerTo(".view-container .clickme", 0, {className:'+=bounce'}, .5);

		
	  }else if(pageNumber == 6){

  			  tl.add (TweenLite.set(".page6 #vid-wrap", {y:0, x:-320, autoAlpha:1}));
  			   tl.add (TweenLite.set(".page6 #arrow", {y:-50, x:0, opacity:0}));
  	 		  tl.pause();//crazy sound alert thing
  			  tl.to(".page6 .headline h1", 1, {autoAlpha:1, delay:1})
  			    .to(".page6 .headline p", 1, {autoAlpha:1}, "-=.5")
  			.to(".page6 #vid-wrap", .7, {x:0, y:0, autoAlpha:1, ease:Power3.easeOut}, "-=.5")
  			  .to(".page6 #arrow", .7, {x:0, y:0, autoAlpha:1, ease:Elastic.easeOut}, "+=.7");
		
	  }else if(pageNumber == 7){
				
		      tl.add (TweenLite.set(".page7 #pic1", {y:0, x:-400, autoAlpha:0}));	
		      tl.add (TweenLite.set(".page7 #pic2", {y:0, x:-800, autoAlpha:0}));	
			  tl.add (TweenLite.set(".page7 #pic3", {y:0, x:-800, autoAlpha:0}));	
			  tl.pause();//crazy sound alert thing
 			  
			  tl.to(".page7 .headline h1", 1, {autoAlpha:1, delay:1})
			  .to(".page7 .headline h2", 1, {autoAlpha:1}, "-=.7")				
			  .to(".page7 #pic1", .7, {x:-160, y:400, rotation:-4, autoAlpha:1, ease:Power3.easeOut}, "-=.7")
			  .to(".page7 #splat1", 1, {autoAlpha:1}, "-=.7")	
	          .to(".page7 #pic2", 1, {x:50, y:450, rotation:6, delay:1, autoAlpha:1, ease:Power3.easeOut}, "-=1.7")
			  .to(".page7 #splat2", 1, {autoAlpha:1}, "-=.7")	
			  .to(".page7 #pic3", 1, {x:240, y:440, rotation:-2, delay:1, autoAlpha:1, ease:Power3.easeOut}, "-=1.7")		
			  .to(".page7 #splat3", 1, {autoAlpha:1}, "-=.7")
			  .to(".page7 #vid-wrap", 1, {autoAlpha:1}, "-=.5")	
			  .to(".page7 #splat4", 1, {autoAlpha:1}, "-=.7");			 	

	  }else if (pageNumber == 8){
	  	  	tl.set(".view-container .clickme", {scale:.01});
  		      tl.add (TweenLite.set(".page8 #pic1", {y:1000, x:800, autoAlpha:1, delay: 1}));
  			  tl.add (TweenLite.set(".page8 #pic2", {y:1000, x:800, autoAlpha:1}));	
  		      tl.add (TweenLite.set(".page8 #bluebar", {y:0, x:350, autoAlpha:1}));	
  			  tl.add (TweenLite.set(".page8 #arrowtext", {y:-30, x:0, opacity:0}));
  			   tl.add (TweenLite.set(".page8 #arrow", {y:-30, x:0, opacity:0}));	
  	 		  tl.pause();//crazy sound alert thing
  			  tl.to(".page8 .headline h1", 1, {autoAlpha:1, delay:1})
  			    .to(".page8 .headline h2", 1, {autoAlpha:1}, "-=.1")
  			    .to(".page8 #bluebar", .7, {x:0, y:0, autoAlpha:1, ease:Back.easeOut}, "-=.3")
  			    .to(".page8 #pic2", 1, {x:215, y:200, rotation:5, delay:1, autoAlpha:1, ease:Power3.easeOut}, "-=1")
  			    .to(".page8 #pic1", .7, {x:215, y:475, rotation:-5, autoAlpha:1, ease:Power3.easeOut}, "-=.7")
  			   .to(".page8 #arrowtext", 2, {x:0, y:0, autoAlpha:1, ease:Elastic.easeOut}, "+=1")
  			    .to(".page8 #arrow", 2, {x:0, y:0, autoAlpha:1, ease:Elastic.easeOut}, "-=2")
    			  .staggerTo(".view-container .clickme", 1, {scale:1, ease:Quad.easeOut}, 1)
  			  .staggerTo(".view-container .clickme", 0, {className:'+=bounce'}, .5);
  				//.fromTo(".page8 #mask", 2, {css:{height:0}}, {css:{height:200}, ease:Power1.easeOut})
  				//.to(".page8 #arrow", 1, {autoAlpha:1}, "-=1")
		
	  }else if (pageNumber == 9){
  			tl.add (TweenLite.set(".page9 #bluebar", {y:0, x:450, autoAlpha:1}));
  			tl.add (TweenLite.set(".page9 #roses", {rotation:90}));	
    		 	 tl.pause();//crazy sound alert thing
			
  		  	tl.to(".page9 .headline h1", 1, {autoAlpha:1, delay:1})
  		     .to(".page9 .headline h2", 1, {autoAlpha:1}, "-=.7")
  		     .to(".page9 #bluebar", .7, {x:0, y:0, autoAlpha:1, ease:Back.easeOut}, "-=.7")
  		     .to(".page9 #roses", 1, {autoAlpha:1,rotation:0}, "-=.5");

	  }else if (pageNumber == 10){

  			tl.set(".view-container .clickme", {scale:.01});
  			tl.add (TweenLite.set(".page10 #stay-connected", {y:0, x:-300}));
    		    tl.pause();//crazy sound alert thing
			
  			tl.to(".page10 .headline h1", 1, {autoAlpha:1, delay:1})
  			  .to(".page10 .headline p", 1, {autoAlpha:1, delay:.2}, "-=.7")
//  			  .to(".page10 #stay-connected", 1.7, {x:0, y:0, autoAlpha:1, ease:Elastic.easeOut,onStart: doAnimation}, "-=.7");
			.to(".page10 #stay-connected", 1.7, {x:0, y:0, autoAlpha:1, ease:Elastic.easeOut}, "-=.7")
			.staggerTo(".view-container .clickme", 1, {scale:1, ease:Quad.easeOut}, 1)
			.staggerTo(".view-container .clickme", 0, {className:'+=bounce'}, .5);

	  }else if (pageNumber == 11){
		  
  		tl.set(".view-container .clickme", {scale:.01});
  		 tl.add (TweenLite.set(".page11 #bluebar", {y:0, x:350, autoAlpha:1}));
  		 tl.add (TweenLite.set(".page11 #pic1", {y:300, x:0, autoAlpha:1}));
  	     tl.add (TweenLite.set(".page11 #pic2", {y:600, x:0, autoAlpha:1}));	
  	     tl.add (TweenLite.set(".page11 #pic3", {y:600, x:0, autoAlpha:1}));
  	     tl.add (TweenLite.set(".page11 #arrow", {y:0, x:-250}));
  	     tl.pause();//crazy sound alert thing
		 	
  		 tl.to(".page11 #bluebar", .7, {x:0, y:0, autoAlpha:1, ease:Back.easeOut, delay:1})
  		.to(".page11 #pic1", 1, {x:0, y:0, rotation:-5, autoAlpha:1, ease:Power3.easeOut}, "-=.7")
  		.to(".page11 #pic2", 1, {x:0, y:0, rotation:5, autoAlpha:1, ease:Power3.easeOut}, "-=.8")
  		.to(".page11 #pic3", 1, {x:0, y:0, rotation:1, autoAlpha:1, ease:Power3.easeOut}, "-=.8")
          .to(".page11 #arrow", 2, {x:0, y:0,  ease:Elastic.easeOut})
		  .staggerTo(".view-container .clickme", 1, {scale:1, ease:Quad.easeOut}, 1)
		  .staggerTo(".view-container .clickme", 0, {className:'+=bounce'}, .5);  
		  
	  }else if (pageNumber == 12){
		  
  		tl.set(".view-container .clickme", {scale:.01});
  		tl.add (TweenLite.set(".page12 #filmstrip", {y:900, x:0, autoAlpha:1}));
  		tl.add (TweenLite.set(".page12 #filmpic1", {y:900, x:0, autoAlpha:1}));
  	    tl.add (TweenLite.set(".page12 #filmpic2", {y:900, x:0, autoAlpha:1}));	
  	    tl.add (TweenLite.set(".page12 #vid-wrap", {y:900, x:0, autoAlpha:1}));	
  	    tl.add (TweenLite.set(".page12 #filmpic3", {y:900, x:0, autoAlpha:1}));
  	    tl.add (TweenLite.set(".page12 #filmpic4", {y:900, x:0, autoAlpha:1}));
  	     tl.add (TweenLite.set(".page12 #arrow", {y:-30, x:-300}))
  	    tl.pause();//crazy sound alert thing

  		tl.to(".page12 .headline h1", 1, {autoAlpha:1, delay:1})
  		  .to(".page12 .headline p", 1, {autoAlpha:1, delay:.2}, "-=.7")
  		  .to(".page12 #filmstrip", 1, {x:0, y:0, autoAlpha:1, ease:Power3.easeOut}, "-=1.3")	
  		  .to(".page12 #filmpic1", 1, {x:0, y:0, autoAlpha:1, ease:Power3.easeOut}, "-=1")
  		  .to(".page12 #filmpic2", 1, {x:0, y:0, autoAlpha:1, ease:Power3.easeOut}, "-=1")
  		  .to(".page12 #vid-wrap", 1, {x:0, y:0, autoAlpha:1, ease:Power3.easeOut}, "-=1")
  		  .to(".page12 #filmpic3", 1, {x:0, y:0, autoAlpha:1, ease:Power3.easeOut}, "-=1")
  		  .to(".page12 #filmpic4", 1, {x:0, y:0, autoAlpha:1, ease:Power3.easeOut}, "-=1")
		.to(".page12 #arrow", 1, {autoAlpha:1, delay:.2, y:0, ease:Elastic.easeOut}, "+=.7")
	  .staggerTo(".view-container .clickme", 1, {scale:1, ease:Quad.easeOut}, 1)
	  .staggerTo(".view-container .clickme", 0, {className:'+=bounce'}, .5);
		
		  
		  
	  }else if (pageNumber == 13){
		  
  			tl.set(".view-container .clickme", {scale:.01});
  		      tl.add (TweenLite.set(".page13 #bluebar", {y:0, x:350, autoAlpha:1}));
  			   tl.add (TweenLite.set(".page13 #arrow", {y:-50, x:0, opacity:0}));
  	 		  tl.pause();//crazy sound alert thing
			   	
  			  tl.to(".page13 .headline h1", 1, {autoAlpha:1, delay:1})
  			    .to(".page13 #bluebar", .7, {x:0, y:0, autoAlpha:1, ease:Back.easeOut}, "-=.7")
  				.to(".page13 #arrow", .7, {x:0, y:0, autoAlpha:1, ease:Elastic.easeOut}, "+=.7")
  			  .staggerTo(".view-container .clickme", 1, {scale:1, ease:Quad.easeOut}, 1)
			  .staggerTo(".view-container .clickme", 0, {className:'+=bounce'}, .5);
		  
		  
	  }else if (pageNumber == 14){
		  
		
		  tl.pause();//crazy sound alert thing
				
			  tl.to(".page14 .headline h1", 1, {autoAlpha:1, delay:1,onStart:soundMachine, onStartParams:["birds"]})
			  .to(".page14 #logo", 1, {autoAlpha:1}, "-=.3")
			  .to(".page14 .headline p", 1, {autoAlpha:1}, "-=.5")
			  .to(".page14 #button", 1, {autoAlpha:1}, "-=1")
			   .fromTo(".page14 #mask", 1, {css:{width:0}}, {css:{width:800}, ease:Power1.easeOut}, "-=2")
			  .to(".page14 #swirl", 1, {autoAlpha:1}, "-=2");

		  
	  }
	  
	  
	  
	  angular.element('.screenWrapper').scope().soundAlert(tl);
	  angular.element('body').scope().updateTween(tl);
	  
	  
  }