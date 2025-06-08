import React from 'react';
import { motion } from 'framer-motion';
const Home = () => {
    return (
        <motion.div initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}>
            <h1>this is home page</h1>
        </motion.div>
    );
};

export default Home;