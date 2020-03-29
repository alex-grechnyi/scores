import React from 'react';
import BootModal from 'react-bootstrap/Modal';

const Modal = ({ title, children }) => (
  <BootModal>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{children}</Modal.Body>
  </BootModal>
);
export default Modal;
