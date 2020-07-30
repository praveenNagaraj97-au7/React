import React, { Component } from "react";
import { connect } from "react-redux";
import { List, ListItem, ListItemText, Button } from "@material-ui/core";

import "../styles/movieList.css";
import { selectMovie } from "../actions";

class MovieList extends Component {
  renderMovieList = () => {
    const listofMovie = this.props.movieslist.map(
      ({ image, title, info }, index) => {
        return (
          <React.Fragment key={index}>
            <ListItem button divider>
              <ListItemText primary={title} />
              <Button
                onClick={() => this.props.selectMovie({ image, title, info })}
                variant='contained'
                color='primary'
              >
                View Details
              </Button>
            </ListItem>
          </React.Fragment>
        );
      }
    );

    return listofMovie;
  };

  render() {
    return (
      <List
        component='nav'
        aria-label='mailbox folders'
        className='movie-list-items'
      >
        {this.renderMovieList()}
      </List>
    );
  }
}

const mapStateToProps = ({ movieslist }) => {
  return {
    movieslist,
  };
};

export default connect(mapStateToProps, {
  selectMovie,
})(MovieList);
