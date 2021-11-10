import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage/homePage.component";
import ShopPage from "./Pages/Shop/Shop.component";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
