// 1 . json
const students = {
  name: "sakib",
  age: 12,
  movies: ["king Khan", "dhakar mastan"],
};
//json stringify
const studentsJson = JSON.stringify(students);
console.log(studentsJson);

//objcet
const studentObject = JSON.parse(studentsJson);
console.log(studentObject);

// 2. fetch
// fetch("")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// 3. keys , value
const keys = Object.keys(students);
const values = Object.values(students);
console.log(keys);
console.log(values);

// 4 . for
const number = [12, 45, 78, 85, 4, 58];
number.forEach((num) => console.log(num)); // return na korte chaile
number.map((num) => num * 2);

// for of on array like object
// loop on an object using for in

// add and remove from and array
const products = [
  { name: "laptop", price: 3200, brand: "len", color: "silver" },
  { name: "phone", price: 7000, brand: "htc", color: "golden" },
  { name: "watch", price: 3000, brand: "casio", color: "yellow" },
  { name: "sunglass", price: 300, brand: "ray", color: "black" },
  { name: "camera", price: 9000, brand: "canon", color: "gray" },
];

const newProduct = { name: "webcame", price: 710, brand: "lal" };

//copy products array and then add new product
const newProducts = [...products, newProduct];
console.log(newProducts); //product add kora holo

// creat a new array without one specific item
// remove phone means creat a new array without the phone
const remaining = products.filter((item) => item.name !== "phone");
console.log(remaining); // jegolu phone na oi gulu nibe
