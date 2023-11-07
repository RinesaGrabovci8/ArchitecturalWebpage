import React, { useState, useEffect } from 'react';
import './clients.scss';
import axios from 'axios';
import { Grid } from '@mui/material';
import Modal from '../Modal/Modal'; 

const Clients = () => {
  const [clientsData, setClientsData] = useState([]);
  const [singleData, setSingleData] = useState(null); 
  
  useEffect(() => {
    axios.get('http://localhost:5000/clients')
      .then((response) => {
        setClientsData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className='clients'>
      <div className='clientwrapper'>
        <p className='what'>AWESOME PARTNERS</p>
        <h1>Our Clients</h1>
        <div className='icons'>
          <Grid container alignItems="center">
            {clientsData.map((client, index) => (
              <Grid item key={index} xs={12} sm="auto">
                <p>{client.name}</p>
                <button onClick={() => setSingleData(client)}>
                <img className='greyscale' src={`${client.image}`} alt={client.name} />
                </button>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      {singleData && (
        <Modal isOpen={!!singleData} close={() => setSingleData()}>
          <img src={`${singleData.image}`} alt='image' style={{marginLeft:"40px"}} />
          <p style={{marginLeft:"40px", fontWeight:'bold', fontSize:'15px'}}>{singleData.name}</p>
          <p style={{margin:'40px 40px'}}>{singleData.desc}</p>
        </Modal>
      )}
    </div>
  );
};

export default Clients;
