import React from 'react';
import { motion } from 'framer-motion';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.jpg';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';
import logo7 from '../assets/logo7.png';
import logo8 from '../assets/logo8.png';
import logo9 from '../assets/logo9.png';
import logo10 from '../assets/logo10.jpg';
import logo11 from '../assets/logo11.png';
import logo12 from '../assets/logo12.png';
import logo13 from '../assets/logo13.png';
import logo14 from '../assets/logo14.jpg';
import logo15 from '../assets/logo15.png';
import logo16 from '../assets/logo16.jpeg';
import logo17 from '../assets/logo17.jpg';
import logo18 from '../assets/logo18.png';

const logos = [logo1, logo2, logo3, logo4,logo5,logo6,logo7,logo8,logo9,logo10,logo11,logo12,logo13,logo14,logo15,logo16,logo17,logo18];

const TickerTape = () => {
  return (
    <div className="container overflow-hidden relative mb-10">
    <h1 className='my-10 text-3xl md:text-5xl lg-text-7xl font-semibold'>VCs in our network</h1>
      <motion.ul
        className="inline-block whitespace-nowrap"
        animate={{ x: '-247%' }}
        transition={{ duration: 20, ease:'linear', repeat: Infinity, repeatType:'loop'}}
      >
        {logos.map((logo, index) => (
          <li key={index} className="inline-block mr-8" style={{ listStyle: 'none' }}>
            <img src={logo} alt={`Logo ${index + 1}`} style={{ width: '150px', height: 'auto' }} />
          </li>
        ))}
        {/* Duplicate logos to achieve seamless looping */}
        {logos.map((logo, index) => (
          <li key={`duplicate-${index}`} className="inline-block mr-8" style={{ listStyle: 'none' }}>
            <img src={logo} alt={`Logo ${index + 1}`} style={{ width: '150px', height: 'auto' }} />
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default TickerTape;
