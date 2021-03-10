import React from "react";
import { connect } from "react-redux";

const LocationField = ({ current }) => {
  if (current) {
    return (
      <div
        style={{
          backgroundColor: "white",
          height: "50vh",
          textAlign: "center"
        }}
      >
        {current.city}
      </div>
    );
  } else {
    return (
      <div
        style={{
          backgroundColor: "white",
          height: "50vh",
          textAlign: "center"
        }}
      >
        <h3>Pick a location</h3>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  current: state.location.current
});

export default connect(mapStateToProps)(LocationField);
