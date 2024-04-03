import { Form, Button } from 'react-bootstrap'

export const FormResto = () => {
  return (
    <Form>
    <Form.Group className="mb-3" controlId="name">
      <Form.Label>Nombre</Form.Label>
      <Form.Control type="email" placeholder="Nombre del restaurant"  />
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}
