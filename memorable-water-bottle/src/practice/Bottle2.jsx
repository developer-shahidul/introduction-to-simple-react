//
import "../assets/component/Bottle/Bottle.css";

const Bottles = ({ bottle, handlerPurchasebtn }) => {
  // console.log(bottle);
  const { name, img, price } = bottle;

  return (
    <div className="bottle">
      <h3>Name : {name}</h3>
      <img className="bottle-img" src={img}></img>
      <p>Price :{price}</p>
      <button onClick={() => handlerPurchasebtn(bottle)}>Purchase</button>
    </div>
  );
};

export default Bottles;
