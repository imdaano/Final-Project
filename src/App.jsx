import React from "react";
import {Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.scss";

import MapView from "./components/MapView";
import Home from "./components/Home";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/map" element={<MapView />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
