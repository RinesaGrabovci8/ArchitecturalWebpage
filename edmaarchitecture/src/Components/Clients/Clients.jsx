import React from 'react'
import './clients.scss'
import ircon from'../../assets/ircon.png';
import topol from '../../assets/topol.png';
import czechrep from '../../assets/czechrep.png';
import kosrep from '../../assets/kosrep.png';
import { Grid } from '@mui/material';

const Clients = () => {
  return (
    <div className='clients'>
        <div className='clientwrapper'>
            <p className='what'>AWESOME PARTNERS</p>
            <h1>Our Clients</h1>
            <div className='icons'>
                <Grid container alignItems="center">
                    <Grid item xs={12} sm="auto">
                    <p>IRCON</p>
                    <img className='greyscale' src={ircon} alt="ircon" />
                    </Grid>
                    <Grid item xs={12} sm="auto">
                    <p>TOPOL</p>
                    <img className='greyscale' src={topol} alt="topol" />
                    </Grid>
                    <Grid item xs={12} sm="auto">
                    <p>CZECH REPUBLIC</p>
                    <img className='greyscale' src={czechrep} alt="czechrep" />
                    </Grid>
                    <Grid item xs={12} sm="auto">
                    <p>KOSOVA REPUBLIC</p>
                    <img className='greyscale' src={kosrep} alt="kosrep" />`
                    </Grid>
                </Grid>
            </div>
        </div>
    </div>
  )
}

export default Clients