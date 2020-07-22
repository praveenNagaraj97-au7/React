import React from "react";
import "core-js/stable";
import "regenerator-runtime/runtime";
import ReactDOM from "react-dom";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.querySelector("#root")
);
