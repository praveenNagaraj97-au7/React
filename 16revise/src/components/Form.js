import React, { useState } from "react";

const Form = ({ onFormSubmit }) => {
  const [value, setValue] = useState("");

  return (
    <form onSubmit={(ev) => onFormSubmit(ev, value)}>
      <h3>Name</h3>
      <input
        onChange={(ev) => setValue(ev.target.value)}
        type='text'
        name='name'
      />

      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;
