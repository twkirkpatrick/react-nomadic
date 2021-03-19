import React from "react";
import { Form, Button } from "react-bootstrap";

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
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddLocationForm;
