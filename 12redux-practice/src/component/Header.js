import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

import ProductList from "./Product/ProductList";

const Header = () => {
  return (
    <Fragment>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            // className={classes.title}
          >
            News
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
