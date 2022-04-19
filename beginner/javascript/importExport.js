/* Import & Export */
// you need to add type='module' attribute to script tag in html file
// ! do not run this

/* Export */
/* Named Export */
// if you want to export specific objects
// you can have multiple export
export const arrayOfNum = [6, 4];
export const getSum = ([a, b]) => {
    return a + b;
}
export const sum = getSum(arrayOfNum)
console.log(sum);


/* Default Export */
// the file automatically know that this is the object you want to export
// only one object can declare a default export

const primaryObject = {
    name: 'fred',
    age: 22,
    username: 12312
}

/* Export List  */
// declare all the objects as one list
export const [numberOne, numberTwo] = arrayOfNum; // export destructured assignments 
export {arrayOfNum, getSum as sum}; // you can change the variable when importing
export default primaryObject; // declare it at the bottom

/* Import */
// calculator.js
import {arrayOfNum as array, getSum} from './importExport'; // this is named export, with braces. need keyword 'as' to change name
import PrimaryObject from './importExport' // this is the default export, without braces. can change the name immediately
