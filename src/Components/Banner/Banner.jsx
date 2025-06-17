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
      transition={{ duration: 0.6 }} className='md:h-[460px] md:container mx-auto  rounded-br-md rounded-bl-2xl h-50 '>
           
           <Swiper navigation={true} pagination={{ clickable: true }}  modules={[Navigation,Pagination ]} className="mySwiper">
        <SwiperSlide className=''>
           
            <div className=' rounded-br-md rounded-bl-md items-center bg-no-repeat bg-cover bg-center'  style={{ backgroundImage: `url(${slider2})` }}>
            <div className="text-left flex flex-col text-white py-10 md:pt-28  rounded-bl-md mx-13">
             <h1 className='md:text-[40px] text- text-[17px] font-bold'>Discover Your Next Favorite <br /> Book</h1>
             <p className='md:mt-4 mt-2 md:text-[20px] text-[9px] font-medium'>Explore a world of stories, from fantasy to non-fiction.</p>
             <Link to={"/Bookshelf"}><button className='md:px-5  md:py-3 px-2 py-1 bg-blue-600 text-white hover:bg-blue-700 md:text-2xl text-[12px]  font-semibold mt-1 rounded-4xl'>Explore Now</button></Link>
             
            </div>
           </div>
           
        </SwiperSlide>
        <SwiperSlide className=''>
           
            <div className=' rounded-br-md rounded-bl-md items-center bg-no-repeat bg-cover bg-center'  style={{ backgroundImage: `url(${slider3})` }}>
            <div className="text-left flex flex-col text-white py-10 md:pt-28  rounded-bl-md mx-13">
             <h1 className='md:text-[40px] text- text-[17px] font-bold'>Discover and Share Great <br /> Books</h1>
             <p className='md:mt-4 mt-2 md:text-[20px] text-[9px] font-medium'>Read community reviews and upvote your favorites. <br /> Help others find the next great read</p>
             <Link to={"/Bookshelf"}><button className='md:px-5  md:py-3 px-2 py-1 bg-blue-600 text-white hover:bg-blue-700 md:text-2xl text-[12px]  font-semibold mt-1 rounded-4xl'>Explore Now</button></Link>
             
            </div>
           </div>
           
        </SwiperSlide>
        <SwiperSlide className=''>
           
            <div className=' rounded-br-md rounded-bl-md items-center bg-no-repeat bg-cover bg-center'  style={{ backgroundImage: `url(${slider4})` }}>
            <div className="text-left flex flex-col text-white py-10 md:pt-28  rounded-bl-md mx-13">
             <h1 className='md:text-[40px] text- text-[17px] font-bold'>Track Your Reading Progress</h1>
             <p className='md:mt-4 mt-2 md:text-[20px] text-[9px] font-medium'>Stay motivated with visual progress tracking and <br /> reach your reading goals faster.</p>
             <Link to={"/Bookshelf"}><button className='md:px-5  md:py-3 px-2 py-1 bg-blue-600 text-white hover:bg-blue-700 md:text-2xl text-[12px]  font-semibold mt-1 rounded-4xl'>Explore Now</button></Link>
             
            </div>
           </div>
           
        </SwiperSlide>
         
        
       
       
       
      </Swiper>
        </motion.div>
    );
};

export default Banner;