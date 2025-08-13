//
const person = {
  name: "lal miya",
  profession: "traffic surgon",
  age: 39,
  addres: "shahabag",
  25: "summer",
  "son-name": "sunny",
};

//dot notation
const prof1 = person.profession;

//bracket notation
const prof2 = person["profession"]; //bracket a rakhle string dite hobe//
console.log(prof2);

//
const pName = "profession";
const prof3 = person[pName];
console.log(prof3);

//
// const son = person.25; // ata hobe na

const seson = person["25"];
console.log(seson);

// key string hole ababe korte hoi
const son = person["son-name"];
console.log(son);
