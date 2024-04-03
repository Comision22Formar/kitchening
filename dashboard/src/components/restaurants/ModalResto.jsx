import PropTypes from "prop-types";
import { Button, Col, Modal, Row } from "react-bootstrap";

export const ModalResto = ({ show, handleClose, resto }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Body>
        <h2>{resto.name}</h2>
        <hr />
        <Row>
            <Col sm={12} lg={4}>
                <img className="img-fluid" src={resto.image} alt={resto.name} />
            </Col>
            <Col sm={12} lg={8}>
            <p>{resto.description}</p>
            </Col>
        </Row>
        
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ModalResto.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  resto: PropTypes.object,
};
