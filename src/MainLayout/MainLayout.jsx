import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Components/Footer/Footer';
import { AnimatePresence, motion } from 'framer-motion';



const MainLayout = () => {
    const location = useLocation()
    return (
        <div>
           <Navbar></Navbar>
           <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          className="flex-grow max-w-5xl mx-auto px-4 py-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
        <div  className='min-h-[calc(100vh-358px)]'> <Outlet /></div>
         
        </motion.div>
      </AnimatePresence>
           
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;