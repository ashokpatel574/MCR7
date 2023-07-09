import { data } from "../contants";

export const initialState = {
  continents: data.continents,
  continentKey: "",
  countryKey: "",
  destKey: "",
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case "continentKey": {
      return { ...state, continentKey: action.payload };
    }

    case "countryKey": {
      return { ...state, countryKey: action.payload };
    }

    case "destKey": {
      return { ...state, destKey: action.payload };
    }

    default:
      return state;
  }
};
