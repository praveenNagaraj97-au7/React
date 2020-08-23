// In Every File Where JSXML Code is written import React into that page.
import React, { Fragment } from "react";
// Render is user to render the components of Our React app into HTML.
import { render } from "react-dom";

import App from "./components/App";

// JSXML is whatever that sits inside < JSXML />
render(
  <Fragment>
    <App />
  </Fragment>,

  document.querySelector("#root")
);
