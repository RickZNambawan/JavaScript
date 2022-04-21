/* Object-Oriented Programming */

/* Difference between Object Literals vs. Constructor Function */
// In Constructor function can provide private members as well as public members (encapsulation). 
// In Object Literal, they are all public.
// Object Literal - if you want single instance of object.
// Constructor Function - if you want multiple instances of object.

/* Constructor Function */
// Note: Constructor Function is better than Class in JavaScript constructor ...
// function if you want to add behaviour to your object, 
// and add methods to the object during Constructor or give your class a prototype.
// use this if you need multiple instances of your object. 

function Person (name, age, salary, radius) {
    // all properties and methods with 'this' keyword will be public
    // all regular properties and methods will be private
    let salaryRaise = 500; // private
    this.name = name; // public
    this.age = age; 
    this.salary = salary;
    this.addSalary = () => this.salary += salaryRaise;
    this.speakInfo = () => console.log(this.name, this.age, this.salary);
    // when key and value is the same name, state as it is.
    // only in object literal
    this.myList = {
        radius, 
    };
}

let person1 = new Person("Fred", 22, 5000, 1);
console.log(person1.salary);
person1.speakInfo();
person1.addSalary();
console.log(person1.salary);
console.log(person1.salaryRaise); // 'undefined' because salaryRaise is private
console.log(person1.myList.radius);

/* Factory Function */
// this is the same as the constructor but you can't use 'this' keyword
// constructor is better than this factory function
// outdated 

function animal(name, breed) {
    return {
        breed,
        roar: function() {
            console.log(name);
            console.log("ROAR!");
        }
    };
}

let myAnimal = animal("pwetpwet", "chiwawa")
console.log(myAnimal.breed);
myAnimal.roar();

/* Adding/Deleting properties of an object */
function Employee(empName, empAge, salary) {
    this.overtime = 50;
    this.salary = salary
    this.empName = empName;
    this.empAge = empAge;
}

// it can only add properties on the specific instance but not the object itself.
// this is a bad practice to separate behaviour to properties
let emp1 = new Employee("Fred", 22, 200);
emp1.computeSalary = function() {
    return this.salary = this.salary * this.overtime;
}
console.log(emp1);
console.log(emp1.computeSalary());

// it has error since only the emp1 has the added property of 'computeSalary()'
let emp2 = new Employee("Marian", 24);
// console.log(emp2.computeSalary()); 

/* Getter and Setter */
function Circle() {
    let defaultLocation = { x: 3, y: 0};
    
    this.draw = function() {
        console.log("Draw!");
        console.log(defaultLocation.x);
    }
    
    // getter
    this.getDefaultLocation = function() {
        return defaultLocation;
    }

    // setter
    this.setDefaultLocation = function(value) {
        return defaultLocation.x = value;
    }

}

const circle = new Circle();
circle.draw();
console.log(circle.getDefaultLocation());
circle.setDefaultLocation(5);
console.log(circle.getDefaultLocation().x);





























