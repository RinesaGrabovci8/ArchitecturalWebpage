import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './projects.scss';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [buttonMode, setButtonMode] = useState('LOAD MORE');

  useEffect(() => {
    axios
      .get('http://localhost:5000/projects')
      .then((response) => {
        setProjectsData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const loadMoreProjects = () => {
    if (buttonMode === 'LOAD MORE') {
      setVisibleProjects(projectsData.length);
      setButtonMode('LOAD LESS');
    } else {
      setVisibleProjects(3);
      setButtonMode('LOAD MORE');
    }
  };

  return (
    <div className='projects'>
      <Navbar />
      <div className='projectswrapper'>
        <div className='title'>
          <h2>-PROJECTS-</h2>
        </div>
        <div className='project-list'>
          <Grid container spacing={2}>
            {projectsData.slice(0, visibleProjects).map((project, index) => (
              <Grid item xs={4} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="250"
                    image={project.image}
                    alt={project.name}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {project.description}
                    </Typography>
                    <button className='see-more-button'><Link to={`/projects/${project.id}`}>SEE MORE</Link></button> {/* Add the "See More" button */}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
        <button onClick={loadMoreProjects} className='load-more-button'>
          {buttonMode}
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
