//
import Proptypes from "prop-types";
import "./Cart.css";

const Cart = ({ cart }) => {
  //   console.log(cart);
  return (
    <div>
      <h3>Cart purchase: {cart.length}</h3>
      <div className="cart-container">
        {cart.map((bottle, index) => (
          <img key={`${bottle.id}-${index}`} src={bottle.img}></img>
        ))}
      </div>
    </div>
  );
};

Cart.proptypes = {
  Cart: Proptypes.array.isRequired,
};

export default Cart;
