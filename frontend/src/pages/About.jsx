import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>At Ethereal, we believe that fashion is more than just clothing—it's a form of self-expression and a reflection of individuality. Our journey began with a vision to create a brand that combines timeless elegance with contemporary style, offering pieces that inspire confidence and make every moment feel special.</p> <p>Each collection is thoughtfully curated to provide our customers with high-quality garments that are not only stylish but also versatile and comfortable. From chic everyday essentials to statement pieces for every occasion, Ethereal offers something for every wardrobe. Sourced from trusted designers and artisans, we pride ourselves on delivering exceptional quality and craftsmanship with every piece.</p> 
 <b className='text-gray-800'>Our Mission</b>
 <p>Our mission is simple: to empower individuals to embrace their unique style and create a wardrobe that makes them feel truly ethereal, every day.</p>
 </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Quality Assurance:</b>
    <p className='text-gray-600'>We carefully select every piece in our collection, ensuring it meets our high standards for quality, comfort, and style.</p>
  </div>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Convenience:</b>
    <p className='text-gray-600'>Our intuitive online store and seamless ordering process make shopping with Ethereal effortless, so you can enjoy a smooth, hassle-free experience.</p>
  </div>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Exceptional Customer Service:</b>
    <p className='text-gray-600'>Our dedicated support team is always here to ensure that your needs are met and that you are fully satisfied with your experience.</p>
  </div>
</div>

      <NewsletterBox />

    </div>
  )
}

export default About
