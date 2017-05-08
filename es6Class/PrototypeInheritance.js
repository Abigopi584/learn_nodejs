// Example to create objects using ES6 classes
'use strict'
// This is just Syntatic sugar.  The class is actually a function constructor. Anything within the construtor is the
// function constructor and any functions that are inside the class are prototype methods.

class Person{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname =lastname;
    }

    greet(){
        console.log('hello!' +' '+ this.firstname + ' '+this.lastname)
    }
}



var abi = new Person('Abi','Gopi');
var bala = new Person('Bala','Krish');

abi.greet();
//hello! Abi Gopi

bala.greet();
//hello! Bala Krish

// use __proto__ go view the actual prototype

console.log(abi.__proto__);
//Person { greet: [Function] }
console.log(bala.__proto__);
//Person { greet: [Function] }

//  check if both the object have the same prototype property.
console.log(abi.__proto__ === bala.__proto__);
//true