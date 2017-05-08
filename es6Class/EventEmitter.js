//updated the program ES6 classes.
'use strict'

var EventEmitter  = require('events');
var util = require('util');
var eventConfig = require('./config');

class Person extends EventEmitter{
    constructor(firstname, lastname,age, gender ){
        super(); // person inherits all the methods and functions of EventEmitter not just the prototype method & func
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.fullname = this.firstname +' '+ this.lastname;
        this.gender = gender;
    }

    ageAction(){
        this.on('eventConfig.PEOPLE', () => {
            if (this.age > 40){
                console.log(`Life begins at 40. Enjoy it`);
            }
            else if (this.age == null  || undefined) {
                console.log('Please enter a valid number');
            }
            else{
                console.log(`You have a long Journey Ahead! Enjoy Life\n`);
            }
        });
    }

    suffix(){
        console.log(`Here are ${this.firstname}  Details`);
        if (this.gender == 'F')
            console.log(`Ms. ${this.fullname}`);
        else if(this.gender == 'M')
            console.log(`Ms. ${this.fullname}`);
        this.emit('eventConfig.PEOPLE');
    }
}




var abirami = new Person('Abirami', 'Gopinath', '32', 'F')
var Bala =new Person('bala', 'Krish', '34','M');
var gopi = new Person('Gopi', 'kannan', '63','M');


abirami.ageAction();
abirami.suffix();


//On and Emit for person bala
Bala.ageAction();
Bala.suffix();


//On and Emit for person Gopi
gopi.ageAction();
gopi.suffix();

