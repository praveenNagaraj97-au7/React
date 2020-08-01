import React from "react";
import { connect } from "react-redux";

const User = ({ user }) => {
  if (!user) {
    return null;
  }

  return <p style={{ marginLeft: "8vw" }}>By : {user.name} </p>;
};

const mapStateToProps = (state, ownProps) => {
  const user = state.users.find((user) => user.id === ownProps.userId);
  return {
    user,
  };
};

export default connect(mapStateToProps, {})(User);
