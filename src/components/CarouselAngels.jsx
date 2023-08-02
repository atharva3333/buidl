import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const CarouselAngels = ({slides}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000, // Adjust the autoplay interval (in milliseconds)
        slidesToShow: 4,
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
          <img src={require(`../assets/angels/${slide.image}`)} width={300} height={300} className=' rounded-xl z-10' alt={slide.title} />
          <div>
       
        <p className='text-xl mt-4 text-left  font-medium'>{slide.name}</p>
        <p className='text-xs text-left font-medium'>{slide.title}</p>
        </div>
            
            
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default CarouselAngels