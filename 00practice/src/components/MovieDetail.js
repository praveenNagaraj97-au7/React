import React from "react";
import { connect } from "react-redux";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

import "../styles/movieDetail.css";

const MovieDetail = ({ selectedMovie }) => {
  if (!selectedMovie) return <h1>Select a Movie</h1>;

  return (
    <Card className='movie-detail'>
      <CardMedia
        component='img'
        alt='Contemplative Reptile'
        height='300px'
        image={selectedMovie.image}
        title='Contemplative Reptile'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='h2'>
          {selectedMovie.title}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {selectedMovie.info}
        </Typography>
      </CardContent>
    </Card>
  );
};

const mapStateToProps = ({ selectedMovie }) => {
  return {
    selectedMovie,
  };
};

export default connect(mapStateToProps)(MovieDetail);
