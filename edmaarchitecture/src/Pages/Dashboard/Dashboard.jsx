import React from 'react';
import { makeStyles } from '@mui/system'; 
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const Dashboard = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        {/* Dashboard Card 1 */}
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Card 1</Typography>
            <Typography variant="h3">Data</Typography>
          </Paper>
        </Grid>

        {/* Dashboard Card 2 */}
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Card 2</Typography>
            <Typography variant="h3">Data</Typography>
          </Paper>
        </Grid>

        {/* Dashboard Card 3 */}
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Card 3</Typography>
            <Typography variant="h3">Data</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
