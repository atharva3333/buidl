import React from 'react';
import { ProgramsData } from '../utils/ProgramsData';
import LocationSvg from '../assets/location.svg';
import CalenderSvg from '../assets/calendar.svg';
import RightSvg from '../assets/right.svg';

import styled from 'styled-components';
import { motion } from "framer-motion";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 1rem;

  /* Custom styles for mobile devices */
  @media (max-width: 767px) {
    grid-template-columns: repeat(auto-fit, minmax(342px, 1fr));
  }
`;
const Programs = () => {
  return (
    <div className='mt-32 container'>
      {/* <div></div> */}

      <h1 className='my-5 inline-block text-xl font-medium md:text-3xl lg:text-4xl sm:text-left text-center'>
        <span class="bg-gradient-to-r from-slate-800 to-slate-500 text-transparent bg-clip-text">
          programs
        </span>
      </h1>
      <div className='flex flex-row-reverse gap-2'>
        <p className='text-blue-600 sm:text-lg text-sm font-normal'>
          View All Programs
        </p>
        <img src={RightSvg} alt='right-arrow' />
      </div>


      <GridContainer>
        {ProgramsData.map((item) => {
          return (
            <div key={item.id} className='border mx-auto mt-5 shadow-lg'>
              <img src={require(`../assets/${item.img}`)} alt={item.title} />
              <h2 className='mt-5 text-2xl ml-3 font-medium max-w-[364px]'>{item.title}</h2>
              <div className='flex gap-2 ml-3 mt-4'>
                <img src={CalenderSvg} alt='CalendarSvg' />
                <p>{item.date}</p>
              </div>
              <div className='flex gap-2 ml-3'>
                <img src={LocationSvg} alt='LocationSvg' />
                <p>{item.location}</p>
              </div>
              <div className='flex justify-center'>
                <button className={`px-8 mt-5 py-3 w-full mx-4 bg-blue-600 text-white font-medium ${item.status === 'Ended' ? 'opacity-50' : 'opacity-100'}`}>
                  {item.status}
                </button>

              </div>
              {item.status === 'Ended' && <p className='underline text-center text-xs mt-2 cursor-pointer'>View Finalists</p>}
              <p className='my-2 ml-4 text-blue-800 cursor-pointer'>Know more</p>
            </div>
          );
        })}
      </GridContainer>
        <div className='text-center mt-20'>
        <p className='text-2xl'>Want to launch your own program?</p>
      <motion.button 
                    
                    
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 500, damping: 17 }}
                    style={{ transformOrigin: "center" }}
                    className='my-7 font-medium text-white  text-xs md:text-base bg-blue-600 px-8 py-4'>Launch Now</motion.button>
        </div>
      

    </div>
  );
};

export default Programs;
