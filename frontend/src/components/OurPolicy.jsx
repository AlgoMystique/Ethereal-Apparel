import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

<div>
  <img className='w-12 m-auto mb-5' src={assets.exchange_icon} alt="Exchange Icon" />
  <p className='font-semibold'>Easy Exchange</p>
  <p className='text-gray-400'>Enjoy a seamless and easy exchange process for your peace of mind.</p>
</div>
<div>
  <img className='w-12 m-auto mb-5' src={assets.quality_icon} alt="Quality Icon" />
  <p className='font-semibold'>7-Day Free Returns</p>
  <p className='text-gray-400'>Shop with confidence—our 7-day free return policy ensures your satisfaction.</p>
</div>
<div>
  <img className='w-12 m-auto mb-5' src={assets.support_img} alt="Customer Support Icon" />
  <p className='font-semibold'>24/7 Customer Support</p>
  <p className='text-gray-400'>We're here for you anytime—our dedicated team provides support around the clock.</p>
</div>


    </div>
  )
}

export default OurPolicy
