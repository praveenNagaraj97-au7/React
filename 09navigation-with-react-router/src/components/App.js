import React, { Fragment } from "react";
import { connect } from "react-redux";

import Header from "./Header";

const App = (props) => {
  const profile = () => {
    return (
      <Fragment>
        <h1>Profile</h1>
        <h1>Name : {props.gAuth.userId.le.rt.Ad}</h1>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <Header />
      {props.gAuth.isSignedIn ? profile(props) : null}
    </Fragment>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);
