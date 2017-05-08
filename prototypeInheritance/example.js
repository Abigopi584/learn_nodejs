// example to create a prototype function for an object.
// Any object created from the function(new) constructor, its prototype points to the prototype
// property of the function(Person) that is used to construct the object(abi or bala).
// When we see the .prototype property, it means that we are creating properties and properties that
// are avialable to all objects that are created using the function construtor
// Created By Abi on Apr 24, 2017
function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname =lastname;
}

Person.prototype.greet=function(){
    console.log('hello!' +' '+ this.firstname + ' '+this.lastname);
};

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