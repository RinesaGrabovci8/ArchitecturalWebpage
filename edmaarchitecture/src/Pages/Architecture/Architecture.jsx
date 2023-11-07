import React, { useState, useEffect } from 'react';
import './architecture.scss';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import ProjectProp from '../../Components/ProjectProp/ProjectProp';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import Modal from '../../Components/SliderModal/Modal';
import '../../Components/SliderModal/modal.scss';

const Architecture = () => {
  const [architectureData, setArchitectureData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:5000/architecture')
      .then((response) => {
        setArchitectureData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const openModal = (item) => {
    setSelectedData(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedData(null);
    setIsModalOpen(false);
  };

  return (
    <div className='architecture'>
      <Navbar />
      <div className='archwrapper'>
        <Grid container spacing={2}>
          {architectureData.map((item, index) => (
            <Grid item xs={12} key={index}>
              <ProjectProp
                title={item.title}
                desc={item.desc}
                button={item.button}
                onchange={() => openModal(item)}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      {selectedData && (
        <Modal isOpen={isModalOpen} close={closeModal} images={selectedData.images}>
        </Modal>
      )}
      <Footer />
    </div>
  );
};

export default Architecture;
