import React from "react";
import { useParams } from "react-router";
import { useData } from "../context/DataContext";

import { useNavigate } from "react-router";

const DestinationDetails = () => {
  const { continentId } = useParams();
  const {
    state: { continents, countryKey, continentKey, destKey },
  } = useData();

  const countrydata = continents
    .filter((item) => item.name === continentKey)[0]
    .countries.filter((item) => item.name === countryKey)[0];

  console.log(countrydata);

  const destinationsList = countrydata.destinations;

  const navigate = useNavigate();

  const cardHandler = (id) => {
    navigate(`/continent/${countrydata.id}`);
  };

  return (
    <div className="home_container">
      <h2>Welcome to Trip Advisor</h2>
      <h3>Top Continents for your next holiday</h3>

      {destinationsList.length > 0 && (
        <ul>
          {destinationsList.map((countryItem) => (
            <li key={countryItem.id}>
              <div
                className="cardContainer"
                onClick={() => cardHandler(countryItem.id)}
              >
                <img
                  src={countryItem.image}
                  alt={countryItem.name}
                  className="imgCover"
                />
                <span>{countryItem.name}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DestinationDetails;
