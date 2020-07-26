import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";

import ShopPage from "./pages/shop/shop.component";
import SignInAndOut from "./pages/sign-component/SignInAndOut";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndOut} />
      </Switch>
    </div>
  );
}

export default App;
