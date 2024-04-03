import PropTypes from "prop-types";
import { Button, Form, Modal } from "react-bootstrap";

export const ModalFormResto = ({ show, handleClose, resto }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre del restaurant"
              value={resto.name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="text"
              placeholder="Dirección del restaurant"
              value={resto.address?.street}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
ModalFormResto.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  resto: PropTypes.object,
};
