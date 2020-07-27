import React from "react";

import Link from "./Link";
import "./styles/header.css";

const Header = () => {
  return (
    <div className='navigation'>
      <Link href='/'>Accordion</Link>
      <Link href='/search'>Wiki Search</Link>
      <Link href='/dropdown'>Dropdown</Link>
    </div>
  );
};

export default Header;
