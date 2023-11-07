import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Modal from '../../Components/SliderModal/Modal';
import './services.scss';
import '../../Components/SliderModal/modal2.scss';

const Services = () => {
  const [servicesData, setservicesData] = useState([]);
  const [singleData, setSingleData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:5000/services')
      .then((response) => {
        setservicesData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const openModal = (item) => {
    setSingleData(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSingleData(null);
    setIsModalOpen(false);
  };

  return (
    <div className="services">
      <Navbar />
      <div className="serviceswrapper">
        <div className="title">
          <h2>-SERVICES-</h2>
        </div>
        <div className="content">
          <Grid container spacing={2}>
            {servicesData.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Button onClick={() => openModal(service)}>
                  <Card className="project-item">
                    <img
                      src={service.image}
                      alt={service.name}
                      style={{ width: '100%', height: '100%' }}
                    />
                    <CardContent>
                      <p>{service.name}</p>
                    </CardContent>
                  </Card>
                </Button>
              </Grid>
            ))}
          </Grid>
        </div>
        {singleData && (
          <Modal
            isOpen={isModalOpen}
            close={closeModal}
            images={singleData.images}
            description={singleData.desc}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Services;
