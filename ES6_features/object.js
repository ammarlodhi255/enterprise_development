const person = {
    name: 'Ammar',
    walk: () => 'walking...',
    talk: () => 'talking...',
    age: 24
}

console.log(person.walk())

const fieldToAccess = 'name'
console.log(person[fieldToAccess])