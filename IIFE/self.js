//Immediately Invoked function expression are self Invoking functions that created y using () at the end of the function
// These functions are not declared or called
// The scope of the variables inside IIFE are always private and will never impact the variables outside of the scope
// created By Abi on Apr 24, 2017
(function(){
    var firstname ='Abirami';
    console.log(firstname);
    //result: Abirami
}());

var firstname ='Balasubramanian';
console.log(firstname);
//Result: Balasubramanian



