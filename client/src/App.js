import React from "react";
import { connect } from "react-redux";
import { getLocations } from "./redux/actions/locationActions";

function App({ getLocations }) {
  return (
    <div className="App">
      <button onClick={getLocations}>get locations</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  location: state.location
});

export default connect(mapStateToProps, { getLocations })(App);
