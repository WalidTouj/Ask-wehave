import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage/homePage.component";
import ShopPage from "./Pages/Shop/Shop.component";
import Header from "./components/Header/Header.component";
import SignInAndSignUp from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import auth from "./firebase/firebase.utils";
import { Routes, Route } from "react-router-dom";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unsbscribeFromAuth = null;

  componentDidMount() {
    this.unsbscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsbscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUp />} />
        </Routes>
      </div>
    );
  }
}

export default App;
