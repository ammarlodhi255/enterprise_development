import Person from './person';

// Default -> import ... from ''
// Named -> import {..., ....} from ''


class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log('teaching...');
    }
}

const teacher = new Teacher('Ali', 'SWE');
teacher.walk();