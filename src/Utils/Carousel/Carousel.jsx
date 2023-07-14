import React, { useState, useEffect } from 'react';
import './Carousel.css'

const Carousel = ({images}) => {
  const [currentSlide,setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1 ) % images.length )
    }, 5000);
    
    return () => {
      clearInterval(interval)
    }
  }, [images.length]);
  
  return (
    <div className="carousel">
      {
        images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${ index === currentSlide ? 'active' : ''}`}
          >
            <img src={image} alt='test' />
          </div>
        ))
      }
    </div>
  )
}

export default Carousel