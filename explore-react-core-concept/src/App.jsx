import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";
import BookStore from "./BookStore";
import Shopings from "./Shopings";

function App() {
  const actors = ["riyaz", "sakib", "maruf", "joshim", "sakil"];
  const books = [
    { id: 1, name: "Physics", price: 400 },
    { id: 2, name: "Chemisty", price: 300 },
    { id: 3, name: "Biology", price: 200 },
    { id: 4, name: "Matametics", price: 500 },
  ];

  const singers = [
    { id: 1, name: "Dr. mahfujur Rahman", age: 68 },
    { id: 2, name: "eva Rahman", age: 39 },
    { id: 3, name: "shovro Dev", age: 58 },
    { id: 4, name: "prithok bai", age: 28 },
  ];

  const shoping = [
    { id: 1, name: "shirt", price: 500, size: "xl" },
    { id: 2, name: "pant", price: 800, size: "x" },
    { id: 3, name: "t-shirt", price: 600, size: "xxl" },
    { id: 4, name: "shows", price: 700, size: 42 },
  ];
  return (
    <>
      <h1>Vite + React</h1>
      {shoping.map((shop) => (
        <Shopings shoping={shop}></Shopings>
      ))}

      <BookStore books={books}></BookStore>

      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}

      <Actor name={"Bappa raz"}></Actor>
      {actors.map((actors) => (
        <Actor name={actors}></Actor>
      ))}

      {/* 
      <Todo task="learn react" isdone={true}></Todo>
      <Todo task="explore core concepts" isdone={false}></Todo>
      <Todo task="try jsx" isdone={true}></Todo> 
      */}

      {/*
      <Device name="Laptop" price="55"></Device>
      <Device name="Mobile" price="17"></Device>
      <Device name="watch" price="3"></Device>

      <Person></Person>
      <Person></Person>
      <Person></Person>

      <Student></Student>
      <Student grade="7" score="99"></Student>
      <Student grade="10" score="69"></Student>

      <Developer></Developer> 
      */}
    </>
  );
}

// function Device(props) {
//   // console.log(props);
//   return (
//     <h2>
//       This is device: {props.name} price:{props.price}
//     </h2>
//   );
// }

// function Person() {
//   const age = 25;
//   const money = 20;
//   const person = { name: "sakib", age: 12 };
//   return (
//     <h3>
//       I am {person.name} with age: {age + money}
//     </h3>
//   );
// }

// // const { grade, score } = { grade: "7", score: "99" };
// function Student({ grade = 5, score = 4 }) {
//   console.log(grade, score);
//   return (
//     <div className="student">
//       <h3>This is a Student</h3>
//       <p>Class:{grade}</p>
//       <p>Score:{score}</p>
//     </div>
//   );
// }
// function Developer() {
//   return (
//     <div
//       style={{
//         padding: "20px",
//         margin: "20px",
//         border: "2px solid purple",
//         borderRadius: "10px",
//       }}
//     >
//       <h5>Devo devo</h5>
//       <p>Coding:</p>
//     </div>
//   );
// }
export default App;
