//
const numbers = [78, 95, 48, 16, 32];
const students = {
  name: "sakib",
  age: 12,
  movies: ["king Khan", "dhakar mastan"],
};

// 1. template string
const about = `My name is ${students.name} age of ${students.age} has 
number ${numbers[2]} also like movies ${students.movies[0]}`;
console.log(about);

//2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = (num) => num + 65;
const isEven = (x) => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
// multyline arrow function
const doMath = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
};

// 3. spread oparator
const newNumber = [...numbers]; // ager numner copy kora hoice
// // creat a new array from an older array and na element
const currentNumber = [...numbers, 55];

numbers.push(99);
numbers.push(99);
numbers.push(99);
console.log(newNumber); //[78, 95, 48, 16, 32]
console.log(numbers); //[78, 95, 48, 16, 32, 99, 99, 99]
console.log(currentNumber); //[78, 95, 48, 16, 32, 55]
