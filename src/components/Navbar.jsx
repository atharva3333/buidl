// src/Navbar.js
import React, { useState } from 'react';
import { navVariants } from '../utils/motion';
import { motion } from "framer-motion";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <motion.nav 
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="py-4">
            <div className="mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col items-start">
                        <span className='bg-violet-500 p-[1px] px-[2px] rounded text-[8px] text-white'>ALPHA</span>
                        <span className="text-black font-semibold text-3xl">Buidl.so</span>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <button className="text-black font-light text-sm">Chapters</button>
                        <button className="text-black font-light text-sm">Ecosystem</button>
                        <button className="text-black font-light text-sm">Investors</button>
                        <button className="text-black font-light text-sm">Login</button>
                        <button className="text-black font-light text-sm">Register</button>
                        <button className="text-black font-light text-sm">We are hiring!</button>
                    </div>
                    <div className="md:hidden">
                        <button

                            onClick={toggleMenu}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                width="24"
                                height="24"
                            >
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="flex flex-col space-y-4 mt-4">
                            <button className="text-black font-light">Chapters</button>
                            <button className="text-black font-light">Ecosystem</button>
                            <button className="text-black font-light">Investors</button>
                            <button className="text-black font-light">Login</button>
                            <button className="text-black font-light">Register</button>
                            <button className="text-black font-light">We are hiring!</button>
                        </div>
                    </div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;
