import React from "react";
import { useParams } from "react-router";
import { useData } from "../context/DataContext";

import { useNavigate } from "react-router";

const CountryPage = () => {
  const { continentId } = useParams();
  const {
    state: { continents, continentKey },
    dispatch,
  } = useData();

  const countryList = continents.filter(
    (item) => item.id === Number(continentId)
  )[0].countries;

  console.log(countryList, continentKey);

  const navigate = useNavigate();

  const cardHandler = (id, name) => {
    navigate(`/country/${id}`);
    dispatch({ type: "countryKey", payload: name });
  };

  return (
    <div className="home_container">
      <h2>Welcome to Trip Advisor</h2>
      <h3>Top Continents for your next holiday</h3>

      {countryList.length > 0 && (
        <ul>
          {countryList.map((countryItem) => (
            <li key={countryItem.id}>
              <div
                className="cardContainer"
                onClick={() => cardHandler(countryItem.id, countryItem.name)}
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

export default CountryPage;
