/**
 * JavaScript arrays are used to store multiple values in single variable...
 * An array is a special variable, which can hold more than one value at a time...
 * Array itself is basically a Object in JavaScript...  
*/

// Array Declaration...
let fruits = ["Apple", "Banana", "Orange", "Mango", "Strawberry"];
console.log(fruits);

// Array Declaration using new keyword...
let cars = new Array("Volvo", "BMW", "Audi", "Benz", "Hyundai")
console.log(cars);

// Printing the arrays using foreach...
cars.forEach(function (element) {
    console.log(element);
});

// Accessing single value using index...
console.log("Second Element in Array : " + cars[2]);

// Updating the value...
cars[2] = "Tata";
console.log("After updating the value : " + cars[2]);

// Storing heterogeneous data into Array...
let newArray = ["Sabari", 25, 4.5, 'A', true];
console.log(newArray);

// Storing Objects into Array...
let student_1 = {
    Name: "Sabari",
    Age: 25
}
let student_2 = {
    Name: "Vivek",
    Age: 24
}
let objInArray = [student_1, student_2];
console.log(objInArray);

// Printing specific value in object which is stored in array...
console.log(objInArray[0].Name);
console.log(objInArray[0].Age);

// Finding the length of an array...
console.log(objInArray.length)

// Iterating array using for loop...
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// Iterating array using for/of loop...
for (temp of cars) {
    console.log(temp);
}

// Finding type of an array...
console.log(typeof fruits);
console.log(typeof newArray);

// To find the array variable...
let nonArray = "Sabari";
console.log(Array.isArray(nonArray));
console.log(Array.isArray(fruits));