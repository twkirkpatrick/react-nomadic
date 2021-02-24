import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Navigation from "./components/layout/Navigation";
import { connect } from "react-redux";
import { getLocations } from "./redux/actions/locationActions";

function App({ getLocations }) {
  return (
    <div className="App">
      <Navigation />
      <button onClick={getLocations}>get locations</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  location: state.location
});

export default connect(mapStateToProps, { getLocations })(App);
