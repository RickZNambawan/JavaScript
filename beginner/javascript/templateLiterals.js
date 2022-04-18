/* Format Strings or Template String */

const title = "Clean Code";
const author = "Frederick Castañeda Jr";
const likes = 89;
let statement = ""

// concatenation string way
statement = "The blog called " + title + " by " + author 
+ " has " + likes + " likes.";
console.log(statement);

// template string way
statement = `Template way: The blog called ${title} by ${author} has ${likes} likes.`;
console.log(statement)

// creating html templates
let htmlStatement = `
    <h2> ${title} </h2>
    <p> By ${author} </p>
    <span> This blog has ${likes} likes in it. </span>
    `;
console.log(htmlStatement);