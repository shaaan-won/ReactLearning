//classes in es6
class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    
        greet() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }
    
    const person1 = new Person("Shawon islam", 30);
    person1.greet();

    // class Model extends Person {
    //     constructor(name, age) {
    //         super(name, age);
    //         this.name = name;
    //         this.age = age;
    //     }
    //     sayHi() {
    //         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    //     }
    // }
    
    // const model1 = new Model("Shawon islam", 30);
    // model1.sayHi();

class Car extends Person {
        constructor(name, age, make, model, year) {
            super(name, age);
            this.make = make;
            this.model = model;
            this.year = year;
        }
    
        drive() {
            console.log(`My name is ${this.name} and I am ${this.age} years old. I am Driving a ${this.make} ${this.model} from ${this.year}.`);
        }
    }
    const car1 = new Car("Shawon islam", 30, "Toyota", "Camry", 2022);
    car1.drive(); 

//arrow function
    // let Hello = function (){
    //     return "Hello world";
    // }
    // console.log(Hello());

    // let hello = () => {
    //     return "Hello world";
    // }
    // console.log(hello());
    let hello = (shawon)=>{
        return "Hello world "+ shawon;
    
    } 
    console.log(hello("Shawon islam"));

// VAriables in es6
    var name = "Shawon islam";
    var age = 30;
    console.log(name);
    console.log(age);

    const name1 = "Shawon islam";
    const age1 = 30;
    console.log(name1);
    console.log(age1);

//  Array methods in es6

    // array.forEach(callback(currentValue, index, array), thisArg);
    // array.map(callbackFunction(currentValue, index, array), thisArg);
    //array.filter(callback(currentValue, index, array), thisArg);
    //array.reduce(callback(accumulator, currentValue, index, array), initialValue);
    //array.reduceRight(callback(accumulator, currentValue, index, array), initialValue);
    //array.every(callback(currentValue, index, array), thisArg);
    //array.some(callback(currentValue, index, array), thisArg);
    //array.find(callback(currentValue, index, array), thisArg);
    //array.findIndex(callback(currentValue, index, array), thisArg);
    //array.flatMap(callback(currentValue, index, array), thisArg);
    //array.flat(depth);

    
    const numbers = [1, 2, 3, 4, 5];
    const mappedNumbers = numbers.map((number) => number * 2);
    console.log(mappedNumbers);
    
    const numbers1 = [1, 2, 3, 4, 5];
    const sum = numbers1.reduce((total, number) => total + number, 0);
    console.log(sum);
    
    const numbers2 = [1, 2, 3, 4, 5];
    const evenNumbers = numbers2.filter((number) => number % 2 === 0);
    console.log(evenNumbers);
    
    const numbers3 = [1, 2, 3, 4, 5];
    const squaredNumbers = numbers3.map((number) => number * number);
    console.log(squaredNumbers);
    
    const numbers4 = [1, 2, 3, 4, 5];
    const oddNumbers = numbers4.filter((number) => number % 2 !== 0);
    console.log(oddNumbers);
    
        const numbers5 = [1, 2, 3, 4, 5];
        const filteredNumbers = numbers5.filter((number) => number > 2);
        console.log(filteredNumbers);
    
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
const numbers6 = [1, 2, 3, 4, 5];
const [first, second, third] = numbers6;

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
// Array Destructuring calculation
  function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
  
    return [add, subtract, multiply, divide];
  }
  
  const [add, subtract, multiply, divide] = calculate(4, 7);
  
  console.log(add);
  console.log(subtract);
  console.log(multiply);
  console.log(divide);
//spread operator

const numbers7 = [1, 2, 3, 4, 5];
const newNumbers = [...numbers7, 6, 7, 8];

console.log(newNumbers);

const people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 40 },
  ];
  
  const newPeople = [...people, { name: "Alice", age: 35 }];
  
  console.log(newPeople);

//modules in es6
//  export var car0 = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2022
//   };
  
//   export var car4 = {
//     make: "Honda",
//     model: "Civic",
//     year: 2021
//   };
//   const message = () => {
//     const name = "Jesse";
//     const age = 40;
//     return name + ' is ' + age + 'years old.';
//   };
  
//   export default message;

//import in es6
// import { car0, car4 } from "./module.js";
// console.log(car0);
// console.log(car4);
// const message = () => {
//     const name = "Jesse";
//     const age = 40;
//     return name + ' is ' + age + 'years old.';
//   };
//   console.log(message());


