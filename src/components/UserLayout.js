import React from "react";
import { Container, Form } from "react-bootstrap";

const UserLayout = () => {
  return (
    <>
      <Container>
        <h1>Username</h1>
        <Form.Group controlId="formFileMultiple" className="mb-3 w-25">
          <Form.Label>Upload photos</Form.Label>
          <Form.Control type="file" multiple />
        </Form.Group>
      </Container>
    </>
  );
};

export default UserLayout;
