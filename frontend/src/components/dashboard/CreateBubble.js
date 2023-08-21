import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import "./CreateBubble.js";
const CreateBubble = ({ showModal, handleClose }) => {
  return (
    <Modal show={showModal} onHide={handleClose} >
        <div className="create-modal">
      <Modal.Header closeButton>
        <Modal.Title>Modal Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Modal content goes here.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
      </div>
    </Modal>
  );
};

export default CreateBubble;
