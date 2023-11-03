import React from 'react'
import './home.scss'
import Slider from '../../Components/Slider/Slider'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Aboutus from '../../Components/Aboutus/Aboutus'
import Specialization from '../../Components/Specialization/Specialization'
import Clients from '../../Components/Clients/Clients'
const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Slider/>
        <Aboutus/>
        <Specialization/>
        <Clients/>
        <Footer/>
    </div>
  )
}

export default Home