/**
 * Encapsulation is defined as the wrapping up of data under a single unit...
 * 
 * It is the mechanism that binds together code and the data...
 * 
 * The JavaScript Encapsulation is the process of binding the data (i.e., Variables) 
 *      with the functions acting on that data...
 */

class Encapsulation {

    constructor() {
        let name, age;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }
}

let obj = new Encapsulation();

obj.setName("Sabari Vivek");
obj.setAge(25);

console.log(obj.getName());
console.log(obj.getAge());