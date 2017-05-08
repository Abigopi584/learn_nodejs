// call() and Apply()
// The call() and apply() method calls a function with a given "this" value. The difference between call() and apply() is,
//if there are any parameters used in the function then they are listed one after the other using comma as a seperator
//in the call() method and they are listed in array and passed as 1 arg.
// Created by Abi May 1, 2017
var obj1 = {
    name : 'Abirami Gopinath',
    age : '32',
    greet: function(){
        console.log(`Hi, I'm ${ this.name } and I'm ${ this.age } years old`);
    }
}

obj1.greet();
obj1.greet.call({name:'Bala',age:'34'});
obj1.greet.apply({name:'shakthi', age:'7'});

var obj2={
    name:'Bala Krish',
    greet: function(profession){
        console.log(`Hi, I'm ${this.name} and I'm a ${profession}`);
    }
}

obj2.greet('software engineer');
obj2.greet.call({name:'Abirami Gopinath'}, 'housewife');
obj2.greet.apply({name:'Renuka Devi V'},['professor']);