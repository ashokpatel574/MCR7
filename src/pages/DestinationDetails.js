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

      <div>
        <h3>{destdata.name}</h3>

        <div style={{ display: "flex", gap: "1.5rem" }}>
          <div>
            <img
              src={destdata.image}
              alt={destId.name}
              height={"200px"}
              width={"200px"}
            />
          </div>
          <div>
            <p>
              description: <span>{destdata.description}</span>
            </p>
            <p>
              ratings: <span>{destdata.ratings}</span>
            </p>
            <p>
              reviews: <span>{destdata.reviews}</span>
            </p>
            <p>
              location: <span>{destdata.location}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
