// Declaring the sherlock variable
let sherlock = {
  surname: "Holmes",
  address: {
    city: "London",
  },
};

// Declaring the john variable
let john = {
  surname: "Watson",
  address: sherlock.address,
};

// Changing the properties
john.surname = "Lenon";
john.address = { city: "Malibu" };

// Or
john = {
  surname: "Lenon",
  address: {
    city: "Malibu",
  },
};

console.log(sherlock.surname);
console.log(sherlock.address.city);
console.log(john.surname);
console.log(john.address.city);
