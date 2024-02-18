/**
 * String declaration and predefined methods...
 */

// Normal Declaration
let str = "Sabari Vivek";

// Declaration using new keyword...
let newStr = new String("Automation Testing");

// Finding the character in the specified index...
console.log(str.charAt(3));

// Merging two string...
console.log(str.concat(" Testing"));
console.log(str.concat(" Testing").concat(" Practice"));

// Replacing the new value...
console.log(str.replace("Vivek", "Anu"));

// Substring in String...
console.log(str.substring(7));
console.log(str.substring(2, 5));

// To lowercase() and uppercase()...
console.log(str.toLowerCase());
console.log(str.toUpperCase());

// Spliting the string...
let newString = "I am learning new programming language";
let splittedString = newString.split(" ");

for (temp of splittedString) {
    console.log(temp);
}

// Trimming the spaces...
let trimString = "    Sabari Vivek    ";
console.log(trimString.trim());

// --------------------------------------------

/**
 * Number declaration and predefined methods...
 */

// Normal Declaration...
let num = 10;

// Declaration using new keyword...
let newNum = new Number(100);

// Checking the stored value is int or not...
let x = 10;
let y = 10.45;
let z = 's';

console.log(Number.isInteger(x));
console.log(Number.isInteger(y));
console.log(Number.isInteger(z));

// Converts string to interger...
let intString = "12345";
console.log("Before Conversion : " + typeof (intString));
console.log("After Conversion : " + typeof (Number.parseInt(intString)));

// Converts string to interger...
let floatString = "123.45";
console.log("Before Conversion : " + typeof (floatString));
console.log("After Conversion : " + typeof (Number.parseFloat(floatString)));

// Converting integer to string...
let intToString = 456;
console.log("Before Conversion : " + typeof (intToString));
console.log("Before Conversion : " + typeof (intToString.toString()));