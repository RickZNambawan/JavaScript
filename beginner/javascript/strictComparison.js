/* Comparison Operator */
let age = 25;

// loose comparison (different types but can still be equal)
console.log(age == 25); // true
console.log(age == '25'); // still true
console.log(age != 25); // false
console.log(age != '25'); // still false
// (js converts the string to number before evaluate)

// strict comparison (different types but cannot be equal)
console.log(age === 25); // true
console.log(age === '25'); // now it is false
console.log(age !== 25); // false
console.log(age !== '25'); // of course, true
