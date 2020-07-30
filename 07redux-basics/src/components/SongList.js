import React, { Component } from "react";
import { connect } from "react-redux";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
} from "@material-ui/core";

import "../styles/songslist.css";
import { selectSong } from "../actions";

class SongList extends Component {
  onSelectSong(song) {
    this.props.selectSong(song);
  }

  songsListRender = () => {
    const songsList = this.props.songs.map(({ title, singer }, index) => {
      return (
        <React.Fragment key={index}>
          <ListItem button>
            <ListItemText primary={title} />
            <Button
              onClick={() => this.onSelectSong({ title, singer })}
              variant='contained'
              style={{ backgroundColor: "#e1bee7" }}
            >
              View Details
            </Button>
          </ListItem>
          <Divider />
        </React.Fragment>
      );
    });
    return songsList;
  };

  render() {
    // console.log(this.props);

    return (
      <React.Fragment>
        <List
          component='nav'
          className='songs-list'
          aria-label='mailbox folders'
        >
          {this.songsListRender()}
        </List>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ songs }) => {
  return {
    songs: songs,
  };
};

export default connect(mapStateToProps, {
  selectSong,
})(SongList);
