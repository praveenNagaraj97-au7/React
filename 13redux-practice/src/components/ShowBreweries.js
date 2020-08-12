import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { fetchBreweries } from "../actions";

class ShowBreweries extends Component {
  UNSAFE_componentWillMount() {
    const { fetchBreweries } = this.props;
    fetchBreweries();
  }

  render() {
    const { breweries } = this.props;
    return (
      <Fragment>
        {breweries.map((each) => {
          return <p key={each.id}>{each.name}</p>;
        })}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    breweries: state.brew.breweries,
  };
};

export default connect(mapStateToProps, {
  fetchBreweries,
})(ShowBreweries);
