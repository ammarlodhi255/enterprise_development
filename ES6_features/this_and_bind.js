const person = {
    name: 'Ammar',
    walk() {
        console.log(this)
    }
}

person.walk() // will return a reference to person object

const walk = person.walk 
console.log(walk)

walk() // undefined or window object

const walk_with_bind = person.walk.bind(person)
walk_with_bind()