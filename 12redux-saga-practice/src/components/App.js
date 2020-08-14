import React from "react";
import { Provider } from "react-redux";

import UnsplashImage from "./UnsplashImage";
import store from "../store";

const App = () => {
  return (
    <Provider store={store}>
      <UnsplashImage />
    </Provider>
  );
};

export default App;
