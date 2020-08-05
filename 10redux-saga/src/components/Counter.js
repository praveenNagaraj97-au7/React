import React, { useState } from "react";

export default () => {
  const [current, setCurrent] = useState(0);

  const onButtonClick = (event) => {
    setCurrent(current + parseInt(event.target.value));
  };

  return (
    <div style={{ margin: "auto", textAlign: "center" }}>
      <h1>Counter</h1>
      <button onClick={onButtonClick} value={1}>
        Increment
      </button>
      <button onClick={onButtonClick} value={-1}>
        Decrement
      </button>
      <h3>{current}</h3>
    </div>
  );
};
