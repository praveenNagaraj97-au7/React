import React, { useState } from "react";

import "./styles/dropdown.css";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [visible, setVisible] = useState("");

  const renderOptions = options.map(({ label, title }, index) => {
    if (label === selected.label) {
      return null;
    }

    return (
      <React.Fragment key={index}>
        <div
          onClick={() => onSelectedChange({ label, title })}
          className={`dropdown-menu-items ${visible}`}
        >
          <label>{label}</label>
        </div>
      </React.Fragment>
    );
  });

  return (
    <React.Fragment>
      <div
        onClick={() => setVisible(visible === "" ? "visible" : "")}
        style={{ backgroundColor: selected.label.toLowerCase() }}
        className={`dropdown-menu`}
      >
        {selected.title}
      </div>
      {renderOptions}
    </React.Fragment>
  );
};

export default Dropdown;
