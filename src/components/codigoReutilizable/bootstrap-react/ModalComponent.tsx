import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
interface IProps {
  variant: string;
  modales: string;
  title: string,
  text: string,
  close: string,
  ver: string,

}
export const ModalComponent = ({ variant, modales, title, text, close, ver }: IProps) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant={variant} onClick={handleShow}>
        {modales}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title} titulo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {text}
        </Modal.Body>
        <Modal.Footer>
          <Button variant={variant} onClick={handleClose}>
            {close}
          </Button>
          <Button variant={variant}>{ver}</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

