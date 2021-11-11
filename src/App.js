import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage/homePage.component";
import ShopPage from "./Pages/Shop/Shop.component";
import Header from "./components/Header/Header.component";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
