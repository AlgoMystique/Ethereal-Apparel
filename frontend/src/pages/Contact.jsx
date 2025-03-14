import React from 'react';
import { motion } from 'framer-motion';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Contact = () => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >

      {/* Title Section */}
      <motion.div variants={fadeInVariant} className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </motion.div>

      {/* Contact Info Section */}
      <motion.div variants={fadeInVariant} className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <motion.img 
          variants={fadeInVariant}
          className='w-full md:max-w-[480px]' 
          src={assets.contact_img} 
          alt="Contact Us" 
        />
        <motion.div 
          variants={fadeInVariant}
          className='flex flex-col justify-center items-start gap-6'
        >
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>54709 Military Road <br /> Suite 350, Potts Point, Sydney</p>
          <p className='text-gray-500'>Tel: (415) 777-777 <br /> Email: Ethereal@gmail.com</p>
        </motion.div>
      </motion.div>

      {/* Newsletter Section */}
      <motion.div variants={fadeInVariant}>
        <NewsletterBox />
      </motion.div>

    </motion.div>
  );
};

export default Contact;
