/* Object Literal */
// Big Note: object literal doesn't give you multiple instances of an object, use constructor function to do it!
// Object literals are basically singletons with variables/methods that are all public.
// just like object literals, Constructor function initializing objects.
// use Object Literals only If you don't have behaviour (methods) associated with an object 
// (i.e. if the object is just a container for data/state)

// Declaration
let user = {
    /* properties: key-value pair */
    name: "Fred",
    age: 23,
    email: "rickzisback@gmail.com",
    location: "Philippines",

    // property array using object as value
    blogs: [
        {
            title: "Why I am handsome?", 
            likes: 30
        }, 
        {
            title: "10 things to make me happy", 
            likes: 5
        },
        {
            title: "Youtube Tutorials", 
            likes: 67
        },
        {
            title: "Experience is the best teacher", 
            likes: 21
        }
    ],

    /* methods */
    // 'this' keyword with property refers to the object properties
    // 'this' keyword without property refers to the details on the property
    // note: that 'this' keyword only works inside regular function.
    // when 'this' was used in arrow function, only shows the object type referring for.

    // function expression
    sayName: function() {
        console.log(this.name);
    },

    sayLocation: function(coordinates) {
        console.log(this.location, coordinates);
    },

    // regular function
    logs() {
        console.log("It show the detailed information about this user object: ", this);
    },

    // access properties in arrays object value
    loopBlogTitle(margin) {
        this.blogs.forEach(blog => console.log(margin, blog.title, blog.likes)); 
        console.log(this.blogs[3].likes);
    },

    // arrow function - not working with 'this' keyword to access properties.
    olat: () => {
        console.log("My age is: ", this.age);
    },
};

// accessing object properties using dot notation
let objectName = user.name;
console.log(objectName);

// accessing object properties using bracket notation
let objectAge = user["age"];
console.log(objectAge);

// override object properties using dot notation
user.age = 24;
console.log(user.age);

// override object properties using bracket notation
user["email"] = "frederick.castanedajr04@gmail.com";
console.log(user["email"]);

// used-case scenario for bracket notation approach
let key = "location";
console.log(user[key]);

// accessing object methods
user.sayName();
user.sayLocation(5829);
user.loopBlogTitle(": ");
user.logs();
user.olat();

console.log(user);

const userOne = {
    name: "shaun",
    age: 54
}

const userTwo = userOne;
console.log("userOne: ", userOne);
console.log("userTwo: ", userTwo);

userOne.name = "Fred";
console.log("userOne: ", userOne);
console.log("userTwo: ", userTwo);

const userThree = [1, 2, 3, 4, 5];
const userFour = userThree;

console.log(userThree, userFour);
userThree[2] = 9;
console.log(userThree, userFour);

const userFive = [6, 7, 8, 9, 10];
const userSix = [...userFive];

console.log(userFive, userSix);
userFive[2] = 23;
console.log(userFive, userSix);
