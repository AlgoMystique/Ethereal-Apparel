import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa';

const NewsletterBox = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className='text-center'
        >
            {/* Title */}
            <motion.p 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-2xl font-medium text-gray-800'
            >
                Follow Us for Exclusive Deals & Early Access!
            </motion.p>

            {/* Social Media Links */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5, delay: 0.5 }}
                className='flex justify-center gap-6 mt-6'
            >
                <motion.a 
                    href="https://instagram.com/mybrand" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                >
                    <FaInstagram className="text-3xl text-pink-500" />
                </motion.a>

                <motion.a 
                    href="https://tiktok.com/@mybrand" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                >
                    <FaTiktok className="text-3xl text-black" />
                </motion.a>

                <motion.a 
                    href="https://facebook.com/mybrand" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                >
                    <FaFacebook className="text-3xl text-blue-600" />
                </motion.a>
            </motion.div>

            <p className="text-sm text-gray-600 mt-3">
                Get early access to sales, new arrivals, and exclusive discounts!
            </p>
        </motion.div>
    );
};

export default NewsletterBox;
