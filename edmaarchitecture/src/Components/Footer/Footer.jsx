import React from 'react';
import { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './footer.scss'
import { language } from "../../lang";
import LangFlag from '../Navbar/LangFlag';
import { Context } from '../../Context/Context';

const Footer = () => {
  const {lang, dispatch} = useContext(Context);
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className='footer'>
      <div className='footerwrapper'>
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
                <Typography style={{fontWeight:'bold', fontSize:'25px'}} variant='h6' gutterBottom>
                  Links
                </Typography>
                <ul className='footer-links'>
                  {language[lang].footerLinks.map((obj) => (
                    <li style={{marginTop:"8px"}} key={obj.path}>
                      <Link  to={obj.path}>{obj.name}</Link>
                    </li>
                  ))} 
                </ul>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className='info'>
                <Typography style={{fontWeight:'bold', fontSize:'25px'}} variant='h6' gutterBottom>
                  Info
                </Typography>
                <ul className='info-list'>
                {language[lang].footerInfo.map((obj) => (
                    <li style={{marginBottom:'8px'}} key={obj.name}>
                      <p >{obj.name}</p>
                      <p>{obj.desc}</p>
                    </li>
                  ))} 
                </ul>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </div >
      <div className='copyrightfooter'>
        <Typography style={{marginTop:'30px', marginBottom:'30px', marginLeft: '70px', fontSize:'19px'}} variant='body2' color='textSecondary' align='left'>
          Copyright © 2023 | <span style={{color:'#D32F2F'}}>EDMA</span>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
