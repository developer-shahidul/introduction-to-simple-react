//
import Proptypes from "prop-types";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  //   console.log(cart);
  return (
    <div>
      <h3>Cart purchase: {cart.length}</h3>
      <div className="cart-container">
        {cart.map((bottle, index) => (
          <div key={`${bottle.id}-${index}`}>
            <img src={bottle.img}></img>
            <button onClick={() => handleRemoveFromCart(bottle.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

Cart.proptypes = {
  Cart: Proptypes.array.isRequired,
  handleRemoveFromCart: Proptypes.func.isRequired,
};

export default Cart;
