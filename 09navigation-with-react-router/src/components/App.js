import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";

export default () => (
  <Fragment>
    <BrowserRouter>
      <Header />
      <Route path='/' exact component={StreamList} />
      <Route path='/streams/list' component={StreamList} />
      <Route path='/streams/create' component={StreamCreate} />
      <Route path='/streams/edit' component={StreamEdit} />
      <Route path='/streams/delete' component={StreamDelete} />
    </BrowserRouter>
  </Fragment>
);
