import React, { useEffect, useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";

import { googleAuthSign_In, googleAuthSign_Out } from "../actions";

const useStyles = makeStyles((theme) => ({
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

const GAuth = (props) => {
  const classes = useStyles();
  const auth = useRef();

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "396067641974-mthp2pel2v5dfeo17d7rc30la6hpf6jn.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();
          onAuthChange(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChange);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });

  const onAuthChange = (isSigned) => {
    if (isSigned) {
      props.googleAuthSign_In(auth.current.currentUser.ne.Da);
    } else {
      props.googleAuthSign_Out(null, {});
    }
  };

  const renderAuthButton = () => {
    switch (props.isSigned) {
      case true:
        return (
          <Button onClick={() => auth.current.signOut()}>
            <Avatar className={classes.orange}>G</Avatar>
            <h3 style={{ marginLeft: "5px" }}> LogOut</h3>
          </Button>
        );

      case false:
        return (
          <Button onClick={() => auth.current.signIn()}>
            <Avatar className={classes.orange}>G</Avatar>
            <h3 style={{ marginLeft: "5px" }}> LogIn</h3>
          </Button>
        );

      default:
        return (
          <Button>
            <Avatar className={classes.orange}>G</Avatar>
          </Button>
        );
    }
  };

  return <div className={classes.root}>{renderAuthButton()}</div>;
};

const mapStateToProps = (state) => {
  return {
    isSigned: state.gAuth.isSignedIn,
  };
};

const mapDispatchToProps = {
  googleAuthSign_In,
  googleAuthSign_Out,
};

export default connect(mapStateToProps, mapDispatchToProps)(GAuth);
