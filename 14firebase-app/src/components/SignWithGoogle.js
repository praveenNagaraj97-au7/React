import React, { Component, Fragment } from "react";

import { signWithGoogle } from "../firebase/config";

class SignWithGoogle extends Component {
  render() {
    const { currentUser } = this.props;

    if (!currentUser) {
      return (
        <Fragment>
          <button onClick={signWithGoogle}>
            Click Here To Sign With Google
          </button>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <button onClick={() => this.props.auth.signOut()}>SignOut</button>
        <h1>Details</h1>
        <p>Name : {currentUser.displayName}</p>
      </Fragment>
    );
  }
}

export default SignWithGoogle;
