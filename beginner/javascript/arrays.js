/* Arrays - Collection of Object/Variables/Values */
// string collection
let employees = ["Fred", "Marian", "Christian"];
console.log(employees[2]);

employees[2] = "Janke";
console.log(employees[2]);

// number collection
let ages = [12, 34, 5, 32, 23];
console.log(ages[4]);

// combine data types collection
let random = ["Fred", "Marian", "Christian", 23, 22, 25];
console.log(random);

/* Array Properties */
// length
console.log(employees.length);

/* Array Methods */
let result;

// join() - add characters/string in between the items
result = employees.join("------");
console.log(result);

// indexOf() - return the index of the value
result = employees.indexOf("Marian");
console.log(result);

// concat() - add another set of items to array
result = employees.concat(ages, ["Michael", "Kyle", "Ernest"]);
console.log(result);

// push() - add item to last index, store the value to variable
result = employees.push("Ernest");
console.log(result);
console.log(employees);

// unshift() - add item to first index, store the value to variable
result = employees.unshift("Florante");
console.log(result);
console.log(employees);

// pop() - remove item from last index, store the value to variable
result = employees.pop();
console.log(result);
console.log(employees);

// shift() - remove item from first index, store the value to variable
result = employees.shift();
console.log(result);
console.log(employees);

/* Spread Operator */
// [...(variable name)] - to copy the array
let copyEmployee = [...employees];
console.log(copyEmployee);
copyEmployee[2] = "Kyle";
console.log(copyEmployee);

// arrays with object as a value
let blogs = [
    {
        title: "Why I am handsome?", 
        likes: 30
    }, 
    {
        title: "10 things to make me happy", 
        likes: 30
    },
    {
        title: "Youtube Tutorials", 
        likes: 30
    },
    {
        title: "Experience is the best teacher", 
        likes: 30
    }
];

console.log(blogs[1].title, blogs[1].likes);

/* Multi-Dimensional Arrays */
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
console.log(arr[3]); // [[10, 11, 12], 13, 14]
console.log(arr[3][0]); // [10, 11, 12]
console.log(arr[3][0][1]); // [11]