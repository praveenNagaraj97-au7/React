import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import { fetchStreams } from "../../actions";

const useStyles = makeStyles((theme) => ({
  linkBtn: {
    backgroundColor: "blue",
    padding: "8px",
    borderRadius: "20px",
    marginRight: "5px",
    textDecoration: "none",
  },
  deletelinkBtn: {
    backgroundColor: "red",
    padding: "8px",
    borderRadius: "20px",
    marginRight: "5px",
    textDecoration: "none",
  },
  createBtn: {
    backgroundColor: "grey",
    padding: "8px",
    borderRadius: "20px",
    textDecoration: "none",
    float: "right",
  },
  clearfix: {
    clear: "both",
  },
}));

const StreamList = (props) => {
  const classes = useStyles();

  const { fetchStreams } = props;

  const { userId } = props.isSigned;

  useEffect(() => {
    fetchStreams();
  }, [fetchStreams]);

  const editDeleteBtn = (docxId, userId) => {
    if (!docxId) return null;

    if (docxId === userId) {
      return (
        <div>
          <Link className={classes.linkBtn} to='/streams/edit'>
            Edit
          </Link>
          <Link className={classes.deletelinkBtn} to='/streams/delete'>
            Delete
          </Link>
        </div>
      );
    }
  };

  const renderList = () => {
    return props.streams.map((stream) => {
      return (
        <List key={stream.id}>
          <ListItem button>
            <ListItemText
              primary={stream.StreamTitle}
              secondary={stream.StreamDescription}
            />
            {editDeleteBtn(stream.userId, userId)}
          </ListItem>
        </List>
      );
    });
  };

  return (
    <Fragment>
      <Link className={classes.createBtn} to='/streams/create'>
        Create New Stream
      </Link>
      <div className={classes.clearfix}></div>
      {renderList()}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.stream),
    isSigned: state.gAuth,
  };
};

export default connect(mapStateToProps, {
  fetchStreams,
})(StreamList);
