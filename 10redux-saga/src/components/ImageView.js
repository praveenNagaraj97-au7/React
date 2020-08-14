import React, { Component } from "react";
import { makeStyles, GridList, GridListTile } from "@material-ui/core";
import { connect } from "react-redux";

import { fetchReciepesStart } from "../sagas";

class ImageView extends Component {
  state = { err: null };

  useStyles() {
    return makeStyles((theme) => ({
      root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
      },
      gridList: {
        width: 500,
        height: 450,
      },
    }));
  }

  render() {
    const classes = this.useStyles();
    const { images } = this.props;

    if (!this.props.searchTerm) return <h1>Type Something To Search</h1>;
    if (images.length === 0)
      return <h1>Something Went Wrong Try Again Later ...!</h1>;

    return (
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {images.map((tile) => (
            <GridListTile key={tile.id} cols={1}>
              <img src={tile.urls.regular} alt={tile.alt_description} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default connect(null, {
  fetchReciepesStart,
})(ImageView);
