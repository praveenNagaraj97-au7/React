import React, { Component } from "react";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";

class SongDetail extends Component {
  render() {
    if (!this.props.selectedSong)
      return (
        <h1 style={{ width: "100%", textAlign: "center", margin: "5px" }}>
          Select a Song
        </h1>
      );
    return (
      <Card
        variant='outlined'
        style={{ width: "100%", textAlign: "center", margin: "5px" }}
      >
        <CardContent>
          <Typography variant='h5' component='h2'>
            {this.props.selectedSong.title}
          </Typography>
          <Typography variant='body2' component='p'>
            {this.props.selectedSong.singer}
            <br />
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = ({ selectedSong }) => {
  return {
    selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
