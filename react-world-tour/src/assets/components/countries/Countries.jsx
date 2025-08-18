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

  //...visitedCountries → আগের সব ভিজিটেড দেশগুলো রাখে //country → নতুন ক্লিক করা দেশ যোগ করে
  //ager golu state theke ashce
  const handleVisitedCountries = (country) => {
    console.log("add this to you  visited countries");
    const newVisitedcontries = [...visitedCountries, country];
    setVisitedCountries(newVisitedcontries); // state push
  };

  //flag add

  const [visitedFlag, setVisitedFlag] = useState([]);
  const handleVisitedFlag = (flag) => {
    const newFlag = [...visitedFlag, flag];
    setVisitedFlag(newFlag);
    // console.log(newFlag);
  };

  //remove item  from an array in a state
  //Use filter to select all the element except the one you want to remove

  return (
    <div>
      <h3>Countries :{countries.length}</h3>
      <div>
        <h3>Flags : {visitedFlag.length}</h3>
        <div className="flex">
          {visitedFlag.map((flag, index) => (
            <img key={index} className="flag-size" src={flag} alt="flag" />
          ))}
        </div>
      </div>
      {/* visited country */}
      <div>
        <h4>Visited Contries : {visitedCountries.length}</h4>
        <ul>
          {visitedCountries.map((country, index) => (
            <li key={`${country.cca3}-${index}`}> {country.name.common}</li>
          ))}
        </ul>
      </div>
      {/* display countries */}
      {/* //prottek ta lada alada object ke prop hishabe pathacce */}
      <div className="grid">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
