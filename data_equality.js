// Same value equality
console.log(Object.is(2, 2)); // true
console.log(Object.is({}, {})); // false

let banana = {};
let cherry = banana;
let chocolate = cherry;
cherry = {};

console.log(Object.is(banana, cherry)); // false
console.log(Object.is(cherry, chocolate)); // false
console.log(Object.is(chocolate, banana)); // true

// Strict equality
console.log(2 === 2);

// Special cases
let lenght = 0 / 0; // NaN
let height = lenght / 2; // NaN
console.log(lenght === height); // false
console.log(Object.is(lenght, height)); // true

// Abstract equality
console.log([[]] == "");
console.log(true == [1]);
console.log(false == [0]);
