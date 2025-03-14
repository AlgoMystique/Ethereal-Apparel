import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Title from './Title';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestseller);
        setBestSeller(bestProduct.slice(0, 5));
    }, [products]);

    return (
        <div ref={ref} className='my-10'>
            {/* Title Section */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                animate={isInView ? { opacity: 1, y: 0 } : {}} 
                transition={{ duration: 0.6, delay: 0.2 }} 
                className='text-center text-3xl py-8'
            >
                <Title text1="BEST" text2="SELLERS" />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Explore our most popular pieces loved by our customers! These top-rated styles 
                    combine unbeatable comfort, quality, and trend-setting designs, making them 
                    wardrobe essentials you won't want to miss. Shop now and see why they’re fan favorites!
                </p>
            </motion.div>

            {/* Product Grid */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={isInView ? { opacity: 1, scale: 1 } : {}} 
                transition={{ duration: 0.6, delay: 0.3 }} 
                className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'
            >
                {bestSeller.map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 30 }} 
                        animate={isInView ? { opacity: 1, y: 0 } : {}} 
                        transition={{ duration: 0.4, delay: index * 0.1 }} 
                        whileHover={{ scale: 1.05 }}
                    >
                        <ProductItem 
                            id={item._id} 
                            image={item.image} 
                            name={item.name} 
                            price={item.price} 
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default BestSeller;
