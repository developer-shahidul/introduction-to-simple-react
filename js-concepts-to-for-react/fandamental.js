//////////////
//1. how to declare a variable using let and const
const fatherName = "Kolimulla"; // ata poribortito hobe na tai const
let seson = "rainy"; // poribortito hobe tai let
seson = "winter";

//2. condition
// 6 basic condtions : >,<, ===, !==, <= ,>=
// multiple conditon : && , || (and ,or)
if (fatherName === "kolimulla" || seson === "rainy") {
} else if (fatherName === "Kolimulla") {
} else {
}

//3. array declare
// index,index aer man '0' theke suru hoi
// length, push,
const numbers = [78, 95, 48, 16, 32];
// numbers[0] = 56;

//4. for ..... loop

for (let i = 0; i < numbers.length; i++) {
  number = numbers[i];
  // console.log(numbers);
}

//5. function
function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}
const output = multiply(12, 35);
// console.log(output);

// 6. object
// ways to access property by name
const students = {
  name: "sakib",
  age: 12,
  movies: ["king Khan", "dhakar mastan"],
};

const myVariable = "age";

console.log(students.age); // direct by property
console.log(students.movies[0]);
console.log(students["age"]); // access via property name string
console.log(students[myVariable]); //access via  property  name in a variable
