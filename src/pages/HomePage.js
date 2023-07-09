import React from "react";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router";

const HomePage = () => {
  const {
    state: { continents },
    dispatch,
  } = useData();

  const navigate = useNavigate();

  const cardHandler = (id, name) => {
    navigate(`/continent/${id}`);
    dispatch({ type: "continentKey", payload: name });
  };

  return (
    <div className="home_container">
      <h2>Welcome to Trip Advisor</h2>
      <h3>Top Continents for your next holiday</h3>

      {continents.length > 0 && (
        <ul>
          {continents.map((continentItem) => (
            <li>
              <div
                className="cardContainer"
                onClick={() =>
                  cardHandler(continentItem.id, continentItem.name)
                }
              >
                <img
                  src={continentItem.image}
                  alt={continentItem.name}
                  className="imgCover"
                />
                <span>{continentItem.name}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
