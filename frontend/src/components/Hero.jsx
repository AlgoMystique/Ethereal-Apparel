import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-400 overflow-hidden'>

            {/* Hero Left Side */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, ease: "easeInOut" }}
                viewport={{ once: true }}
                className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 will-change-transform'
            >
                <div className='text-[#414141]'>
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className='flex items-center gap-2'
                    >
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
                        viewport={{ once: true }}
                        className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'
                    >
                        Latest Arrivals
                    </motion.h1>

                    <motion.div 
                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} 
                        className='flex items-center gap-2 cursor-pointer'
                    >
                        <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                        <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Hero Right Side */}
            <motion.img 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
                viewport={{ once: true }}
                className='w-full sm:w-1/2 will-change-transform'
                src={assets.hero_img} 
                alt="Hero" 
            />
        </div>
    );
}

export default Hero;
