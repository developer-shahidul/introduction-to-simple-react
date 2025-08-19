import { useEffect, useState } from "react";
import "./App.css";
import Watch from "./assets/Component/Watch/Watch";

function App() {
  const [watches, setwatches] = useState([]);
  //Watches.json file thek api data newa hoice //json stringify
  // public folder a json file rakha
  // useEffect(() => {
  //   fetch("Watches.json")
  //     .then((res) => res.json())
  //     .then((data) => setwatches(data));
  // }, []);

  //github a json file baniye
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/developer-shahidul/watches-data/refs/heads/main/watches.json"
    )
      .then((res) => res.json())
      .then((data) => setwatches(data));
  }, []);

  //raw.githubusercontent.com/developer-shahidul/watches-data/refs/heads/main/watches.json
  //fack data //lucal data
  // const watches = [
  //   { id: 1, name: "Apple watch", price: 2000 },
  //   { id: 2, name: "Samsu watch", price: 2000 },
  //   { id: 3, name: "MI watch", price: 2000 },
  // ];

  // const watches = [
  //   {
  //     id: 1,
  //     name: "Apple Watch Series 9",
  //     price: 399,
  //   },
  //   {
  //     id: 2,
  //     name: "Samsung Galaxy Watch 6",
  //     price: 349,
  //   },
  //   {
  //     id: 3,
  //     name: "Amazfit GTR 4",
  //     price: 199,
  //   },
  //   {
  //     id: 4,
  //     name: "Fitbit Versa 4",
  //     price: 229,
  //   },
  //   {
  //     id: 5,
  //     name: "Huawei Watch GT 4",
  //     price: 249,
  //   },
  // ];

  return (
    <>
      <h1>Vite + React</h1>
      {/* loop throw kore chalabo  */}
      {watches.map((watch, index) => (
        <Watch key={`${watch.id}-${index}`} watch={watch}></Watch>
      ))}
    </>
  );
}

export default App;
