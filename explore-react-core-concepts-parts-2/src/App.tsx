import "./App.css";
import Counter from "./counter";
import Team from "./Team";
import Friends from "./Friends";

function App() {
  function handleClick() {
    alert("button clicked");
  }

  const handlerClick2 = () => {
    alert("button click 2");
  };
  // akhane bole disi num akta number// na dile o chole
  const addTofive = (num: number) => {
    alert(num + 5);
  };

  return (
    <>
      <h2>React Core Concept Part-2</h2>
      <Friends></Friends>
      <Team></Team>
      <Counter></Counter>

      {/* <button onclick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handlerClick2}>Click-2</button>
      <button
        onClick={() => {
          alert("well come to my page");
        }}
      >
        Third
      </button>
      <button onClick={() => addTofive(3)}>button five</button>
    </>
  );
}

export default App;
