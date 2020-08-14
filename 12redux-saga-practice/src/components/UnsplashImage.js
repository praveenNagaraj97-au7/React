import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, Button } from "@material-ui/core";
import { connect } from "react-redux";

import { loadImages } from "../actions";

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
  Button: {
    display: "grid",
    justifyContent: "center",
  },
}));

const UnsplashImage = (props) => {
  const classes = useStyles();

  const {
    images: { results },
    nextPage,
  } = props;

  function FormRow() {
    return (
      <React.Fragment>
        <div className={classes.Button}>
          <Button
            style={{ backgroundColor: "blueviolet", width: "25vw" }}
            onClick={props.loadImages}
          >
            {nextPage === 1 ? "Load Images" : "Load More Images"}
          </Button>
        </div>
        <div className={classes.root}>
          {results
            ? results.map(({ alt_description, id, urls: { regular } }) => {
                return (
                  <Card key={id} className={classes.card}>
                    <CardMedia
                      className={classes.media}
                      image={regular}
                      title={alt_description}
                    />
                  </Card>
                );
              })
            : ""}
        </div>
      </React.Fragment>
    );
  }

  return <FormRow />;
};

const mapStateToProps = ({ isLoading, images, error, nextPage }) => ({
  isLoading,
  images,
  error,
  nextPage,
});

const mapDispatchToProps = (dispatch) => ({
  loadImages: () => dispatch(loadImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UnsplashImage);
