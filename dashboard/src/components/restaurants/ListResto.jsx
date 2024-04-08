import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { ModalResto } from "./ModalResto";
import { deleteResto, getAllResto, getResto, getRestoToEdit, storeResto } from "../../services";
import { ModalFormResto } from "./ModalFormResto";
import { Paginator } from "./Paginator";

export const ListResto = () => {

  const initialValues = {
    name: "", 
    description: "", 
    email: "", 
    phone : "", 
    categoryId: "", 
    street : "",
    city : "", 
    province : "",
    url_map : "",
    coverPrice : "",
    capacity : ""
  }

  const [show, setShow] = useState(false);
  const [restoDetail, setRestoDetail] = useState({});
  const [resto, setResto] = useState(initialValues);
  const [showForm, setShowForm] = useState(false);

  const [restaurants, setRestaurants] = useState([]);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(null);
  const [count, setCount] = useState(null);
  
  useEffect(() => {
    getAllResto(currentPage)
      .then(({restaurants, currentPage, pages, total, count}) => {
        setRestaurants(restaurants);
        setCurrentPage(currentPage);
        setPages(pages)
        setTotal(total)
        setCount(count)
      })
      .catch((error) => console.log(error));
  }, [currentPage]);
  

  const handleClose = () => setShow(false);
  
  const handleShow = async (id) => {
    const resto = await getResto(id);
    setRestoDetail(resto);
    setShow(true);
  };

  const handleCloseForm = () => setShowForm(false);
  
  const handleShowForm = async (id) => {

    setResto(initialValues)

    if(id){
      const resto = await getRestoToEdit(id)
      setResto(resto)
    }
    setShowForm(true)
    
  };

  const handleStoreResto = async (data) => {

    try {

      const method = data.id ? 'PUT' : 'POST'

      const result = await storeResto(method, data)

      if(method === 'POST') {
        setRestaurants([
          ...restaurants,
          result.resto
        ])
      }else{
        setRestaurants(restaurants.map(resto => {
          if(resto.id == data.id){
            resto = result.resto
          }
          return resto
        }))
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  const handleDeleteResto = async (id) => {

    try {

      await deleteResto(id)

      setRestaurants(restaurants.filter(resto => resto.id != id))
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="d-flex justify-content-end my-3 w-100">
        <Button variant="dark" className="btn-sm" onClick={() => handleShowForm(null)}>
          <i className="fa-solid fa-plus"></i> Agregar
        </Button>
      </div>

      <Table striped bordered hover responsive>
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
          {restaurants.map(({id, name, address, category}) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{`${address.street}, ${address.city}`}</td>
                <td>{category.name}</td>
                <td>
                  <div className="d-flex justify-content-around">
                    <Button
                      variant="primary"
                      className="btn-sm"
                      onClick={() => handleShow(id)}
                    >
                      <i className="fa-solid fa-eye"></i>
                    </Button>
                    <Button
                      variant="success"
                      className="btn-sm"
                      onClick={() => handleShowForm(id)}
                    >
                      <i className="fa-solid fa-pencil"></i>
                    </Button>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => handleDeleteResto(id)}
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
          
      </Table>
      <Paginator 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage}
            pages={pages}
            total={total}
            count={count}
          />
      <ModalResto show={show} handleClose={handleClose} resto={restoDetail} />

     <ModalFormResto
        show={showForm}
        handleClose={handleCloseForm}
        handleStoreResto={handleStoreResto}
        resto={resto}
      /> 
    </>
  );
};

ListResto.propTypes = {
  restaurants: PropTypes.array,
};
