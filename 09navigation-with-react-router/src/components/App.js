import React, { Fragment } from "react";
import { Route, Router } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";

import history from "../history";

export default () => (
  <Fragment>
    <Router history={history}>
      <Header />
      <Route path='/' exact component={StreamList} />
      <Route path='/streams/list' component={StreamList} />
      <Route path='/streams/create' component={StreamCreate} />
      <Route path='/streams/edit/:id' component={StreamEdit} />
      <Route path='/streams/delete' component={StreamDelete} />
    </Router>
  </Fragment>
);
