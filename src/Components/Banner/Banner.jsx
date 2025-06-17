import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../App.css'
import 'swiper/css';
import slider2 from '../../assets/slider-2.png'
import slider3 from '../../assets/slider-3.png'
import slider4 from '../../assets/slider-4.png'


import { motion } from 'framer-motion';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <motion.div initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }} className='md:h-[560px] md:container mx-auto  rounded-br-md rounded-bl-2xl h-50 '>
           
           <Swiper navigation={true} pagination={{ clickable: true }}  modules={[Navigation,Pagination ]} className="mySwiper">
        <SwiperSlide className=''>
           
            <div className=' rounded-br-md rounded-bl-md items-center bg-no-repeat bg-cover bg-center'  style={{ backgroundImage: `url(${slider4})` }}>
            <div className="text-left flex   rounded-bl-md  items-center ml-40 ">
             <span className='md:h-50 h-35 text-white px-3 items-center '>
             <h1 className='md:text-[40px] text- text-[26px] font-bold'>Discover Your Next Favorite Book</h1>
             <p className='md:mt-4 mt-2 md:text-[20px] text-[9px] font-medium'>Explore a world of stories, from fantasy to non-fiction.</p>
             <Link to={"/Bookshelf"}><button className='px-5  py-3 bg-blue-600 text-white hover:bg-blue-700 md:text-2xl text-[12px]  font-semibold mt-4 rounded-4xl'>Explore Now</button></Link>
             </span> 
            </div>
           </div>
           
        </SwiperSlide>
         
        <SwiperSlide className=''>
           
            <div className=' rounded-br-md rounded-bl-md items-center bg-no-repeat bg-cover bg-center'  style={{ backgroundImage: `url(${slider3})` }}>
            <div className="text-left flex   rounded-bl-md  items-center ml-40 ">
             <span className='md:h-50 h-35 text-white px-3 items-center '>
              <h1 className='md:text-[40px] text-[14px] text-white font-semibold'> Discover and Share Great Books</h1>
                   <p className='mt-2 md:mt-4 md:text-[20px] text-[9px] text-white'> Read community reviews and upvote your favorites. <br /> Help others find the next great read</p>
               <Link to={"/Bookshelf"}><button className='px-5  py-3 bg-blue-600 text-white hover:bg-blue-700 md:text-2xl text-[12px]  font-semibold mt-4 rounded-4xl'>Explore Now</button></Link>
             </span> 
            </div>
           </div>
           
        </SwiperSlide>
        <SwiperSlide className=''>
           
            <div className=' rounded-br-md rounded-bl-md items-center bg-no-repeat bg-cover bg-center'  style={{ backgroundImage: `url(${slider2})` }}>
            <div className="text-left flex   rounded-bl-md  items-center ml-40 ">
             <span className='md:h-50 h-35 text-white px-3 items-center '>
               <h1 className='md:text-[40px] text-[13px] text-white  font-semibold'>Track Your Reading Progress</h1>
              
               <p className='mt-2 md:mt-4 md:text-[20px] text-white text-[9px]'> Stay motivated with visual progress tracking and <br /> reach your reading goals faster.</p>
             <Link to={"/Bookshelf"}><button className='px-5  py-3 bg-blue-600 text-white hover:bg-blue-700 md:text-2xl text-[12px]  font-semibold mt-4 rounded-4xl'>Explore Now</button></Link>
             </span> 
            </div>
           </div>
           
        </SwiperSlide>
       
       
       
      </Swiper>
        </motion.div>
    );
};

export default Banner;