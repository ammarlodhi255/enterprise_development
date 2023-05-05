// const person = {
//     name: 'Ammar',
//     walk() {
//         console.log(this)
//     }
// }


// What if you wanted to create another person object with different name?

class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log('walking...');
    }

    get_ref() {
        return this;
    }
}

const person1 = new Person('Ammar');
const person2 = new Person('Ahmed');

console.log(person1.get_ref().name);
console.log(person2.get_ref().name);

// Inheritance:

class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree
    }

    teach() {
        console.log('teaching...');
    }
}

const teacher = new Teacher('Ali', 'Software Engineering');

console.log(teacher.get_ref().name);
teacher.walk();
teacher.teach();