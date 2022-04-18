/* Control Flow */

/* Loops */
// for loop

// syntax
for(let i = 0; i < 5; i++) {
    console.log("The index:", i);
}

// for loop with array
const names = ["Fred", "Marian", "Christian"];
for(let i = 0; i < names.length; i++) {
    console.log(i + 1, names[i]);
}

// for of - iterate the actual value of an array
for(let name of names) {
    console.log("For Of: ", name);
}

// for in - iterate the index of an array
for(let name in names) {
    console.log("For In: ", name);
}

// for loop with html template
for(let i = 0; i < names.length; i++) {
    let html = `
        <i> ${names[i]} </i>
    `;
    console.log(html);
}

// for loop with key, value pair
let users = [['fred', 22], ['marian', 22]];
for(let [key, value] of users) {
    console.log("Key: ", key);
    console.log("Value: ", value);
}

// while loop
let counter = 0;
while(counter < names.length) {
    console.log("Hi,", names[counter]);
    counter++;
}

// do-while loop (it will run once even the condition is false)
let index = 5;
do {
    console.log("Value of Index is: ", index);
    index++;
} while(index < 5);

// break and continue reserved word and conditional statement
const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++) {
    if(scores[i] === 100) {
        console.log("Congrats, you got the top score!");
        break;
    } else if(scores[i] === 0) {
        continue;
    }

    console.log("Your score: ", scores[i]);
} 

