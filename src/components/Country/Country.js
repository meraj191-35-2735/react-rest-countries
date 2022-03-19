import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, area, capital, region, population, flags } = props.country;
  return (
    <div className="countryStyle bg-secondary">
      <h3>Name: {name.common}</h3>
      <img src={flags.png} alt="flag" />
      <h4>Region: {region}</h4>
      <h4>Capital: {capital}</h4>
      <h4>Population: {population}</h4>
      <h4>Area: {area}</h4>
    </div>
  );
};

export default Country;
