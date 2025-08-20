//
import {
  addToLS,
  getStorageCart,
  removeFromLS,
} from "../../../utilities/LucalStorage";
import Bottle from "../Bottle/Bottle";
import Cart from "../Cart/Cart";

import { useEffect, useState } from "react";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cartBottles, setCartBottles] = useState([]); // Cart state আলাদা

  useEffect(() => {
    fetch("Bottle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  //load cart from localStorage

  useEffect(() => {
    // console.log("called the use Effect", bottles.length);

    if (bottles.length > 0) {
      const storageCart = getStorageCart();
      // console.log(storageCart, bottles);
      const saveCart = [];
      for (const id of storageCart) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          saveCart.push(bottle);
        }
        setCartBottles(saveCart);
      }
      // console.log("save cart", saveCart);
    }
  }, [bottles]);

  //

  const handleAddToCart = (bottle) => {
    const newHandleAddToCart = [...cartBottles, bottle];
    // console.log(bottle);
    setCartBottles(newHandleAddToCart);
    addToLS(bottle.id);
  };

  //remove cart

  const handleRemoveFromCart = (id) => {
    // visual cart remove
    const remainingCart = cartBottles.filter((bottle) => bottle.id !== id);
    setCartBottles(remainingCart);
    // remove from LS
    removeFromLS(id);
  };

  return (
    <div>
      <h2>Bottle Here : {bottles.length}</h2>
      <div>
        <Cart
          handleRemoveFromCart={handleRemoveFromCart}
          cart={cartBottles}
        ></Cart>
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
