import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const UpdateModal = ({show, handleClose,id}) => {
    console.log(id)
  return (
    <div>
          {/* Modal Example  */}
          <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" >
                        Close
                    </Button>
                    <Button variant="primary" >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
    </div>
  )
}

export default UpdateModal