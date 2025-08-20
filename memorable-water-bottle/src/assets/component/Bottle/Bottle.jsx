//
import Proptypes from "prop-types";
import "./Bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
  // console.log(bottle);
  const { img, name, price } = bottle;
  return (
    <div className="bottle">
      <h3>Name : {name}</h3>
      <img className="bottle-img" src={img} alt="Bottle" />
      <p>Price : ${price}</p>
      <button onClick={() => handleAddToCart(bottle)}>Purchase :</button>
    </div>
  );
};

Bottle.proptypes = {
  bottle: Proptypes.object.isRequired,
  handleAddToCart: Proptypes.func.isRequired,
};

export default Bottle;
