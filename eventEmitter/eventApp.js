var Emitter = require('./emitter');
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function(){
        console.log('ABi said Hello');
});

emtr.on(eventConfig.GREET, function(){
        console.log('bala said hello');
});

emtr.emit(eventConfig.GREET);



