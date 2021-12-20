import React, { useState } from "react";
import { Form, Button, Modal, Nav } from "react-bootstrap";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);


  return (
    <>

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
              <Form.Control type="password" placeholder="Password" autoComplete="on"/>
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
    </>
  );
};

export default Login;
