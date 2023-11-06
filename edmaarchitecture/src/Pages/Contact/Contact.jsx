import React, { useState } from 'react';
import './contact.scss';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { IoMdExpand } from 'react-icons/io';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const toggleFullScreen = () => {
    const mapIframe = document.querySelector('iframe');

    if (
      document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement
    ) {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullScreen(false);
    } else {
      // Enter fullscreen
      if (mapIframe.requestFullscreen) {
        mapIframe.requestFullscreen();
      } else if (mapIframe.mozRequestFullScreen) {
        mapIframe.mozRequestFullScreen();
      } else if (mapIframe.webkitRequestFullscreen) {
        mapIframe.webkitRequestFullscreen();
      } else if (mapIframe.msRequestFullscreen) {
        mapIframe.msRequestFullscreen();
      }
      setIsFullScreen(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    for (const key in formData) {
      if (formData[key].trim() === '') {
        errors[key] = 'This field is required';
      }
    }
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', formData);
      // Update the state to indicate that the message has been sent
      setIsMessageSent(true);
    }
  };

  return (
    <div className='contact'>
      <Navbar />
      <div className='contactwrapper'>
        <h1>-CONTACT-</h1>
        <p className='p'>LET'S WORK TOGETHER</p>
        <p className='moto'>Together, we can make dreams come true.</p>

        <div className='contactform'>
          <div className='info'>
            <div className='adress'>
              <p className='main'>Address:</p>
              <p key='address'>Dardania, Prishtine</p>
            </div>
            <div className='phone'>
              <p className='main'>Phone number:</p>
              <p key='phone1'>079 586 00 92</p>
              <p key='phone2'>044 593 54 11</p>
            </div>
            <div className='email'>
              <p className='main'>Email:</p>
              <p key='email'>edma@gmx.ch</p>
            </div>
          </div>
          <div className='inputs'>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!formErrors.name}
                    helperText={formErrors.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!formErrors.email}
                    helperText={formErrors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    error={!!formErrors.phoneNumber}
                    helperText={formErrors.phoneNumber}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={!!formErrors.message}
                    helperText={formErrors.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    type="submit"
                    disabled={isMessageSent} // Disable the button if the message has been sent
                    className='button'
                  >
                    {isMessageSent ? 'Message Sent' : 'Submit'}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
        <div className='map'>
          <button onClick={toggleFullScreen} className='fullscreen-button '>
            {isFullScreen ? <IoMdExpand /> : <IoMdExpand />}
          </button>
          <iframe
            title="Google Map"
            width="70%"
            height="400"
            frameBorder="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5868.96664500013!2d21.14835549414191!3d42.651112225674716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ef28561b303%3A0x8160d09749bd81fe!2sDardani%2C%20Pristina!5e0!3m2!1sen!2s!4v1699230652213!5m2!1sen!2s&t=k"
            allowFullScreen
            style={{ border: '0', margin: '20px 230px' }}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
