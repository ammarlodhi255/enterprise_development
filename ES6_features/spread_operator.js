// Spread operator for arrays:
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

// const thirdArray = firstArray.concat(secondArray); // An old way
const thirdArray = [...firstArray, 'a', ...secondArray, 'b'];
console.log(thirdArray)


// Spread operator for objects
const object1 = { name: 'Ammar' };
const object2 = { title: 'Computer Scientist' }

const person = {
    ...object1,
    ...object2, 
    location: 'Norway'
}

console.log(person)