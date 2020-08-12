import React from "react";
import { Router, Route } from "react-router-dom";

import _history from "../_history";
import Header from "./Header";
import ProductList from "./Product/ProductList";
import ProductEdit from "./Product/ProductEdit";
import ProductAdd from "./Product/ProductAdd";

export default () => {
  return (
    <Router history={_history}>
      <Header />
      <Route path='/' exact component={ProductList} />
      <Route path='/products/editproduct/:id' component={ProductEdit} />
      <Route path='/products/addproduct' component={ProductAdd} />
    </Router>
  );
};
