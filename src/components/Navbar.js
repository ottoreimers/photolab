import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router,
  Routes,
  Route,
  Link } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import UserProfile from '../Pages/UserProfile';


const PhotoNavbar = () => {
  return (
    <>
    <Router>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" sticky="top">
        <Container>
        <Navbar.Brand>Photo LAB</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
              <Nav.Link as={Link} to="/userpage">Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/login" element={<Login/>} />

        <Route path="/register" element={<Register/>} />

        <Route path="/userpage" element={<UserProfile/>} />
      </Routes>
    </Router>
    </>
  )
}

export default PhotoNavbar
