import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddLocationForm = () => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
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
      <Button variant="primary" type="submit" onClick={onSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default AddLocationForm;
