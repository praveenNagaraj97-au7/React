import React, { useState } from "react";

import "./styles/accordianStyle.css";

const data = [
  {
    label: "What is React?",
    answer:
      "React is a JavaScript library created by Facebook. React is a User Interface (UI) library. React is a tool for building UI components.",
  },
  {
    label: "What is react and why use it?",
    answer:
      "React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.",
  },
  {
    label: "How does react work?",
    answer:
      "React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.",
  },
];

const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const questions = data.map(({ id, label, answer }, index) => {
    //At The time of looping if index we clicked is equal to activeIndex
    // active class will be added
    const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={index}>
        <div className='accordion' onClick={() => onTitleClick(index)}>
          {label}
          <i className='fa fa-plus' aria-hidden='true'></i>
        </div>
        <div className={`accordion-answer ${active}`}>{answer}</div>
      </React.Fragment>
    );
  });

  return <React.Fragment>{questions}</React.Fragment>;
};

export default Accordian;
