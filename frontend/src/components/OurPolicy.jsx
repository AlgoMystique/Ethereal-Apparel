import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
            {[
                { icon: assets.exchange_icon, title: "Easy Exchange", text: "Enjoy a seamless and easy exchange process for your peace of mind." },
                { icon: assets.quality_icon, title: "7-Day Free Returns", text: "Shop with confidence—our 7-day free return policy ensures your satisfaction." },
                { icon: assets.support_img, title: "24/7 Customer Support", text: "We're here for you anytime—our dedicated team provides support around the clock." }
            ].map((policy, index) => (
                <div 
                    key={index}
                    className="transition-transform duration-200 hover:scale-105"
                >
                    <img className='w-12 m-auto mb-5' src={policy.icon} alt={policy.title} />
                    <p className='font-semibold'>{policy.title}</p>
                    <p className='text-gray-400'>{policy.text}</p>
                </div>
            ))}
        </div>
    );
};

export default OurPolicy;
