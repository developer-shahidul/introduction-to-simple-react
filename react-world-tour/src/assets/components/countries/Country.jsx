//
import { useState } from "react";
import "./Country.css";

export default function Country({ country, handleVisitedCountries }) {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);
  console.log(handleVisitedCountries);
  // !visited aer mane holo true hole false hober , r false hole true hobe
  const handleVisited = (countryName) => {
    setVisited(!visited);
    alert(`You are planning to visit ${countryName}!`);
  };

  console.log(country);
  return (
    // string gulu class css
    <div className={`country ${visited ? "visited" : "none-visited"}`}>
      <h3 style={{ color: visited ? "purple" : "white" }}>
        Name : {name.common}
      </h3>
      <img className="img" src={flags.png} alt="" />
      <p>Population : {population}</p>
      <p>Area : {area}</p>
      <p>
        <small>Code : {cca3}</small>
      </p>
      <button onClick={handleVisitedCountries}>Mark Visited</button>
      <button onClick={() => handleVisited(name.common)}>
        {visited ? "Visited" : "Going"}
      </button>
      {visited ? "I have visited this country." : "I want to Visited"}
    </div>
  );
}
