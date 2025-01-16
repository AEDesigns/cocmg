
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import HighlandGames from "./pages/highlandGames";
import CarShow from "./pages/carShow";
import CraftFestival from "./pages/craftFestival";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="highland-games" element={<HighlandGames />} />
      <Route path="vintage-car-show" element={<CarShow />} />
      <Route path="craft-festival" element={<CraftFestival />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

