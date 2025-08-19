//
import Bottle from "../Bottle/Bottle";
import { useEffect, useState } from "react";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  useEffect(() => {
    fetch("Bottle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  //
  const [purchasehandlerBottle, setPurchaseHandlerBottle] = useState([]);

  const handleAddToCart = (bottle) => {
    const newHandleAddToCart = [...purchasehandlerBottle, bottle];
    // console.log(bottle);
    setPurchaseHandlerBottle(newHandleAddToCart);
  };

  return (
    <div>
      <h2>Bottle Here : {bottles.length}</h2>
      <div>
        <h2>Bottle purchase : {purchasehandlerBottle.length}</h2>
      </div>

      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handleAddToCart={handleAddToCart}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
