import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import {
  getCategories,
  getCitiesPerProvince,
  getProvinces,
} from "../../services";

export const ModalFormResto = ({ show, handleClose, resto, handleStoreResto }) => {
  const [cities, setCities] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [categories, setCategories] = useState([]);
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    setFormValues(resto);

    if (resto.id) {
      getCitiesPerProvince(resto.province)
        .then((cities) => setCities(cities))
        .catch(() => console.error);
    } else {
      setCities([]);
    }
  }, [resto]);

  useEffect(() => {
    getProvinces()
      .then((provinces) => setProvinces(provinces))
      .catch((error) => console.log(error));

    getCategories()
      .then((categories) => setCategories(categories))
      .catch((error) => console.log(error));
  }, []);

  const {
    id,
    name,
    description,
    email,
    phone,
    categoryId,
    city,
    street,
    province,
    url_map,
    coverPrice,
    capacity,
  } = formValues;

  const handleInputChange = async ({ target }) => {
    if (target.name == "province") {
      const cities = await getCitiesPerProvince(target.value);
      setCities(cities);
    }
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    handleStoreResto(formValues)

    handleClose()
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header className="bg-dark text-white">
        {id ? "Editando: " + resto.name : "Nuevo Restó"}
      </Modal.Header>

      <Modal.Body>
        <Form className="row" onSubmit={handleSubmit}>
          <Form.Group className="mb-3 col-12 col-md-6" controlId="name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              onChange={handleInputChange}
              value={name}
              name="name"
            />
          </Form.Group>
          <Form.Group className="mb-3 col-12 col-md-6" controlId="address">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="text"
              value={street}
              onChange={handleInputChange}
              name="street"
            />
          </Form.Group>
          <Form.Group className="mb-3 col-12 col-md-6" controlId="province">
            <Form.Label>Provincia</Form.Label>
            <Form.Control
              as={"select"}
              defaultValue={province}
              onChange={handleInputChange}
              name="province"
            >
              {provinces.map((item, i) => (
                <option
                  key={item.nombre + i}
                  value={item.nombre}
                  selected={item.nombre == province}
                >
                  {item.nombre}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 col-12 col-md-6" controlId="city">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control
              as={"select"}
              defaultValue={city}
              onChange={handleInputChange}
              name="city"
            >
              {cities.map((item, i) => (
                <option 
                  key={item.nombre + i} 
                  value={item.nombre} 
                  selected={item.nombre == city}
                  >
                  {item.nombre}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3 col-12 col-md-6" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              value={email}
              onChange={handleInputChange}
              name="email"
            />
          </Form.Group>
          <Form.Group className="mb-3 col-12 col-md-6" controlId="phone">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="text"
              value={phone}
              onChange={handleInputChange}
              name="phone"
            />
          </Form.Group>
          <Form.Group className="mb-3 col-12" controlId="url_map">
            <Form.Label>URL Google Maps</Form.Label>
            <Form.Control
              type="text"
              value={url_map}
              onChange={handleInputChange}
              name="url_map"
            />
          </Form.Group>
          <Form.Group className="mb-3 col-12" controlId="description">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as={"textarea"}
              rows={3}
              style={{ resize: "none" }}
              onChange={handleInputChange}
              name="description"
              value={description}
            >
              {description}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 col-12 col-md-6" controlId="category">
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              as={"select"}
              defaultValue={categoryId}
              name="categoryId"
              onChange={handleInputChange}
            >
              {!id && (
                <option hidden value={""}>
                  Seleccione...
                </option>
              )}
              {categories.map((category) => (
                <option
                  key={category.id}
                  value={category.id}
                  selected={category.id == categoryId}
                >
                  {category.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 col-6 col-md-3" controlId="coverPrice">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="text"
              value={coverPrice}
              onChange={handleInputChange}
              name="coverPrice"
            />
          </Form.Group>
          <Form.Group className="mb-3 col-6 col-md-3" controlId="capacity">
            <Form.Label>Capacidad</Form.Label>
            <Form.Control
              type="text"
              value={capacity}
              onChange={handleInputChange}
              name="capacity"
            />
          </Form.Group>
          <Form.Group
            className="mb-3 col-12 d-flex justify-content-around"
            controlId="buttons"
          >
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit">
              Guardar cambios
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};
ModalFormResto.propTypes = {
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  handleStoreResto: PropTypes.func,
  resto: PropTypes.object,
};
