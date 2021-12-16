import React, { useState, useEffect } from "react";
import { Container, Spinner, Row, Col, Image } from "react-bootstrap";
import axios from "axios";

const HomeLayout = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {

    const sendPhotoRequest = async () => {
      setisLoading(true);
        const res = await axios.get("https://picsum.photos/v2/list")
        setPhotos(res.data);
    };
    sendPhotoRequest();
    setisLoading(false);
  }, []);


  return (
    <>
      <Container>
        <Row>
          <Col>
            {isLoading ? (
              <Spinner animation="grow"/>
            ) : (
              <>
                {photos.map(photo => {
                  return (
                    <Image
                      key={photo.id}
                      alt=""
                      src={photo.download_url}
                      className="w-50 border border-white p-2"
                    />
                  );
                })}
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeLayout;
