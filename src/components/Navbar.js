import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import UserProfile from "../Pages/UserProfile";
import Login from './Login';
import Register from './Register';
import Logout from './Logout'

const PhotoNavbar = () => {

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
                <Login />
                <Register />
                <Nav.Link as={Link} to="/userpage">
                  Profile
                </Nav.Link>
                <Nav.Link>Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userpage" element={<UserProfile />} />
        </Routes>
      </Router>
    </>
  );
};

export default PhotoNavbar;
