/**
 * In JavaScript, objects are one of the most important data types, 
 *      allowing you to store collections of key-value pairs. 
 */

var student = {
    Name: "Sabari D V",
    ID: 2142,
    Age: 25,
    Location: "Chennai"
}

// Retriving the value from the object...
console.log(student);
console.log(student["Age"]);
console.log(student.Location);

// Adding new property with the exisiting one...
student["Experience"] = 4.5
console.log(student.Experience);

// Updating exisiging property...
student.Age = 24;
console.log(student.Age);

// Removing the property from the objects...
delete student.Location;
console.log(student);

// For-In Loop...
for (let temp in student) {
    console.log(temp + " : " + student[temp]); // Property Name + Values...
}

// Object with Function...
var newStudent = {
    Name: "Sabari D V",
    ID: 2142,
    Age: 25,
    Location: "Chennai",
    Operation: function (a, b) {
        return a + b;
    }
}

console.log(newStudent.Name);
console.log(newStudent.Operation(10, 20));