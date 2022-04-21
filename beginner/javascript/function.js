/* Function */
// function declaration vs. function expression - both the same but slightly diffent
// function declaration - use it when you want to create a function on global scope.
// function expression - when you want to limit the availability of the function.
// arrow function - use it when you want a shorter syntax of function expression


// function declaration - can read even declared at the bottom of code (hoisting)
function greet() {
    console.log("Hello, World!");
}
 
// function expression - should be declared at the top before calling (not hoisted)
const speak = function() {
    return 7;
};

// calling/invoking a function 
greet();
greet();

console.log(5 + speak());

/* function arguments & parameters */
// passing a parameter
const computeSum = function(firstNum, secondNum) {
    const sum = firstNum + secondNum;
    return sum;
};

// passing an argument
let result = computeSum(7, 8);
console.log(`This is the result Sum: ${result}`);

/* default parameter */
// assigning a default parameter
const computeDifference = function(firstNum = 20, secondNum = 9) {
    const difference = firstNum - secondNum;
    return difference;
};

// leaving a default argument
let diffResult = computeDifference(10);
console.log(`This is the result of Difference: ${diffResult}`);

/* return value */
const calcArea = function(radius) {
    let area = 3.14 * radius ** 2;
    return area;
}

console.log(calcArea(4));

/* Arrow Function */
// shorter way to make a function (not hoisted)
const computeProduct = (firstNum = 5, secondNum = 10) => {
    return firstNum * secondNum;
};

console.log(computeProduct(2));

// another way to make function with 1 parameter/argument
const computeQuotient = firstNum => {
    return firstNum / 2;
};

console.log(computeQuotient(20));

// another way to make a function with 1 statement in the body
const computePi = firstNum => firstNum * 3.14;
console.log(computePi(10));

/* assigning function to a variable itself */
// function declaration
const funcDeclaration = (function sample() {
    return "Hello " + "World";
})();

console.log(funcDeclaration + " Fred!");

// function expression
const funcExpression = (function(num1, num2) {
    return num1 + 10 - num2;
})(5, 3);

console.log(funcExpression + 10);

// arrow function
// this function assigned a function as parameter and assigned argument
const arrowFunc = (num => num * num + 3)(3); 
console.log(arrowFunc, arrowFunc + 2);

/* callback function */
// calling a function inside a function
// declare a function that has a function inside
const myFunc = thisFunc => {
    let a = 5;
    let b = 10;
    thisFunc(a, b);
};

// pass a function to the argument
myFunc((a, b) => console.log(a + b));


/* Return Multiple Values in a function */
function getValues(a, b) {
    const sum = a + b;
    const diff = a - b;
    const product = a * b;

    return {
        sum,
        diff,
        product
    };
}

const values = getValues(5, 10);
console.log("Returning Multiple Values: Sum = ", values.sum);
console.log("Returning Multiple Values: Difference = ", values.diff);
console.log("Returning Multiple Values: Product = ", values.product);

// sample code of callback function
let objectPerson = (summation, num1) => {
    return summation(5, 8) + num1;
}

console.log(objectPerson((a, b) => {
    return a + b;
}, 5));