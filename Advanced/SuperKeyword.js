/**
 * It is used to call the parent objects if the both parent and child objects are same...
 */

class Car {

    constructor(maxSpeed) {
        this.maxSpeed = maxSpeed;
    }

    print() {
        console.log("Speed : " + this.maxSpeed);
    }
}

class Volvo extends Car {

    constructor(maxSpeed, makeYear) {
        super(maxSpeed); // Calling parent constructor...
        this.makeYear = makeYear;
    }

    print() {
        super.print(); // Calling parent method...
        console.log("Volvo Make : " + this.makeYear);
    }
}

let obj = new Volvo(200, 2024);
obj.print();