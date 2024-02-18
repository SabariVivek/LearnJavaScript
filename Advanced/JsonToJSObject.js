/**
 * Converting the Json object to Javascript object...
 */

let json = '{"name": "John", "age": 30, "city": ["New York", "Chennai"]}';

// Parsing Json to Javascript object...
let jsObject = JSON.parse(json);

// Printing Json data...
console.log(json)
console.log(json.name); // Undefined, due to Json...

// Printing Javasript object...
console.log(jsObject);
console.log(jsObject.name);
console.log(jsObject.city[0])