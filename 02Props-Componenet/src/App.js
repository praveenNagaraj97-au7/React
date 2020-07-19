import React from "react";

import HeaderItemComponent from "./HeaderItemComponent";

export const App = () => {
  return (
    <header className="main-header">
      <div className="main-header-nav">
        <ul className="main-header-nav-items">
          <HeaderItemComponent item_name="Home" href="/" />
          <HeaderItemComponent item_name="Shop" href="/shop" />
          <HeaderItemComponent item_name="Forum" href="/forum" />
          <HeaderItemComponent item_name="Signup" href="/register" />
          <HeaderItemComponent item_name="Login" href="/login" />
        </ul>
      </div>
    </header>
  );
};
