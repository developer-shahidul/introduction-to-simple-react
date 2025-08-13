//
// true = almas, true , 12,{},[]
// false= '', 0 , false ,undefined, null

let myVar = 5;
// check any Thuthy
if (myVar) {
  myVar = myVar * 100;
} else {
  myVar = 0;
}
console.log(myVar);

let myMOney = 50;
// you check negative or falsy anything
if (!myMOney) {
}

//
const money = 800;
let food;
if (money > 100) {
  food = "biryani";
} else {
  food = "cha biscuits";
}
// tarnary
let food2 = money > 100 ? "biryani" : "cha biscuits";
console.log(food2);

let drink = money > 100 && myVar > 100 ? "coke" : "filter Pani khaw";
console.log(drink);

//Number to strin coversion
const num1 = 52;
console.log(num1);
const numstr = num1 + ""; // string hobe
console.log(numstr);

// string to number
const input = "560";
const inputNumber = +input;
console.log(inputNumber);

//judi return na kori // important
let isActive = true;
const ShowUser = () => console.log("disPlayUser");
const hideUser = () => console.log("hideUser");
isActive ? ShowUser() : hideUser();

//use && if the left side is true then right side will be executed
isActive && ShowUser(); // bansite true hole dan site check korbe// 2 tai true hote hobe

//use || if the left side is false then right side will be executed
isActive || hideUser();

//toggle boolean
isActive = !isActive;
// judi ata false hoi taile true
