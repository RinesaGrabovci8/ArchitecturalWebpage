import React from 'react';
import './aboutus.scss';
import house from '../../assets/house.jpg';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Aboutus = () => {
    const [showImage, setShowImage] = useState(false);

  return (
    <div className='aboutus'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div className='about' style={{ margin: "150px 100px" }}>
            <Typography style={{ color: "#D32F2F", fontWeight: 'bold', marginBottom: '30px' }} variant='h4' component='h1'>
              - ABOUT US
            </Typography>
            <Typography style={{ fontWeight: 'bold' }} paragraph>
              EDMA is a consulting and civil engineering company specializing in the design, supervision, and construction of public and private projects.
            </Typography>
            <Typography paragraph>
              Founded in 2010 by a team of engineering experts, it has completed more than 400 projects over a period of more than a decade with varying expertise in civil engineering and consulting. We strive to adapt our projects to the latest developments and to use cutting-edge technology, always focusing on the customer's wishes, which we consider the key to success. Our aim is to develop our projects with high quality, functionality, aesthetics, and usability by providing ideas and advice on what the space in which you live, work, or relax will look like.
            </Typography>
            <Button className='more-button' variant="contained" color="primary">
              <Link to='/aboutus'>MORE...</Link>
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className='image'>
            <LazyLoadImage
              alt="house"
              height={500}
              width={500}
              src={house}
              effect="opacity"
              afterLoad={() => setShowImage(true)}
              wrapperProps={{
                style: {
                  backgroundColor: 'black',
                  opacity: showImage ? 1 : 0,
                  transition: 'opacity 1s ',
                },
              }}
            />
            <Typography style={{ color: 'white', marginTop: '-350px', marginLeft: '160px', fontSize: '160px', fontWeight:'bold' }} variant='h3' component='h1'>
              15
            </Typography>
            <Typography style={{ color: 'white', marginTop: '20px', marginLeft: '140px', fontSize: '20px', fontWeight:'bold' }} variant='h3' component='h1'>
              YEARS OF EXPERIENCE
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Aboutus;
