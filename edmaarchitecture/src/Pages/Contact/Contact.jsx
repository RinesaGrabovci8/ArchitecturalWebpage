import React, { useState } from 'react';
import './contact.scss';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Map from '../../Components/GoogleMap/Map';
import ContactForm from '../../Components/ContactForm/Contactform';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
          <ContactForm
            onSubmit={handleSubmit}
            formErrors={formErrors}
            formData={formData}
            handleChange={handleChange}
            isMessageSent={isMessageSent}
            />
        </div>
        <Map/>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
