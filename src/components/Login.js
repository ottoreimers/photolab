import React, { useState } from "react";
import { Container, Form, Button, Modal, Nav } from "react-bootstrap";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);


  return (
    <>
    <Container className="w-25 mt-5">
      <Nav.Link onClick={handleOpen}>Login</Nav.Link>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Form>
            <Button variant="secondary" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Footer>
      </Modal>
      </Container>
    </>
  );
};

export default Login;
