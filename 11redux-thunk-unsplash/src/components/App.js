import React, { Fragment, useState, useEffect } from "react";
import ImageView from "./ImageView";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";
import { fetchImages } from "../actions";

const App = (props) => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    if (term) {
      const timeId = setTimeout(props.fetchImages, 1000, term);
      return () => clearTimeout(timeId);
    }
  }, [term]);

  const onChangeSearchTerm = (event) => {
    setTerm(event.target.value);
  };

  return (
    <Fragment>
      <SearchBar onChangeSearchTerm={onChangeSearchTerm} />
      <ImageView searchTerm={term} />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, {
  fetchImages,
})(App);
