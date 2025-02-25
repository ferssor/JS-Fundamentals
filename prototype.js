let human = {
  teeth: 32,
};

let gwen = {
  __proto__: human, // This is a prototype, sharing the human property
  age: 19,
};

gwen.teeth = 31;

console.log(gwen.teeth);
console.log(human.teeth);

const spidermanPrototype = {
  lookOut() {
    console.log("My Spider-Sense is acting!");
  },
};

let miles = {
  __proto__: spidermanPrototype,
};

miles.lookOut();
