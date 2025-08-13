//return korbe tai variable a declare kora hoice map a
const products = [
  { name: "laptop", price: 3200, brand: "lenovo", color: "silver" },
  { name: "phone", price: 7000, brand: "Iphone", color: "golden" },
  { name: "watch", price: 3000, brand: "casio", color: "yellow" },
  { name: "sunglass", price: 300, brand: "ray", color: "black" },
  { name: "camera", price: 9000, brand: "canon", color: "gray" },
];
// 1. map
const brands = products.map((product) => product.brand);
console.log(brands);

//2. forEach
products.forEach((product) => console.log(product.color));
products.forEach((product) => {
  console.log(product.color);
});

//3.filter
const checp = products.filter((product) => product.price <= 5000);
console.log(checp);
const specificName = products.filter((product) => product.name.includes("n"));
console.log(specificName); // jar modde n ace tare dew

//4. find
const special = products.find((product) => product.name.includes("n"));
console.log(special); // jar modde n tar modde sudu 1th ta dew
