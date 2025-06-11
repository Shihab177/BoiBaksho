import React from 'react';
import { motion } from "framer-motion";
import logo from '../../assets/logo (2).png';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#F1E9F6]">
      <div className="relative w-20 h-20">
        {/* Rotating border */}
        <motion.div
          className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 1,
          }}
        ></motion.div>

        {/* Static logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={logo} alt="Logo" className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
