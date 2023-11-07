import React from 'react';
import './aboutus.scss';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import logo from '../../assets/logo.png';
import { Grid } from '@mui/material';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Aboutus = () => {
    const [projectData, setProjectData] = useState([]);
    const [projectCount, setProjectCount] = useState(0);
    const [awardData, setawardData] = useState([]);
    const [awardcount, setawardcount] = useState(0);
    const [clientsdata, setclientsdata] = useState([]);
    const [clientcount, setclientcount] = useState(0);

    const projects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/projects');
        console.log('Data fetched:', response.data);
        setProjectData(response.data.projects);
        const length = response.data.length;
        setProjectCount(length);
        console.log('Project count updated:',length);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const awards = async () => {
      try {
        const response = await axios.get('http://localhost:5000/designawards');
        console.log('Data fetched:', response.data);
        setawardData(response.data.designawards);
        const length = response.data.length;
        setawardcount(length);
        console.log('Project count updated:',length);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const clients = async () => {
      try {
        const response = await axios.get('http://localhost:5000/clients');
        console.log('Data fetched:', response.data);
        setclientsdata(response.data.clients);
        const length = response.data.length;
        setclientcount(length);
        console.log('Project count updated:',length);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

  useEffect(() => {
    projects(); 
    awards();
    clients();
  }, []);
  return (
    <div className="about">
      <Navbar />
      <div className="aboutwrapper">
        <div className='titlee'>
        <p className='title'>-ABOUT US-</p>
        </div>
        <div className='firstpart'>
        <Grid container alignItems="center">
            <Grid item xs={12} sm={6}>
                <div className="text-block">
                <p>We develop projects from conception to the finest details.</p>
                </div>
            </Grid>
        </Grid>
        <Grid container alignItems="center">
            <Grid item xs={12} sm={6}>
                <div className="image-block" style={{ display: "flex", justifyContent: "center" }}>
                <img src={logo} alt="logo" />
                </div>
            </Grid>
        </Grid>
        </div>
        <div className="secondpart">
          <Grid container alignItems="center">
            <Grid item xs={12} sm={6} container alignItems="center">
              <div className="dinamicnumbers">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                  <div className="box">
                      <div className='boxcontent'>
                      <p className='number'>15</p>
                      <p>LONG-TERM EXPERIENCE</p>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <div className="box">
                      <div className='boxcontent'>
                      {clientcount ? (
                        <p className='number'>{clientcount}</p>
                      ) : (
                        <p>Loading...</p>
                      )}
                      <p>SATISFIED COSTUMERS</p>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <div className="box">
                    <div className='boxcontent'>
                      {projectCount ? (
                        <p className='number'>{projectCount}</p>
                      ) : (
                        <p>Loading...</p>
                      )}
                      <p>COMPLETED PROJECTS</p>
                    </div>
                  </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <div className="box">
                  <div className='boxcontent'>
                      {awardcount ? (
                        <p className='number'>{awardcount}</p>
                      ) : (
                        <p>Loading...</p>
                      )}
                      <p>DESIGN AWARDS</p>
                    </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="desc">
                <p className='edmatitle'>EDMA GmbH</p>
                <p className='p'>Founded in 2010 by an expert team in mechanical engineering, the company has completed over 400 projects spanning more than a decade, showcasing diverse expertise in the fields of civil engineering and consultancy. Through the development of numerous construction projects, as well as the planning and execution of turnkey projects, we have gained a profound understanding of how to optimize and maximize efficiency while minimizing environmental impact.</p>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="thirdpart">
          <p className="what">WHAT WE DO</p>
          <h1>Our Specialization</h1>
          <div className="icons">
            <Grid container alignItems="center">
              <Grid item xs={12} sm={4}>
                <img src={icon1} alt="icon1" />
                <h3>ARCHITECTURE & INFRASTRUCTURE</h3>
                <p>Our main task is to make our projects more sustainable, aesthetically pleasing, and comfortable for the community. Additionally, we strive to design facilities that are appropriate and cost-effective, providing living conditions, workplaces, and various activities that blend harmoniously with the environment.</p>
              </Grid>
              <Grid style={{marginTop:'300px'}} item xs={12} sm={4}>
                <img src={icon2} alt="icon2" />
                <h3>HVAC ENGINEERING</h3>
                <p>EDMA is a design studio specializing in design, construction, and supervision. Our journey as a design studio began in 2010, and for over a decade, we have realized many projects of various natures in the fields of construction and design. As a company, we are committed to adapting our projects to the latest developments in architecture and materials of the time, always based on customer requirements, which are crucial for success. We offer ideas and suggestions on how your living, working, or relaxation spaces could look. Our goal is to design our projects with high quality, functionality, aesthetics, and practicality. We provide services for various types of construction and design. With qualified staff and professionalism in providing services in the design of individual and collective residential complexes, administrative facilities, wastewater treatment plants, road and public infrastructure drainage, sewage, water supply, and drainage channels, catering facilities, and more. We offer you quality, precision, and responsibility for our projects. Each of your inquiries is an obligation for us, and every obligation for us is a commitment.</p>
              </Grid>
              <Grid  item xs={12} sm={4}>
                <img src={icon3} alt="icon3" />
                <h3>WWTP</h3>
                <p>Our vision for the future is that architectural and construction projects are as economically and ecologically efficient as possible. In an environment dominated by the principle of ecological sustainability, where the social well-being of people takes precedence, and where objects align with the environment and the developments of the time, they are undoubtedly a source of well-being and social life.</p>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Aboutus;
