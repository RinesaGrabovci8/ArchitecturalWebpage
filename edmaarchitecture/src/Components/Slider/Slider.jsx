import React, { useState, useEffect } from 'react';
import './slider.scss'
import imageslide from '../../slider';
const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        
        setCurrentSlide((prevSlide) => (prevSlide + 1) % imageslide.length);
        }, 4000);

        return () => {
        clearInterval(interval);
        };

    }, []);

    return (
      <div className="slider">
        <img src={imageslide[currentSlide].url} alt={imageslide[currentSlide].alt} />
      </div>
    );
};

export default Slider;
