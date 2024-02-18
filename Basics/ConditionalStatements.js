/**
 * A block of statement which gets skipped based on the condition if it is false...
 * 
 * If-Else Block
 * Switch Statement
 */

// If-Else Block...
let a = 10;

if (a % 2 == 0) {
    console.log("Number is even...")
}
else {
    console.log("Number is odd")
}

// Switch Statement...
let day = "Sunday";

switch (day) {
    case "Sunday":
        console.log("SUNDAY");
        break;
    case "Monday":
        console.log("MONDAY");
        break;
    default:
        console.log("Given Day is a valid one...");
}