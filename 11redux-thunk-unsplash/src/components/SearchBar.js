import React from "react";
import { TextField } from "@material-ui/core";

export default (props) => {
  return (
    <TextField
      onChange={props.onChangeSearchTerm}
      style={{ width: "100%", marginBottom: "20px" }}
      id='standard-basic'
      label='Search'
    />
  );
};
