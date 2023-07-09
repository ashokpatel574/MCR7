import React from "react";
import { useParams } from "react-router";
import { useData } from "../context/DataContext";

const DestinationDetails = () => {
  const { destId } = useParams();
  const {
    state: { continents, countryKey, continentKey, destKey },
  } = useData();

  const destdata = continents
    .filter((item) => item.name === continentKey)[0]
    .countries.filter((item) => item.name === countryKey)[0]
    .destinations.find((item) => item.name === destKey);

  return (
    <div className="home_container">
      <h2>Welcome to Trip Advisor</h2>
      <h3>Top Continents for your next holiday</h3>
    </div>
  );
};

export default DestinationDetails;
