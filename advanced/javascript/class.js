/* Class */
// classes in javascript is just a syntactic sugar for creating object.
// use only for modularity or if you want to export this file as a module

// Parent Class
class CoolPerson {
    constructor(name) {
        this.walk();
        console.log("My Name is: " + name);
    }

    walk() {
        console.log("I'm Walking!");
    }
}

// class inheritance
// Subclass
class Teacher extends CoolPerson {
    constructor(name, age) {
        super(name); // constructor of the Parent Class
        this.name = name;
        this.age = age;
    }

    teach() {
        console.log("I'm teaching!" + "I'm " + this.age);
    }

    deleteUser(person) {
        personsList = personsList.filter(p => {
            return p.name !== person.name;
        })
    }
}

let me = new Teacher("Fred", 22);
let you = new Teacher("Marian", 23);
let admin = new Teacher("Admin", 25)
let personsList = [me, you];

console.log("Name: " + me.name);
console.log("Name: " + you.name);

console.log(personsList)
admin.deleteUser(you);
console.log(personsList)

me.walk();
me.teach();

// another example
class User {
    overtimeIncentive = 500; // this is public field
    #introduction = "\nHi! Welcome to the Earth! "; // this is a private field
    #score = 0;
    
    // all of the fields on the constructor are public field
    constructor(name, email) {
        this.name = name; 
        this.email = email;
    }

    // this is a private method
    #doSomething() {
        console.log("Something ..");
    }

    speak() {
        this.#doSomething();
        console.log(this.#introduction + "My name is: " + this.name);
    }

    login() {
        console.log(this.name + " is logged in!");
        return this;
    }
    
    logout() {
        console.log(this.name + " is logged out!");
    }

    updateScore() {
        this.#score++;
        console.log(this.email + " score is now: ", this.#score);
        return this;
    }


    setName(name) {
        this.name = name;
        return this;
    }

    setEmail(email) {
        this.email = email;
        return this;
    }
}

const firstUser = new User("Fred", "rickzisback@gmail.com");
firstUser.speak();
console.log(firstUser.introduction); // undefined because this is a private field.
console.log(firstUser.name);
console.log(firstUser.email);
firstUser.logout();

/* Method Chaining */
// the methods should return 'this' to allow method chaining
firstUser.login().updateScore().updateScore(); 
firstUser.setName("Marian").setEmail("marianprdgn@gmail.com");
firstUser.speak();
console.log(firstUser.email);
