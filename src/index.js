import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import HighlandGames from "./pages/highlandGames";
import CraftFestival from "./pages/craftFestival";
import CarShow from "./pages/carShow";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="highland-games" element={<HighlandGames />} />
      <Route path="craft-festival" element={<CraftFestival />} />
      <Route path="vintage-car-show" element={<CarShow />} />
    </Routes>
  </BrowserRouter>
);