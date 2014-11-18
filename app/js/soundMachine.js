var sound_engine, sound_birds, sound_giggle


$(document).ready(function(){
	if(localStorage.playSound != "false"){ //sound enabled by user from before
		localStorage.playSound = "true";
		initSounds();
	}else{
		$('li.nav-sound a .nav-holder').addClass('nosound');
	}
	var soundButton = $('li.nav-sound a');
	soundButton.click(function(e){
		$('li.nav-sound a .nav-holder').toggleClass('nosound');
		if ($('li.nav-sound a .nav-holder').hasClass('nosound')){
			localStorage.playSound = "false";
			e.preventDefault();
		}else{
			initSounds();
			localStorage.playSound = "true";
			e.preventDefault();
		}
	})
	
})

function initSounds(){

	sound_engine = new Howl({
	  urls: ['sounds/engine.mp3'],
	  autoplay: false
	});

	sound_birds = new Howl({
	  urls: ['sounds/birds.mp3'],
	  autoplay: false
	});

	sound_giggle = new Howl({
	  urls: ['sounds/giggle.mp3'],
	  autoplay: false
	});

}

//http://goldfirestudios.com/blog/104/howler.js-Modern-Web-Audio-Javascript-Library
function soundMachine(theFileName){
  console.log("sound" +theFileName);
  
  if (localStorage.playSound == 'true') {
	  switch(theFileName){
		case 'engine':
		    sound_engine.play();
		    break;
		case 'giggle':
		    sound_giggle.play();
		    break;
		case 'birds':
		    sound_birds.play();
		    break;	
		default:
		    break;
		}
      
  }else{
  	console.log("sound off")
  }

  
  
	
}