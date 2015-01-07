var sound_engine, sound_birds, sound_giggle, sound_birds2, sound_slots, sound_gliss, sound_glop;


$(document).ready(function(){
	if(localStorage.playSound != "false"){ //sound enabled by user from before
		localStorage.playSound = "true";
		initSounds();
	}else{
		$('li.nav-sound a .nav-holder').addClass('nosound');
	}
	var soundButton = $('li.nav-sound a');

	soundButton.on('soundOn',function(e){
		$('li.nav-sound a .nav-holder').removeClass('nosound');
			initSounds();
			localStorage.playSound = "true";
			e.preventDefault();
	})
	soundButton.on('soundOff',function(e){
		$('li.nav-sound a .nav-holder').addClass('nosound');
		localStorage.playSound = "false";
		soundMachineClear();
		e.preventDefault();
	})
	
	soundButton.click(function(e){
		angular.element('li.nav-sound a .nav-holder').toggleClass('nosound');
		if ($('li.nav-sound a .nav-holder').hasClass('nosound')){
			$(this).trigger('soundOff');
		}else{
			$(this).trigger('soundOn');
		}
		
		
		
		
		e.preventDefault();
	})
	
})

function initSounds(){

	sound_engine = new Howl({
	  urls: ['sounds/engine_laugh.mp3'],
	  autoplay: false
	});

	sound_birds = new Howl({
	  urls: ['sounds/birds.mp3'],
	  autoplay: false
	});
	sound_birds2 = new Howl({
	  urls: ['sounds/birds2.mp3'],
	  autoplay: false
	});

	sound_slots = new Howl({
	  urls: ['sounds/slots.mp3'],
	  autoplay: false
	});
	sound_glop = new Howl({
	  urls: ['sounds/1_REV_Page_7_Glop_Music_01.mp3'],
	  autoplay: false
	});
	sound_gliss = new Howl({
	  urls: ['sounds/1_Page_9_Letter Gliss_up.mp3'],
	  autoplay: false
	});


}
function soundMachineClear(){
	console.log("clearSounds");
	if(sound_engine != null){
	    sound_engine.stop();
		sound_birds2.stop();
		sound_birds.stop();
		sound_slots.stop();
		sound_glop.stop();
		sound_gliss.stop();
	}
	
}

//http://goldfirestudios.com/blog/104/howler.js-Modern-Web-Audio-Javascript-Library
function soundMachine(theFileName){
  console.log("sound" +theFileName);
  
  if (localStorage.playSound == 'true') {
	  switch(theFileName){
		case 'engine':
		    sound_engine.play();
			sound_birds.stop();
			sound_birds2.stop();
			sound_glop.stop();
			sound_gliss.stop();
			sound_slots.stop();
		    break;
		case 'birds':
		    sound_engine.stop();
			sound_birds.play();
			sound_birds2.stop();
			sound_glop.stop();
			sound_gliss.stop();
			sound_slots.stop();
		    break;
		case 'birds2':
		    sound_engine.stop();
			sound_birds.stop();			
			sound_birds2.play();
			sound_glop.stop();
			sound_gliss.stop();
			sound_slots.stop();
		    break;		
		case 'slots':
		    sound_engine.stop();
			sound_birds2.stop();
			sound_birds.stop();
			sound_glop.stop();
			sound_gliss.stop();
			sound_slots.play();
		    break;	
		case 'glop':
		    sound_engine.stop();
			sound_birds2.stop();
			sound_birds.stop();
			sound_slots.stop();
			sound_glop.play();
			sound_gliss.stop();
		    break;	
		case 'gliss':
		    sound_engine.stop();
			sound_birds2.stop();
			sound_birds.stop();
			sound_slots.stop();
			sound_glop.stop();
			sound_gliss.play();
		    break;			
		default:
		    break;
		}
      
  }else{
  	console.log("sound off")
  }

  
  
	
}