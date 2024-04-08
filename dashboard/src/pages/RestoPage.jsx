import { Col, Container, Row } from "react-bootstrap";
import { ListResto } from "../components/restaurants/ListResto";

export const RestoPage = () => {

  return (
    <Container>
      <Row>
        
        <Col sm={12}>
          <ListResto/>
        </Col>
      </Row>
    </Container>
  );
};
