import React from 'react';
import './specialization.scss';
import { Grid } from '@mui/material';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
const Specialization = () => {
  return (
    <div className='specialization'>
        <div className='specwrapper'>
            <p className='what'>WHAT WE DO</p>
            <h1>Our Specialization</h1>
            <div className='icons'>
            <Grid container alignItems="center">
                <Grid item xs={12} sm={4}>
                    <img src={icon1} alt="icon1" />
                    <h3>ARCHITECTURE & INFRASTRUCTURE</h3>
                    <p>We are keen to adapt our projects to the latest developments and using the high-end technology by always
                    being focused in the clients requests, which we consider the key to success.</p>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <img src={icon2} alt="icon2" />
                    <h3>HVAC ENGINEERING</h3>
                    <p>Our range and technical expertise ensures we offer a convenient solution
                     for the mechanical services industry that is the best in our region.</p>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <img src={icon3} alt="icon3" />
                    <h3>WWTP</h3>
                    <p>Project Plus has a host of innovative solutions on offer, not to mention a wealth of knowledge and regional
                    experience on completing turnkey projects for Waste Water Treatment Plants</p>
                </Grid>
            </Grid>
            </div>
        </div>
    </div>
  )
}

export default Specialization