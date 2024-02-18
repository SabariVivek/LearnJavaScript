/**
 * Inheritance is the concept of aquiring the property of the parent class...
 */

class parent {
    a = 1;

    show() {
        console.log(this.a);
    }
}

class child extends parent {
    b = 2;

    print() {
        console.log(this.b);
    }
}

let obj = new child();

console.log(obj.a);
console.log(obj.b);

obj.show();
obj.print();