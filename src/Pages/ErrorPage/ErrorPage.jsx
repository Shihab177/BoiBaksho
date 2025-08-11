import React from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
const ErrorPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
   <motion.div>
    <Navbar></Navbar>
     <motion.div 
      className="flex flex-col items-center justify-center h-screen text-center text-gray-800"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9 }}
    >
      <h1 className="text-6xl font-bold mb-4 animate-bounce text-red-600">404</h1>
      <p className="text-2xl mb-2 text-[24px]">Oops! Page not found.</p>
      <p className="text-gray-600 mb-6 text-[24px]">The page you're looking for doesn't exist.</p>
      <button
        onClick={goHome}
        className="px-6 py-3 bg-blue-600 text-2xl font-semibold text-white rounded hover:bg-blue-700 transition"
      >
        Go to Home
      </button>
    </motion.div>
    <Footer></Footer>
   </motion.div>
  );
};

export default ErrorPage;
