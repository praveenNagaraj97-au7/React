import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  List,
  ListItemAvatar,
  ListItem,
  Avatar,
  ListItemText,
  Divider,
} from "@material-ui/core";

import { fetchPosts } from "../actions";

const PostList = ({ fetchPosts, posts }) => {
  const fetchedPosts = fetchPosts;

  useEffect(() => {
    fetchedPosts();
  }, [fetchedPosts]);

  const renderPosts = () => {
    if (posts.length < 1) return <h2>Posts Loading...</h2>;

    const formatedListOfPosts = posts.map(({ id, title, body }) => {
      return (
        <React.Fragment key={id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText primary={title} secondary={body} />
          </ListItem>
          <Divider variant='inset' component='li' />
        </React.Fragment>
      );
    });
    return formatedListOfPosts;
  };

  return <List>{renderPosts()}</List>;
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  fetchPosts,
})(PostList);
