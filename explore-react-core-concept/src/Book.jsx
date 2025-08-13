//css import
import "./book.css";
export default function Book({ book }) {
  const { name, price } = book;
  return (
    <div className="book">
      <h3>Books Name: {name}</h3>
      <p>Price :{price}</p>
    </div>
  );
}
