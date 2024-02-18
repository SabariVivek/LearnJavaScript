/**
 * Overloading is the concept of loading the same methods with different arguments...
 * 
 * Unlike other programming language, JS doesn't have built in overloading concept...
 */

class Overloading {

    show() {
        console.log("Show Method");
    }

    show(num) {
        console.log("Show Methods : " + num);
    }
}

let obj = new Overloading();
obj.show();
obj.show(20);

// In above program, the first show method would be redeclared with the args in memory, hence the empty method won't be considered in the memory...