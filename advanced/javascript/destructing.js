/* Destructuring Arrays and Objects */

/* Arrays */
/* Old way of getting values from array and save it to a variable */
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f',];
const numbers = [1, 2, 3, 4, 5, 6];

const a = alphabet[0];
const numberOne = numbers[0];

console.log(a, numberOne);

/* New way: Destructing an Array */
// get the value by position
const [letterA, letterB, letterC, letterD] = alphabet; 
console.log(letterA, letterB, letterC, letterD);

// skip some position to get the value in array
const [, numberTwo, numberThree,, numberFive] = numbers;
console.log(numberTwo, numberThree, numberFive);

// to get the rest of the value in array
// using spread operator
const [ , , , , ...rest] = alphabet; // skip first 4 position and get the rest of the value
console.log(rest);

// combine arrays using spread operator
const combinedArray = [...alphabet, letterC, numberTwo, ...numbers];
console.log(combinedArray);

/* Multiple Returned Value of Function */
const sumAndProduct = (x, y) => {
    return [x + y, x * y];
}

const [sum, product] = sumAndProduct(5, 2);
console.log(sum, product);

// default value of variable
const [sum1, product1, division = 'default value'] = sumAndProduct(2, 5);
console.log(sum1, product1, division);

/* Objects */
// get the value by key name 
const human = {
    personOne: {
        name: 'Fred',
        age: 22,
        address: {
            street: 'Magsaysay St.',
            city: 'Pasig'
        }
    },

    personTwo: {
        name: 'Marian',
        age: 22,
        address: {
            street: 'San Lorenzo St.',
            city: 'Pasig'
        }
    }
}

// to change the variable name of the key in Object
const { personOne: first, personTwo, personThree = 'default value'} = human;
console.log(first.name);
console.log(personTwo.name);
console.log(personThree);

// get all properties of an Object
const {...allObjects} = human;
console.log(allObjects);

// get the value of nested object
const { address: {city: state}} = human.personOne;
console.log(state);

// override the object
const personFour = {...human.personOne, ...human.personTwo};
console.log(personFour);

// destructing a parameter object
const printUser = ({ name, address }) => console.log(name, address.city);
printUser(human.personOne);

// destruct then assign a variable
const printUser2 = ({ personOne: person }) => console.log(person.name);
printUser2(human);