import React from 'react'
import './home.scss'
import Slider from '../../Components/Slider/Slider'
import Navbar from '../../Components/Navbar/Navbar'
const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Slider/>
        
    </div>
  )
}

export default Home