import React from "react";
import { Form } from "react-bootstrap";

const AddLocationForm = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City" />
      </Form.Group>
      <Form.Group>
        <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="State" />
      </Form.Group>
    </Form>
  );
};

export default AddLocationForm;
