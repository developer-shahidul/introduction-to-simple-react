//
import { addToLS, getStorageCart } from "../../../utilities/LucalStorage";
import Bottle from "../Bottle/Bottle";
import { useEffect, useState } from "react";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  useEffect(() => {
    fetch("Bottle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  //load cart from localStorage

  useEffect(() => {
    console.log("called the use Effect", bottles.length);

    if (bottles.length > 0) {
      const storageCart = getStorageCart();
      console.log(storageCart);
    }
  }, [bottles]);

  //

  const [purchasehandlerBottle, setPurchaseHandlerBottle] = useState([]);

  const handleAddToCart = (bottle) => {
    const newHandleAddToCart = [...purchasehandlerBottle, bottle];
    // console.log(bottle);
    setPurchaseHandlerBottle(newHandleAddToCart);
    addToLS(bottle.id);
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
