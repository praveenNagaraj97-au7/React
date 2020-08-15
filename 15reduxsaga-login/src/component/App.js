import React from "react";
import { Router, Route } from "react-router-dom";

import _history from "../_history";
import Header from "./Header";
import Login from "./Login";

export default () => {
  return (
    <Router history={_history}>
      <Header />
      <Route exact path='/' component={Login} />
    </Router>
  );
};
