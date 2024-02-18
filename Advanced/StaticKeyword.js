class StaticKeyword {

    static a = 10;
    b = 20;

    static method_1() {
        console.log("I am in static method...")
    }

    method_2() {
        console.log("I am in non static method...")
    }
}

// We can call static objects using class name...
console.log("Static Variable : " + StaticKeyword.a);
StaticKeyword.method_1();

// We need to create an object to call non static objects...
let obj = new StaticKeyword();
console.log("Non Static Variable : " + obj.b);
obj.method_2();