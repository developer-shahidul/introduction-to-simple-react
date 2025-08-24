import { useEffect, useState } from "react";
import Bottle2 from "./Bottle2";
import "../assets/component/Bottle/Bottle.css";
import Cart2 from "./Cart2";
import { addToLS, getStorageCart, removeFromLs } from "./lucalStorage2";

const Bottlese = () => {
  const [bottle, setBottles] = useState([]);
  const [cartBottle, setCartBottle] = useState([]);

  useEffect(() => {
    fetch("Bottle.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  // ⬇️ localStorage থেকে cart restore করা

  useEffect(() => {
    if (bottle.length > 0) {
      const storedCart = getStorageCart();
      const saveCart = [];
      for (const id of storedCart) {
        const foundBottle = bottle.find((bottle) => bottle.id === id);
        if (foundBottle) {
          saveCart.push(foundBottle);
        }
      }

      setCartBottle(saveCart);
    }
  }, [bottle]);

  const handlerPurchasebtn = (bottle) => {
    const newHandlerPurchaseBtn = [...cartBottle, bottle];
    // console.log(bottle);
    setCartBottle(newHandlerPurchaseBtn);
    addToLS(bottle.id);
  };

  // remove Cart
  const handlerRemoveBottle = (id) => {
    const remainingCard = cartBottle.filter((item) => item.id !== id);
    setCartBottle(remainingCard);
    removeFromLs(id);
  };

  return (
    <div>
      <h3>Bottle Here : {bottle.length}</h3>
      <div>
        <h3>Cart : {cartBottle.length}</h3>
        <Cart2
          cart={cartBottle}
          handlerRemoveBottle={handlerRemoveBottle}
        ></Cart2>
      </div>
      <div className="bottles-container">
        {bottle.map((bottle) => (
          <Bottle2
            key={bottle.id}
            handlerPurchasebtn={handlerPurchasebtn}
            bottle={bottle}
          ></Bottle2>
        ))}
      </div>
    </div>
  );
};

export default Bottlese;
