/**
 * Overriding is the concept of using the same method name with the same parameters in different class...
 */

class Father {

    show() {
        console.log("I am in \"Father\" class")
    }
}

class Son extends Father {

    show() {
        console.log("I am in \"Child\" class")
    }
}

let obj = new Son();
obj.show();