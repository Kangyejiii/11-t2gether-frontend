import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Login from "./Pages/Login/Login";
import ProductList from "./Pages/ProductList/ProductList";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Search from "./Pages/Search/Search";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/account" component={Login} />
          <Route exact path="/shop" component={ProductList} />
          <Route exact path="/detail" component={ProductDetail} />
          <Route exact path="/show-search?q=:key" component={Search} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
