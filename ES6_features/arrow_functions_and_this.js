const person = {
    name: 'Ammar',
    talk() {
        return this;
    }
};

console.log(person.talk()) // returns the reference to the person object

const person2 = {
    name: 'Ammar',
    talk() {
        setTimeout(function() {
            console.log("this: ", this);
        }, 1000);
    }  
};

person2.talk() // will actually return a reference to the window object not the person object.

// Solution 1:

const person3 = {
    name: 'Ammar',
    talk() {
        var self = this;
        setTimeout(function() {
            console.log("self: ", self);
        }, 1000);
    }  
};

person3.talk()


// Solution 2: Arrow Functions:

// Arrow functions do not re-bind 'this' keyword.
const person4 = {
    name: 'Ammar',
    talk() {
        setTimeout(() => console.log("this: ", this), 1000);
    }  
};

person4.talk() 