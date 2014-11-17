
//SOUND STUFF CAN BE MOVED TO DOCUMENT READY/WINDOW LOAD

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



var SoundMachinery = Object.create(null); //this is an empty object, like {}
SoundMachinery.prototype = {
  getInfo: function() {
    return 'A ' + this.color + ' ' + this.desc + '.';
  }
};
 
var soundMachinery = Object.create(SoundMachinery.prototype, {
  //value properties
  color:   { writable: true,  configurable:true, value: 'red' },
  //concrete desc value
  rawDesc: { writable: false, configurable:true, value: 'Porsche boxter' },
  // data properties (assigned using getters and setters)
  desc: { 
    configurable:true, 
    get: function ()      { return this.rawDesc.toUpperCase();  },
    set: function (value) { this.rawDesc = value.toLowerCase(); }  
  }
}); 
