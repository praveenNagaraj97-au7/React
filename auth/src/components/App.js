import React, { Fragment } from "react";
import { Router } from "react-router-dom";

import Header from "./Header";

import history from "../history";

export default () => (
  <Fragment>
    <Router history={history}>
      <Header />
    </Router>
  </Fragment>
);
