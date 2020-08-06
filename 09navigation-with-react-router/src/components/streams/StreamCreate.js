import React, { Fragment } from "react";
import { makeStyles, Button, TextField } from "@material-ui/core";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { createStream } from "../../actions";

const useStyles = makeStyles((theme) => ({
  label: {
    display: "block",
    paddingBottom: "2%",
  },
  sbtBtn: {
    display: "block",
  },
}));

const StreamCreate = (props) => {
  const classes = useStyles();
  const currentUserId = props.gAuth;

  const renderInput = ({ input }) => {
    return <TextField {...input} required />;
  };

  const onSubmitForm = (formValues) => {
    if (currentUserId)
      return props.createStream({ ...formValues, userId: currentUserId });
  };

  if (props.isSigned)
    return (
      <Fragment>
        <form onSubmit={props.handleSubmit(onSubmitForm)}>
          <label className={classes.label}>Stream Title</label>
          <Field name='StreamTitle' component={renderInput} />

          <label className={classes.label}>Stream Description</label>
          <Field name='StreamDescription' component={renderInput} />

          <Button className={classes.sbtBtn} type='submit'>
            Submit
          </Button>
        </form>
      </Fragment>
    );

  return <h1>Please Login To Create A Stream</h1>;
};

const reduxFormWrapped = reduxForm({
  form: "streamCreate",
})(StreamCreate);

const mapStateToProps = (state) => {
  return {
    gAuth: state.gAuth.userId,
    isSigned: state.gAuth.isSignedIn,
  };
};

export default connect(mapStateToProps, {
  createStream,
})(reduxFormWrapped);
