let fruits = ["Apple", "Banana", "Orange", "Jack Fruit", "Strawberry"];

// Converting the array to string...
console.log(fruits.toString());

// Joining an array with the user defined delimeter...
console.log(fruits.join()); // By default it used ','
console.log(fruits.join("*"))

// Removing last element using pop()...
console.log(fruits.pop());
console.log(fruits);

// Adding the element in the last using push();
fruits.push("Kiwi");
console.log(fruits);

// Removing first element using shift()...
fruits.shift();
console.log(fruits);

// Adding first element using unshift();
fruits.unshift("Watermelon");
console.log(fruits);

// Deleting elements from array...
delete fruits[1];
console.log(fruits);

// Merging two arrays using concat()...
let arr_1 = [10, 20];
let arr_2 = [30, 40];
let arr_3 = [50, 60];

arr_1 = arr_1.concat(arr_2); // Immutable...
arr_2 = arr_2.concat(arr_1, arr_3); // Immutable...
console.log(arr_1);
console.log(arr_2);
console.log(arr_3);

// Substring in array using slice...
let slicingArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("Slicing from 2nd index : " + slicingArr.slice(2));
console.log("Slicing between 2nd and 4th index : " + slicingArr.slice(2, 5));

// Sorting an array...
console.log(fruits.sort());

// Reversing the array...
console.log(fruits.reverse());