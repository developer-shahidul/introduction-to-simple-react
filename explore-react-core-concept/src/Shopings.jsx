//

import "./shop.css";
export default function Shopings({ shoping }) {
  const { id, name, price } = shoping;
  return (
    <div className="book">
      <h2>
        id:{id} Dress : {name} Price : {price}
      </h2>
    </div>
  );
}
