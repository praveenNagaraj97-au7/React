import React from "react";
import { connect } from "react-redux";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

import "../styles/carlist.css";

import { selectCar } from "../actions";

const CarList = ({ cars, selectCar }) => {
  const renderCars = cars.map(({ name, image, description }, index) => {
    return (
      <ListItem key={index} button divider>
        <ListItemText primary={name} />
        <Button
          onClick={() => selectCar({ name, image, description })}
          variant='contained'
          color='secondary'
        >
          View Details
        </Button>
      </ListItem>
    );
  });

  return (
    <List component='nav' aria-label='mailbox folders' className='car-list'>
      {renderCars}
    </List>
  );
};

const mapStateToProps = ({ cars }) => {
  return {
    cars,
  };
};

export default connect(mapStateToProps, {
  selectCar,
})(CarList);
