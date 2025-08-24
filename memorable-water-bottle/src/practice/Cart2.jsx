//

const Cart2 = ({ cart, handlerRemoveBottle }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {cart.map((item, index) => (
        <div style={{ position: "relative" }} key={`${item.id}-${index}`}>
          <img
            style={{ width: "120px", height: "120px", borderRadius: "10px" }}
            src={item.img}
          ></img>
          <button
            onClick={() => handlerRemoveBottle(item.id)}
            style={{
              position: "absolute",
              top: "1px",
              right: "1px",
              padding: "0px",
              margin: "0px",
              borderRadius: "50%",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "white",
                borderRadius: "50%",
                border: "none",
              }}
              src="https://img.icons8.com/?size=100&id=T9nkeADgD3z6&format=png&color=000000"
              alt="img"
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart2;
