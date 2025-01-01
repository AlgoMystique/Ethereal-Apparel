import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img className='mb-5 w-32' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>
          From effortlessly chic everyday wear to special occasion outfits, 
          our clothing line is here to redefine your wardrobe with versatility, style, and comfort. 
          Elevate your fashion game today with Ethereal—where style meets quality.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>CONTACT US</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+61-421-333-777</li>
            <li>Contact@Ethereal.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@Ethereal.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
