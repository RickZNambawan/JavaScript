/* Conditional Statement */
// if statement
const age = 25;
if(age > 20) {
    console.log("You are over 20 years old!");
}

let names = ["Fred", "Marian", "Christian"];

if(names.length > 2) {
    console.log("Length is over 3!");
}

// if-else statement
if(names.length > 4) {
    console.log("Array has more than 2 items!");
} else {
    console.log("Items in Array are not enough");
}

// else-if statement with logical operators (OR || and AND &&)
const password = 'p@ssword1234';
if(password.length >= 12 && password.includes("@")) {
    console.log("That password is might strong!");
} else if(password.length >= 8 || password.includes("@")) {
    console.log("That password is long enough!");
} else {
    console.log("Password is not long enough!");
}