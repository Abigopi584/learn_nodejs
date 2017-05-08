// Create by Abi on Apr 26, 2017
var Person = {
    firstname : '',
    lastname : '',
    greet : function () {
        return "Hello " + this.firstname + ' '+this.lastname;
    }
}

// Object.create is the simplest and cleanest way to set up inheritance. The object 'abi' & 'bala' share the
// function 'greet' that is inherited from the object 'Person'
var abi = Object.create(Person);
var bala = Object.create(Person);

abi.firstname = 'Abi';
abi.lastname  = 'Gopi';
console.log(abi.greet());

bala.firstname = 'Bala';
bala.lastname = 'krish';
console.log(bala.greet());