import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export const ModalItem = ({ setInputStad, inputStad, crearItem, text, crearTemas}: any) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const hendleCrearItem = () => {
    crearItem();
    handleClose();
    crearTemas()
  }

  return (
    <>
      <Button style={{ background: "#042044", width: "100%" }} onClick={handleShow}>
       {text}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                value={inputStad}
                placeholder="name@example.com"
                autoFocus
                onChange={(e) => setInputStad(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={hendleCrearItem}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

