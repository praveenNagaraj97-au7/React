import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia } from "@material-ui/core";
import { connect } from "react-redux";

import { getphotosAPI } from "../api";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    margin: "2px",
    flexGrow: 1,
    width: "33%",
  },
  media: {
    padding: "25%",
  },
}));

const UnsplashImage = () => {
  const classes = useStyles();
  const [images, setImages] = useState([]);

  useEffect(() => {
    getphotosAPI("water")
      .get()
      .then((response) => {
        setImages(response.data.results);
      });
  }, []);

  function FormRow() {
    return (
      <React.Fragment>
        <div className={classes.root}>
          {images.map(({ alt_description, id, urls: { regular } }) => {
            return (
              <Card key={id} className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={regular}
                  title={alt_description}
                />
              </Card>
            );
          })}
        </div>
      </React.Fragment>
    );
  }

  return <FormRow />;
};

const mapStateToProps = ({ isLoading, images, error }) => ({
  isLoading,
  images,
  error,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(UnsplashImage);
