import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';

const Home = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('https://picsum.photos/v2/list')
    .then((res) => {
        setPhotos(res.data);
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  console.log(photos)


  return (
    <div>
      <Container>
        {photos.map((photo, id) => {
          return <img key={id} alt="" src={photo.download_url} className='w-50 border border-white p-2' />
        })}
      </Container>
    </div>
  )
}

export default Home;
