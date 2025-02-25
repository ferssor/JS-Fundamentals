// Values
console.log(typeof 2);
console.log(typeof "Hello");
console.log(typeof undefined);

// Functions
console.log({});
console.log([]);
console.log((x) => x * 2);

// Data types
// Primitive values
let type;
let typeByConstructor;
type = undefined; // Without value will return undefined
type = null; // Used to demonstrate unavailable value
type = false; // Boolean type -> true or false
typeByConstructor = new Boolean(true);
type = 1; // Numeric type
typeByConstructor = new Number(10);
type = "Hello"; // String type
typeByConstructor = new String("World!");
type = Symbol(131415); // Symbol type

// Objects and Functions - Non-primitives values
let obj;
let objectByConstructor;
obj = {};
objectByConstructor = new Object({});
console.log(typeof {}); // Object
console.log(typeof []); // Object
console.log(typeof new Date()); // Object
console.log(typeof /\d+ /); // Object
console.log(typeof Math); // Object

// Objects are mutable, we can change the properties values
let rapper = {
  name: "Malicious",
};
rapper.name = "Malice"; // Dot notation
rapper["name"] = "No Malice"; // Bracket notation

// Function declaration
function doSomething() {
  // I will do...
}

// Call expression
const square = function (x) {
  return x * x;
};

// Arrrow function
const sub = (a, b) => a - b;

// In JS other types are objects
console.log(typeof []);
console.log(typeof new Date());
console.log(typeof /(hello|bye)/);

// Expressions
// Is an answer that JS can do,
// and JS will answer the expressions in the only way it knows how - with values.
console.log(2 + 2);
