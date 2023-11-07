import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './singlepage.scss';

const SingleProject = () => {
  const { id } = useParams();
  const [projectdata, setProjectData] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/projects/${id}`)
      .then((response) => {
        setProjectData(response.data);

        const imagePath = response.data.image;

        const fullImageUrl = process.env.PUBLIC_URL + '/' + imagePath;
        setImageUrl(fullImageUrl);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!projectdata) {
    return <div>Project not found.</div>;
  }

  return (
    <div className='project'>
      <Navbar />
      <div className='projectwrapper'>
        <h2>{projectdata.name}</h2>
        <img src={imageUrl} alt={projectdata.name} /><br />
      </div>
      <Footer />
    </div>
  );
};

export default SingleProject;
