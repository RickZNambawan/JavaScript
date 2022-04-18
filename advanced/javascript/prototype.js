/* Prototype Property */
// Used to add behaviour to the constructor function
// This is how class works in the background

/*
    When you're not using prototype, every time you are creating instance,  
    the  JavaScript  process or read all the methods and this is not inteligent 
    because all the instance have the same functionalities, they do the same things in 
    all instances. Writing a prototype,  all the methods of a class is going to be 
    process by the main thread just one time for your instances. 
*/

// Parent Constructor Function
function Animals(animalName, animalColor) {
    this.animalName = animalName;
    this.animalColor = animalColor;
}

Animals.prototype.speak = function() {
    console.log("My name is: " + this.animalName)
};

let mamals = new Animals("Marian", "Pink");
mamals.speak();

/* Prototype Inheritance */
// Child Constructor Function
// inherit all the properties of the parent constructor function
function Cat(howManyTail, ...args) {
    Animals.apply(this, args);
    this.tail = howManyTail;
}

/* Inherit Prototype Behaviour of Parent Constructor Function */
Cat.prototype = Object.create(Animals.prototype);

let panther = new Cat(1, "Black Panther", "Black");
console.log(panther.animalName);
console.log(panther.animalColor);
console.log(panther.tail);
panther.speak(); // inherited prototype

