import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage/homePage.component";
import ShopPage from "./Pages/Shop/Shop.component";
import Header from "./components/Header/Header.component";
import SignInAndSignUp from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/sign" element={<SignInAndSignUp />} />
      </Routes>
    </div>
  );
}

export default App;
