var sound_engine = new Howl({
  urls: ['sounds/engine.mp3'],
  autoplay: false
});

var sound_birds = new Howl({
  urls: ['sounds/birds.mp3'],
  autoplay: false
});

var sound_giggle = new Howl({
  urls: ['sounds/giggle.mp3'],
  autoplay: false
});


//http://goldfirestudios.com/blog/104/howler.js-Modern-Web-Audio-Javascript-Library
function soundMachine(theFileName){
  console.log("sound" +theFileName);
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
  
  
	
}