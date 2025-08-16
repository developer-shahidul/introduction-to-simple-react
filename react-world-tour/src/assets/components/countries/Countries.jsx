//

import { useEffect, useState } from "react";
import Country from "./Country";
import "./Country.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,cca3,flags,capital,region,subregion,population,area,currencies,timezones"
    )
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  //visited button show/// judi array hoi taile spread opretore array banate hobe push korle hobe na

  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountries = (country) => {
    console.log("add this to you  visited countries");
    const newVisitedcontries = [...visitedCountries, country];
    setVisitedCountries(newVisitedcontries);
  };

  return (
    <div>
      <h3>Countries :{countries.length}</h3>
      <div>
        <h4>Visited Contries : {visitedCountries.length}</h4>
        <ul>
          {visitedCountries.map((country, index) => (
            <li key={`${country.cca3}-${index}`}> {country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="grid">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountries={handleVisitedCountries}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
