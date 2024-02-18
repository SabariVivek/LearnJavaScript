/**
 * Prototype is an object that is associated with every function & Object by default...
 * 
 * If we want to add new properties at later stage to a function/class, we can take the help of prototype...
 */

// Example 1...

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
};

let person1 = new Person('Sabari', 24);
let person2 = new Person('Vivek', 25);

person1.sayHello();
person2.sayHello();

// -----------------------------------------------------------------------------

// Example 2...

class ProtoTypeExample {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

ProtoTypeExample.prototype.experience = "4.5 years";

ProtoTypeExample.prototype.print = function () {
    console.log("My name is " + this.name);
    console.log("My age is " + this.age);
    console.log("I am having " + this.experience + " of experience");
}

let obj1 = new ProtoTypeExample("Anu", "26");
obj1.print();

let obj2 = new ProtoTypeExample("Rocky", "14");
obj2.print();