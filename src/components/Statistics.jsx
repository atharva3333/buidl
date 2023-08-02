import React from 'react'
import Counter from './Counter'
import { motion } from "framer-motion";
const Statistics = () => {
    return (
        <div className='mt-40'>
            
            <motion.div 
            className='flex justify-center sm:gap-40 gap-20 mt-5'
            initial='hidden'
            animate='show'
            >
                <div className='flex items-end'>
                    <Counter from={0} to={382} />
                    <p className='mb-4 text-xl'>Investors</p>
                </div>
                <div className='flex items-end'>
                    <Counter from={0} to={1293} />
                    <p className='mb-4 text-xl'>Startups</p>
                </div>


            </motion.div>

        </div>
    )
}

export default Statistics