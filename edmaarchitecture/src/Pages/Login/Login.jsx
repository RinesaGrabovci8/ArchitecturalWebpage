import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography } from '@mui/material';
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.scss'

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.get(`http://localhost:5000/users?username=${username}&password=${password}`)
    .then((response) => {
        const user = response.data[0]; 

        if (user) {
          localStorage.setItem('token', user.username);
          navigate('/register'); 
        } else {
          alert('Invalid username or password. Please try again.');
        }
    }).catch((error) => {
        alert('An error occurred. Please try again later.');
        console.error(error);
    });
  };

  return (
    <div className="login">
      <Grid container component="main" className="login">
        <Grid item xs={false} sm={4} md={7} className="image-container">
          <img src={logo} alt="logo" className="loginimg" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={0}
          square
          style={{ background: '#EEEEEE', marginLeft: '-100px' }}
        >
          <div className="form">
            <div className="form-container">
              <Typography component="h3" variant="h3" className="welcome-text">
                Welcome to EDMA
              </Typography>
              <Typography component="h1" variant="h5" className="login-text">
                LOG IN
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
                  value={username}
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
                  type="button"
                  fullWidth
                  variant="contained"
                  color="error"
                  className="submit-button"
                  onClick={handleLogin}
                >
                  Log In
                </Button>
                <p>
                  Don't have an account yet?{' '}
                  <Link to="/register">Sign up here</Link>
                </p>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
