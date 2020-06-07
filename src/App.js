import React from "react";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    // return (
    // );
    // <React.Fragment>
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error:{this.state.errorMessage} </div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
      // <div> Latitude:{this.state.lat} </div>;
    }

    return (
      <div>
        Loading
        <i class="spinner loading icon"></i>
      </div>
    );

    // </React.Fragment>
  }
}
export default App;
