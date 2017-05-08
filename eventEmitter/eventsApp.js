var EventEmitter  = require('events');
var util = require('util');
var eventConfig = require('./config');

function Person(firstname, lastname,age, gender ){
        // The util.inherits lets only the prototype methods and properties of EventEMitter to be inherited by Person object
        // but not the methods and properties of the EventEmitter itself.
        // so when .call(this) allows the methods and properties in EventEMitter to be available to Person object
        EventEmitter.call(this);
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.fullname = this.firstname +' '+ this.lastname;
        this.gender = gender;
}
        
util.inherits(Person, EventEmitter);

Person.prototype.ageAction = function(){
        this.on('eventConfig.PEOPLE', () => {
            if (this.age > 40){
                console.log(`Life begins at 40. Enjoy it`);
            }
            else{
                console.log(`You have a long Journey Ahead! Enjoy Life\n`);
            }
        });
}

Person.prototype.suffix = function(){
    console.log(`Here are ${this.firstname}  Details`);
        if (this.gender == 'F')
                console.log(`Ms. ${this.fullname}`);
        else if(this.gender == 'M')
                console.log(`Ms. ${this.fullname}`);
        this.emit('eventConfig.PEOPLE');
}

var abirami = new Person('Abirami', 'Gopinath', '32', 'F')
var Bala =new Person('bala', 'Krish', '34','M');
var gopi = new Person('Gopi', 'kannan', '63','M');

// on and emit for Person Abirami
/*abirami.on('eventConfig.PEOPLE', function(){
    console.log("Here's Abi Details");
})*/

abirami.ageAction();
abirami.suffix();


//On and Emit for person bala
Bala.ageAction();
Bala.suffix();


//On and Emit for person Gopi
gopi.ageAction();
gopi.suffix();

//Eveny