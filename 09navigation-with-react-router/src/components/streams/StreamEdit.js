import React, { Fragment, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";

import { editStream, fetchStream } from "../../actions";

const StreamEdit = (props) => {
  const { fetchStream } = props;
  const { id } = props.match.params;

  useEffect(() => {
    fetchStream(id);
  }, [fetchStream, id]);

  const renderInput = (form) => {
    if (props.stream) return <input />;

    return <input />;
  };
  return (
    <Fragment>
      <form onSubmit={() => console.log("c")}>
        <label>Stream Title</label>
        <Field name='StreamTitle' component={renderInput} />

        <label>Stream Description</label>
        <Field name='StreamDescription' component={renderInput} />

        <Button type='submit'>Submit</Button>
      </form>
    </Fragment>
  );
};

const reduxFormWrapped = reduxForm({
  form: "streamEdit",
})(StreamEdit);

const mapStateToProps = (state, ownProps) => {
  return {
    isSigned: state.gAuth,
    stream: state.stream[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, {
  editStream,
  fetchStream,
})(reduxFormWrapped);
