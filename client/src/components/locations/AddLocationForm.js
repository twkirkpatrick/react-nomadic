import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import {
  addLocation,
  closeLocationModal
} from "../../redux/actions/locationActions";

const AddLocationForm = ({ addLocation, closeLocationModal }) => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (city === "" || state === "") {
      console.log("please fill out form");
    } else {
      addLocation({ city, state });
      closeLocationModal();
    }
  };
  return (
    <Form>
      <Form.Group>
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>State</Form.Label>
        <Form.Control
          type="text"
          placeholder="State"
          onChange={(e) => setState(e.target.value)}
          value={state}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={onSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default connect(null, { addLocation, closeLocationModal })(
  AddLocationForm
);
