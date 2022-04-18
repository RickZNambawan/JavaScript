/* Strings */
console.log("hello, world!");

let email = "rickzisback@gmail.com";
console.log(email);

/* String Concatenation */
let firstName = "Fred";
let lastName = "Castaneda";
let fullName = firstName + " " + lastName;
console.log(fullName);

/* Getting Characters */
let firstChar = fullName[3];
console.log(firstChar);

/* String properties */
// length - number of characters
let girlFriendName = "Marian Jane Perdigon";
console.log(girlFriendName.length);

/* String Methods */
// toLowerCase()
let girlFriendNameLower = girlFriendName.toLowerCase();
console.log(girlFriendNameLower);

// toUpperCase()
console.log(fullName.toUpperCase());

// indexOf()
let index = lastName.indexOf("t");
console.log(index)

// lastIndexOf()
console.log(fullName.lastIndexOf("e"));

// slice()
console.log(fullName.slice(0, 10));

// substr()
console.log(fullName.substring(3, 10))

// replace()
console.log(fullName.replace('e', 'a'))

// includes()
console.log(fullName.includes("Fred"));