import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import CountryPage from "./pages/CountryPage";
import DestinationPage from "./pages/DestinationPage";
import DestinationDetails from "./pages/DestinationDetails";

const App = () => {
  return (
    <main className="main  flex-column">
      <Routes>
        <Route path="/" element=<HomePage /> />
        <Route path="/continent/:continentId" element=<CountryPage /> />
        <Route path="/country/:countryId" element=<DestinationPage /> />
        <Route path="/dest/:destId" element=<DestinationDetails /> />

        <Route path="*" element=<PageNotFound /> />
      </Routes>
    </main>
  );
};

export default App;
