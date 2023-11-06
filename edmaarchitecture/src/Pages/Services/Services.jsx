import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './services.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../../Components/SliderModal/Modal';
import architecturaldesign from '../../archslider';

const Services = () => {
  const [servicesData, setservicesData] = useState([]);
  const [singleData, setSingleData] = useState(null);

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

  return (
    <div className='services'>
      <Navbar />
      <div className='serviceswrapper'>
        <div className='title'>
          <h2>-SERVICES-</h2>
        </div>
        <div className='content'>
          {servicesData.map((service, index) => (
            <div className='MuiGrid-item' key={index}>
              <p>{service.name}</p>
              <button onClick={() => setSingleData(service)}>
                <img
                  className='greyscale'
                  src={`${service.image}`}
                  alt={service.name}
                />
              </button>
            </div>
          ))}
        </div>
        {singleData && (
          <Modal isOpen={!!singleData} close={() => setSingleData()} images={architecturaldesign} />
        // <Modal
        //   isOpen={!!singleData}
        //   close={() => setSingleData(null)} // Make sure to clear singleData to close the modal
        //   title={singleData.name} // Set the title for the modal
        //   images={singleData.imageArray} // Provide an array of image URLs for the slider
        // >
        //   {/* Additional content, if any */}
        //   <p style={{marginLeft:"40px", fontWeight:'bold', fontSize:'15px'}}>{singleData.name}</p>
        //   <p style={{margin:'40px 40px'}}>{singleData.desc}</p>
        // </Modal>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Services;
