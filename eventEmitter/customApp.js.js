var Emitter = require('./emitter');


var emtr = new Emitter();

emtr.on('greet', function(){
        console.log('ABi said Hello');
});

emtr.on('greet', function(){
        console.log('bala said hello');
});

emtr.emit('greet');