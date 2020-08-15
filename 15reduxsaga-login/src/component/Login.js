import React, { useState } from "react";

import { connect } from "react-redux";

const loadLogin = () => ({
  type: "LOAD_LOAGIN",
});

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(props);

  const onSubmitLogin = (ev) => {
    ev.preventDefault();
    console.log(email, password);
    props.loadLogin();
  };

  return (
    <form onSubmit={(ev) => onSubmitLogin(ev)}>
      <h1>EMail</h1>
      <input
        name='email'
        onChange={(ev) => setEmail(ev.target.value)}
        placeholder='Email'
      />
      <h1>Password</h1>
      <input
        name='password'
        onChange={(ev) => setPassword(ev.target.value)}
        placeholder='Password'
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  loadLogin: () => dispatch(loadLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
