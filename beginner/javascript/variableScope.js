/* Variable Scope: Global and Block Scope */
// Global Scope

let age = 30;

console.log("Outside code block: ", age);

// Block Scope
if(true) {
    let age = 40
    console.log("Inside 1st code block: ", age);

    if(true) {
        console.log("Inside 2nd code block: ", age);
    }
}

console.log("Outside code block: ", age);