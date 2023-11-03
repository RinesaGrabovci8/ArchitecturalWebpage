import React from 'react'
import { useState } from 'react';
import './register.scss';
import { Grid, Paper, TextField, Button, Typography  } from '@mui/material';
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault(); 
    const newUser = { username, password };
  
    axios
      .post('http://localhost:5000/users', newUser) 
      .then((response) => {
        navigate('/'); 
      })
      .catch((error) => {
        alert('Registration failed.');
        console.error(error);
      });
  };
  
  
  return (
    <div className='register'>
        <Grid container component="main" className="login">
        <Grid item xs={false} sm={4} md={7} className="image-container">
        
        <img src={logo} alt="logo" className="loginimg" />
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square style={{ background: '#EEEEEE', marginLeft:'-100px' }}>
            <div className='form'>
                <div className="form-container">
                <Typography component="h3" variant="h3" className='welcome-text' >
                    Welcome to EDMA
                </Typography>
                <Typography component="h1" variant="h5" className='login-text' >
                    SIGN UP
                </Typography>
                <form className="login-form">
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoFocus
                    value={username} // Link the value to the state
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="error"
                    className="submit-button"
                    onClick={handleRegister}
                    >
                    Sing Up
                    </Button>
                    <p>Already have an account? <Link to='/'>Log in here</Link></p>
                </form>
                </div>
            </div>
        </Grid>
        </Grid>
    </div>
  )
}

export default Register