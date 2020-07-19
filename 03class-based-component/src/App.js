import React from "react";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, long: null, errMsg: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      (err) => {
        this.setState({ errMsg: err.message });
      }
    );
  }

  render() {
    if (!this.state.errMsg && this.state.lat && this.state.long) {
      return (
        <div>
          <h1 style={{ textAlign: "center" }}>Location</h1>
          <h3>Latitute : {this.state.lat}</h3>
          <h3>Longitude : {this.state.long}</h3>
        </div>
      );
    }

    if (!this.state.lat) {
      return <h3>Error : {this.state.errMsg}</h3>;
    }
    return <h3>Loading</h3>;
  }
}
