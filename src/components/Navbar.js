import React, { useState } from "react";
import { Container, Navbar, Nav, Modal, Button, Form } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import UserProfile from "../Pages/UserProfile";

const PhotoNavbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleOpenLogin = () => setShowLogin(true);

  const handleCloseRegister = () => setShowRegister(false);
  const handleOpenRegister = () => setShowRegister(true);

  return (
    <>
      <Router>
        <Navbar
          collapseOnSelect
          expand="sm"
          bg="dark"
          variant="dark"
          sticky="top"
        >
          <Container>
            <Navbar.Brand>Photo LAB</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link onClick={handleOpenLogin}>Login</Nav.Link>
                <Nav.Link onClick={handleOpenRegister}>Register</Nav.Link>
                <Nav.Link as={Link} to="/userpage">
                  Profile
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userpage" element={<UserProfile />} />
        </Routes>
      </Router>

    {/* Login */}
      <Container className="w-25 mt-5">
        <Modal show={showLogin} onHide={handleCloseLogin} centered>
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
{/* Register */}
      <Container className="w-25 mt-5">
        <Modal show={showRegister} onHide={handleCloseRegister} centered>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
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

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Form>
              <Button variant="secondary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default PhotoNavbar;
