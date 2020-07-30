import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";

import "../styles/carDetail.css";

class CarDetail extends Component {
  render() {
    if (!this.props.selectCar) return <h1>Select a Car</h1>;

    const { name, description, image } = this.props.selectCar;

    return (
      <Card className='display-result'>
        <CardActionArea>
          <CardMedia component='img' alt={name} image={image} title={name} />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {name}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

const mapStateToProps = ({ selectCar }) => {
  return {
    selectCar,
  };
};

export default connect(mapStateToProps)(CarDetail);
