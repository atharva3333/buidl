import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import QuoteSvg from '../assets/quote.svg';
const Carousel = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the autoplay interval (in milliseconds)
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767, // For mobile devices
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className='py-20'>
        
        
        
          
        
          
          <div className='flex flex-col items-center'>
          <img src={require(`../assets/${slide.image}`)} width={100} height={100} className='rounded-full z-10' alt={slide.title} />
          <div className=' bg-gray-900 text-white px-8 py-1 mb-[-1rem] z-10 rounded-full'>
        <p>{slide.name}</p>
        <p className='text-xs text-white font-medium'>{slide.title}</p>
        </div>
            <p className='bg-white px-4 py-8 max-w-[400px] ml-4 rounded-lg'>{slide.description}</p>
            <img src={QuoteSvg} alt='quote' className='mt-[-1rem] mx-auto'/>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
