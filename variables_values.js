let reaction = "Wow";
reaction[0] = "1"; // We cannot change the primitve values, because primitive values are immutable!
console.log(reaction);

let arr = []; // Non primitve
let str = "Hello"; // Primitve

let pet = "Narwhal";
pet = "The Kraken";
console.log(pet);

// How variable works
// The left should be a "wire"
// The right side should be an expression
let wire = "this is my value"; // This is a literal expession

// Reading the variable value, this is a variable like a value
console.log(pet);

function double(x) {
  return (x = x * 2);
}

let money = 10;
double(money); // Discovery the value
console.log(money);
let result = double(money); // Will store the double function return on result variable
console.log(result);
