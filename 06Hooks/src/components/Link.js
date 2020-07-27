import React from "react";

const Link = ({ href, children }) => {
  const onClickLink = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState([], "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={(ev) => onClickLink(ev)} href={href}>
      {children}
    </a>
  );
};

export default Link;
