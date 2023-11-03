import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//import { language } from './Language'; // Assuming you import language and lang

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className='footer'>
      <hr />
      <Grid container component={Paper} className='infofooter' elevation={0}>
        <Grid item xs={12} sm={6}>
          <div className='logo'>
            <img src={logo} alt='logo' />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <div className='links'>
                <Typography variant='h6' gutterBottom>
                  Links
                </Typography>
                <ul className='footer-links'>
                  {/* {language[lang].footerLinks.map((obj) => (
                    <li key={obj.path}>
                      <Link to={obj.path}>{obj.name}</Link>
                    </li>
                  ))} */}
                </ul>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className='info'>
                <Typography variant='h6' gutterBottom>
                  Info
                </Typography>
                <ul className='info-list'>
                  <li>
                    <Link to='/about'>About Us</Link>
                  </li>
                  <li>
                    <Link to='/contact'>Contact Us</Link>
                  </li>
                  {/* Add more info links as needed */}
                </ul>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <hr />
      <div className='copyrightfooter'>
        <Typography variant='body2' color='textSecondary' align='center'>
          Copyright © 2023 | <span>EDMA</span>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
