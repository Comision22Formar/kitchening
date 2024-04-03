import PropTypes from "prop-types";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { ModalResto } from "./ModalResto";
import { getResto, getRestoToEdit } from "../../services";
import { ModalFormResto } from "./ModalFormResto";

export const ListResto = ({ restaurants }) => {
  const [show, setShow] = useState(false);
  const [restoDetail, setRestoDetail] = useState({});

  const [showForm, setShowForm] = useState(false);
  const [formValues, setFormValues] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = async (id) => {
    const resto = await getResto(id);
    setRestoDetail(resto);
    setShow(true);
  };

  const handleCloseForm = () => setShowForm(false);
  const handleShowForm = async (id) => {
    if (id) {
      const resto = await getRestoToEdit(id);
      setFormValues(resto);
      setShowForm(true);
    }else{
      setShowForm(true);

    }

  };

  return (
    <>
    <div className="d-flex justify-content-end my-3 w-100">
    <Button
                      variant="dark"
                      className="btn-sm"
                      onClick={handleShowForm}
                    >
                      <i className="fa-solid fa-plus"></i> Agregar
                    </Button>
    </div>
   
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Restaurant</th>
            <th>Dirección</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((resto) => {
            return (
              <tr key={resto.id}>
                <td>{resto.id}</td>
                <td>{resto.name}</td>
                <td>{`${resto.address.street}, ${resto.address.city}`}</td>
                <td>{resto.category.name}</td>
                <td>
                  <div className="d-flex">
                    <Button
                      variant="primary"
                      className="btn-sm"
                      onClick={() => handleShow(resto.id)}
                    >
                      <i className="fa-solid fa-eye"></i>
                    </Button>
                    <Button
                      variant="success"
                      className="btn-sm"
                      onClick={() => handleShowForm(resto.id)}
                    >
                      <i className="fa-solid fa-pencil"></i>
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <ModalResto show={show} handleClose={handleClose} resto={restoDetail} />

      <ModalFormResto
        show={showForm}
        handleClose={handleCloseForm}
        resto={formValues}
      />
    </>
  );
};

ListResto.propTypes = {
  restaurants: PropTypes.array,
};
