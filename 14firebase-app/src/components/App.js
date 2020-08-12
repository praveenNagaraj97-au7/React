import React, { Fragment, useState, useEffect } from "react";

import SignWithGoogle from "./SignWithGoogle";
import { auth } from "../firebase/config";

const App = () => {
  const [currentUser, setCurrentUSer] = useState(null);

  useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUSer(user);
    });

    // To Close The Auth Process to avoid Memory Leak
    return () => unSubscribeFromAuth();
  });

  return (
    <Fragment>
      <SignWithGoogle currentUser={currentUser} auth={auth} />
    </Fragment>
  );
};

export default App;
