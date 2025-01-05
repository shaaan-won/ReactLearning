//Destructuring
var person = {
    name: "John",
    email: "Dx7Ss@example.com",
    age: 30,
    city: "New York"
  };
var { name, email, age, city } = person;
// const {name, email} = person;
// console.log(name);
// console.log(email);
// console.log(age);
// console.log(city);

printPerson(person);
function printPerson({name, email, age, city}) {
    console.log(name);
    console.log(email);
    console.log(age);
    console.log(city);
  }

// Array Destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, third] = numbers;

console.log(first);
console.log(second);
console.log(third);

// Object Destructuring
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2022
  };
  
  const { make, model, year } = car;
  
  console.log(make);
  console.log(model);
  console.log(year);
  
  // Function Destructuring
  var getPerson = () => {
    return {
      name: "John",
      email: "Dx7Ss@example.com",
      age: 30,
      city: "New York"
    };
  };
  
  var { name, email, age, city } = getPerson();
  
  console.log(name);
  console.log(email);
  console.log(age);
  console.log(city);
  
  // Nested Destructuring
  var person = {
    name: "John",
    email: "Dx7Ss@example.com",
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001"
    }
  };
  
  var { name, email, address: { street, city, state, zip } } = person;
  
  console.log(name);
  console.log(email);
  console.log(street);
  console.log(city);
  console.log(state);
  console.log(zip); 