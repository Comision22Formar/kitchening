import { Col, Container, Row } from "react-bootstrap";
import { ListResto } from "../components/restaurants/ListResto";
import { useEffect, useState } from "react";
import { getAllResto } from "../services";

export const RestoPage = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getAllResto()
      .then((restaruants) => {
        setRestaurants(restaruants);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <Row>
        
        <Col sm={12}>
          <ListResto restaurants={restaurants} />
        </Col>
      </Row>
    </Container>
  );
};
