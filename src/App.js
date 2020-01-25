import React from "react";

import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./Components/Movies";
import Customers from "./Components/Customers";
import Rentals from "./Components/Rentals";
import MovieDetail from "./Components/MovieDetail";
import NotFound from "./common/NotFound";
import NavBar from "./Components/navBar";
import "./App.css";

function App() {
  return (
    <div className="container">
      <React.Fragment>
        <NavBar></NavBar>
        <Switch>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" to="/movies" exact></Redirect>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </React.Fragment>
    </div>
  );
}

export default App;
