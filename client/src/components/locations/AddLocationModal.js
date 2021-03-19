import React from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { closeLocationModal } from "../../redux/actions/locationActions";

const AddLocationModal = ({ locationModalOpen, closeLocationModal }) => {
  return (
    <Modal
      show={locationModalOpen}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="text-center"
    >
      <Modal.Header>
        <Modal.Title>Add a New Location</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => closeLocationModal()}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  locationModalOpen: state.location.locationModalOpen
});

export default connect(mapStateToProps, { closeLocationModal })(
  AddLocationModal
);
