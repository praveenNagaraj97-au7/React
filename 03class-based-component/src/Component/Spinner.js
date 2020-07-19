import React from "react";
import "./../style.css";

export default (props) => {
  return (
    <div className="ui segment">
      <p></p>
      <div className="ui active dimmer">
        <div className="ui loader"> </div>
        <div>{props.message}</div>
      </div>
    </div>
  );
};
