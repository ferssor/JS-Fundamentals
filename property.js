// Property and variables are different, is like a wire, below we have an example
let sherlock = {
  surname: "Holmes",
  address: {
    city: "London",
  },
};

let john = {
  surname: "Watson",
  address: sherlock.address,
};

john.surname = "Lenon";
john.address.city = "Malibu"; // This action change the value of city property in sherlock object

console.log(sherlock.surname); // To read the property value we can use the dot notation
console.log(sherlock.address.city);
console.log(john.surname);
console.log(john.address.city);
