// src/components/Carousel.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full h-full">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="h-96 flex justify-center items-center">
            <img src={image} alt={`Product Image ${index + 1}`} className="object-cover w-full h-full rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
