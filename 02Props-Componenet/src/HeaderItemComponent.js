import React from "react";

export default (props) => {
  return (
    <div className="main-header-mobile">
      <li className="main-header-nav-item">
        <a className="main-header-nav-item-link" href={props.href}>
          {props.item_name}
        </a>
      </li>
    </div>
  );
};
