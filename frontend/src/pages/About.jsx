import React from 'react';
import { motion } from 'framer-motion';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const About = () => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >

      {/* Title Section */}
      <motion.div variants={fadeInVariant} className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </motion.div>

      {/* About Content */}
      <motion.div variants={fadeInVariant} className='my-10 flex flex-col md:flex-row gap-16'>
        <motion.img 
          variants={fadeInVariant}
          className='w-full md:max-w-[450px]' 
          src={assets.about_img} 
          alt="About Us" 
        />
        <motion.div 
          variants={fadeInVariant}
          className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'
        >
          <p>At Ethereal, we believe that fashion is more than just clothing—it's a form of self-expression and a reflection of individuality...</p> 
          <p>Each collection is thoughtfully curated to provide our customers with high-quality garments...</p> 
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is simple: to empower individuals to embrace their unique style...</p>
        </motion.div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div variants={fadeInVariant} className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </motion.div>

      {/* Benefits Grid */}
      <motion.div variants={fadeInVariant} className='flex flex-col md:flex-row text-sm mb-20'>
        {[
          { title: "Quality Assurance:", text: "We carefully select every piece in our collection, ensuring it meets our high standards..." },
          { title: "Convenience:", text: "Our intuitive online store and seamless ordering process make shopping with Ethereal effortless..." },
          { title: "Exceptional Customer Service:", text: "Our dedicated support team is always here to ensure that your needs are met..." }
        ].map((item, index) => (
          <motion.div 
            key={index}
            variants={fadeInVariant}
            className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'
          >
            <b>{item.title}</b>
            <p className='text-gray-600'>{item.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Newsletter Section */}
      <motion.div variants={fadeInVariant}>
        <NewsletterBox />
      </motion.div>

    </motion.div>
  );
};

export default About;
