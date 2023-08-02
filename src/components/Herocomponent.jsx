import React from 'react'
import HeroImage from "../assets/hero.svg";
import Navbar from './Navbar';
import { motion } from "framer-motion";
import { textVariant,fadeIn } from '../utils/motion';

const Herocomponent = () => {
    return (
        <div className='container'>
            <Navbar />
            <div>
              <motion.div
              variants={textVariant(0.5)}
                initial="hidden"
                animate="show"
                
              >
                <p className='sm:mt-7 mt-20 sm:text-left text-center text-xl font-light'>#buidlers,</p>
                <h1 className='mt-5 text-2xl md:text-4xl lg:text-5xl sm:text-left text-center'>show  <span class="bg-gradient-to-r from-purple-500 to-blue-400 text-transparent bg-clip-text">progress</span></h1>
                <h1 className='mt-5 text-2xl md:text-4xl lg:text-5xl sm:text-left text-center'>get <span class="bg-gradient-to-r from-teal-200 to-emerald-500 text-transparent bg-clip-text">ecosystem support</span></h1>
                </motion.div>
                {/* <h1 className='sm:text-5xl text-2xl'></h1> */}
                <div className='text-center sm:text-left'>
                
                    <motion.button 
                    variants={fadeIn('up','spring',1.5,1.5)}
                    initial="hidden"
                    animate="show"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 500, damping: 17 }}
                    style={{ transformOrigin: "center" }}
                    className='my-7 font-medium text-white  text-xs md:text-base bg-blue-600 px-8 py-4'>Register Now</motion.button>
               
                </div>
                <motion.img
                variants={fadeIn('up','spring',2,1.5)}
                initial="hidden"
                animate="show" 
                src={HeroImage} 
                alt="Hero" 
                className="sm:relative static top-[30%] left-[0%] mx-auto sm:mt-[-10rem] mt-20 w-[100%] sm:w-[90%] z-[-1]" 

                />
            </div>
            

        </div>
    )
}

export default Herocomponent