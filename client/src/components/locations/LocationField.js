import React from "react";
import { connect } from "react-redux";

const LocationField = ({ current }) => {
  console.log(current);
  if (current) {
    return (
      <div
        style={{
          backgroundColor: "white",
          height: "50vh",
          textAlign: "center"
        }}
      >
        <h2>
          {current.city}, {current.state}
        </h2>

        {current.visits.map((visit) => (
          <>
            <p>Summary: {visit.summary}</p>
            <p>Nomads: {visit.nomads}</p>
          </>
        ))}
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
