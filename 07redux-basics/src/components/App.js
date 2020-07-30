import React from "react";
import CarList from "./CarList";
import CarDetails from "./CarDetails";

import "../styles/app.css";

export default () => {
  return (
    <div className='main-display'>
      <CarList />
      <CarDetails />
    </div>
  );
};
