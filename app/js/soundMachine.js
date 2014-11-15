
//SOUND STUFF CAN BE MOVED TO DOCUMENT READY/WINDOW LOAD

var soundFX = new Howl({
  urls: ['sounds/engine.mp3'],
  sprite: {
    engine: [0, 3000]
  }
});


//http://goldfirestudios.com/blog/104/howler.js-Modern-Web-Audio-Javascript-Library
function soundMachine(theFileName){
  console.log("sound");
  
  soundFX.play('engine');
	
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
car2.color = 'blue';
alert(car2.getInfo()); //displays 'A RED PORSCHE BOXTER.'