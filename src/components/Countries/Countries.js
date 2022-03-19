import React from "react";
import "./Countries.css";
import { useEffect, useState } from "react";
import Country from "../Country/Country";

function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h2>Rest Countries</h2>
      <h5>Total Countries: {countries.length}</h5>
      <div className="countriesStyle">
        {countries.map((country) => {
          return (
            <div>
              <Country country={country} key={country.cca3}></Country>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Countries;
