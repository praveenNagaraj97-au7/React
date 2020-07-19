import React from "react";
import Spinner from "./Component/Spinner";

export class App extends React.Component {
  state = { lat: null, long: null, errMsg: "" };

  // This is Like Pre-Loader
  componentDidMount() {
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

  componentDidUpdate() {
    console.log("On Every Render Call I will Run");
  }

  renderComponent() {
    if (!this.state.errMsg && this.state.lat && this.state.long) {
      return (
        <div>
          <h1 style={{ textAlign: "center" }}>Location</h1>
          <h3>Latitute : {this.state.lat}</h3>
          <h3>Longitude : {this.state.long}</h3>
        </div>
      );
    }

    if (!this.state.lat && this.state.errMsg) {
      return <h3>Error : {this.state.errMsg}</h3>;
    }
    return <Spinner message="Please Allow Location To View Current Location" />;
  }

  render() {
    return <div className="main-window">{this.renderComponent()}</div>;
  }
}
