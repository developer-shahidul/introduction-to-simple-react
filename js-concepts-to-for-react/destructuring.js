// 1. array destructuring
const numbers = [42, 58];
// const num1 = numbers[0];
// const num2 = numbers[1];

// const [num1, num2] = [42, 58]; // short kore

const [num1, num2] = numbers;

// console.log(num1, num2);

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}
// console.log(boxify(90, 34));
///
// const [first, second] = [90, 65];
const [first, second] = boxify(90, 65); // call hoye gese
console.log(first, second);

const students = {
  name: "sakib",
  age: 12,
  movies: ["king Khan", "dhakar mastan"],
};
const [firstMovies, secondMovies] = students.movies;
console.log(firstMovies); // "king Khan"
console.log(secondMovies); // "dhakar mastan"

// object destructuring
// object aer khetre serial mater na //array aer khetre serial mater , 1 ta 1 tar jonno , 2 o ta 2 o tar jonno
// const name = { name: "alo", age: 25 };
const { name, age } = { name: "alo", age: 25 }; // object hole object , array hole array
const { id, salary } = { id: 10, name: "alo", salary: 24000, age: 25 };
console.log(name, age);
console.log(id, salary);

//

const employee = {
  ide: "Vs Code",
  designation: "developer",
  machine: "Mac",
  language: ["html", "css", "js"],
  specification: {
    height: 66,
    weight: 67,
    address: "kumarkhali",
    drink: "water",
    watch: {
      color: "black",
      price: 5000,
      brand: "casio",
    },
  },
};
const { ide, machine } = employee; //employee aer modde aer 2 ta ace
const { weight, address } = employee.specification;
const { brand } = employee?.specification?.watch;
console.log(ide, machine);
console.log(weight, address);
console.log(brand);

//না থাকলে undefined রিটার্ন করবে (এবং error দিবে না)।
// .specification?. → specification প্রোপার্টি থাকলে তবেই পরের অংশে যাবে।
// .watch → watch অবজেক্ট পেলে তারপর brand destructuring করবে।
