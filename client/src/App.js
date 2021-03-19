import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./components/layout/Navigation";
import Map from "./components/layout/Map";
import LocationField from "./components/locations/LocationField";
import AddLocationModal from "./components/locations/AddLocationModal";
import { connect } from "react-redux";
import { getLocations } from "./redux/actions/locationActions";

function App({ getLocations }) {
  useEffect(() => {
    getLocations();
  }, []);
  return (
    <>
      <Navigation />
      <AddLocationModal />
      <Row>
        <Col lg={9}>
          <Map />
        </Col>
        <Col lg={3}>
          <LocationField />
        </Col>
      </Row>
    </>
  );
}

export default connect(null, { getLocations })(App);
