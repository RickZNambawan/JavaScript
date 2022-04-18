/* Explicitly Type Conversion */
let score = '100'; // string
let result = null;

score = Number(score); // string to number
console.log(score + 55, typeof score);

result = Number('hello'); // NaN 
console.log(result); // unable to convert literal string to number

result = String(50);
console.log(result, typeof result);

result = Boolean(100); // true
console.log(result, typeof result);

result = Boolean(-100); // true
console.log(result, typeof result);

result = Boolean(0); // false
console.log(result, typeof result);

result = Boolean('200'); // true
console.log(result, typeof result);

result = Boolean(''); // false
console.log(result, typeof result);