import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Title from './Title';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (products.length > 0) {
            setLatestProducts(products.slice(0, 10));
        }
    }, [products]);

    return (
        <div ref={ref} className='my-10'>
            {/* Title Section */}
            <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                animate={isInView ? { opacity: 1, y: 0 } : {}} 
                transition={{ duration: 0.6, delay: 0.2 }} 
                className='text-center py-8 text-3xl'
            >
                <Title text1="LATEST" text2="COLLECTIONS" />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Stay ahead of the trends with our newest arrivals! From fresh styles to bold designs, 
                    our latest collections are all about adding excitement and versatility to your wardrobe. 
                    Shop now and be the first to experience the newest fashion statements.
                </p>
            </motion.div>

            {/* Product Grid */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={isInView ? { opacity: 1, scale: 1 } : {}} 
                transition={{ duration: 0.6, delay: 0.3 }} 
                className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'
            >
                {latestProducts.map((item, index) => (
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
}

export default LatestCollection;
