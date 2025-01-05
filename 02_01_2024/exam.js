// Destructuring by function

const person = {
        name: "John",
        email: "Dx7Ss@example.com",
        age: 30,
        city: "New York"
    };
    const { name, email, age, city } = person;
    
    
    // console.log(name);
    // console.log(email);
    // console.log(age);
    // console.log(city);
printPerson(person);
function printPerson({name, email}) {
    return console.log(name, email);
}


//object destructuring
const address = {
    street: "123 Main St",
    city_name: "New York",
    state: "NY",
    zip: "10001"
  };
  
  const { street, city_name, state, zip } = address;
  
  console.log(street);
  console.log(city_name);
  console.log(state);
  console.log(zip);

  //object by merge
  const person1 = {
    name: "John",
    email: "Dx7Ss@example.com",
    age: 30,
    city: "New York"
  };
  
  const address1 = {
    street: "123 Main St",
    city_name: "New York",
    state: "NY",
    zip: "10001"
  };
  
  const person2 = { ...person1, ...address1 };
  
  console.log(person2);

  // array destructuring merge
  const numbers = [1, 2, 3, 4, 5];
  const [first, second, ...rest] = numbers;
  
  console.log(first);
  console.log(second);
  console.log(rest);

  // spread operator
  const person3 = {
    name: "John",
    email: "Dx7Ss@example.com",
    age: 30,
    city: "New York"
  };
  
  const address2 = {
    street: "123 Main St",
    city_name: "New York",
    state: "NY",
    zip: "10001"
  };
  
  const person4 = { ...person3, ...address2 };
  
  console.log(person4);

  // array merge using function 
  const numbers1 = [1, 2, 3, 4, 5];
  const [first1, second1, ...rest1] = numbers1;
  printNumbers(numbers1)
function printNumbers([first1, second1, ...rest1]) {
    return console.log(first1, second1, rest1);
}