import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const Footer = () => {
  // Reusable Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { staggerChildren: 0.2, ease: "easeOut", duration: 0.8 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-40"
    >
      {/* Main Footer Content */}
      <motion.div 
        className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm"
        variants={containerVariants}
      >
        {/* Brand Description */}
        <motion.div variants={itemVariants}>
          <img className="mb-5 w-32" src={assets.logo} alt="Ethereal Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            From effortlessly chic everyday wear to special occasion outfits, 
            our clothing line is here to redefine your wardrobe with versatility, style, and comfort. 
            Elevate your fashion game today with Ethereal—where style meets quality.
          </p>
        </motion.div>

        {/* Company Section */}
        <motion.div variants={itemVariants}>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </motion.div>

        {/* Contact Section */}
        <motion.div variants={itemVariants}>
          <p className="text-xl font-medium mb-5">CONTACT US</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+61-421-333-777</li>
            <li>Contact@Ethereal.com</li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div variants={itemVariants}>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@Ethereal.com - All Rights Reserved. Made with ❤️ by Sababa
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
