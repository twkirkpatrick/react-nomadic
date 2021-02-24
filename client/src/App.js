import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Navigation from "./components/layout/Navigation";
import Map from "./components/layout/Map";
import { connect } from "react-redux";
import { getLocations } from "./redux/actions/locationActions";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Map />
      <button onClick={getLocations}>get locations</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  location: state.location
});

export default connect(mapStateToProps, { getLocations })(App);
