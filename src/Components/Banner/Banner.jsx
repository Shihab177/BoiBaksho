import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../App.css'
import 'swiper/css';
import slider1 from '../../assets/slider-1.webp'
import slider2 from '../../assets/slider-2.webp'
import slider3 from '../../assets/slider-3.webp'

const Banner = () => {
    return (
        <div className='md:container md:mx-auto md:h-[450px] border border-gray-200  h-50 bg-[#EBF0F5] '>
           
           <Swiper navigation={true} pagination={{ clickable: true }}  modules={[Navigation,Pagination ]} className="mySwiper">
        <SwiperSlide className=''>
           
            <div className='flex bg-[#E5D4BA] items-center'>
            <div className="text-left flex items-center justify-center w-2/6">
             <span className='md:h-50 h-35 px-3 items-center '>
             <h1 className='md:text-[32px] text-black text-[16px] font-semibold'> Organize Your Reading Journey</h1>
             <p className='md:mt-4 mt-2 md:text-[20px] text-[9px] text-black font-medium'> Keep track of books you've read, are reading,<br /> or want to read. Your personal bookshelf is just a click away!</p>
             <button className='px-4  py-2 bg-blue-600 text-white hover:bg-blue-700 md:text-2xl text-[12px]  font-semibold mt-4 rounded-md'>Start Exploring</button>
             </span> 
            </div>
            <div className='w-4/6 '>
               <img className='h-full w-full ' src={slider1} alt="" />
            </div>
           
           </div>
           
        </SwiperSlide>
        <SwiperSlide className=' '>
           <div className="flex  bg-[#1D7777] items-center">
            <div className="w-2/6 text-left flex items-center justify-center ">
                 <span className="md:h-50 h-35 px-3 items-center ">
                   <h1 className='md:text-[37px] text-[14px] text-white font-semibold'> Discover and Share Great Books</h1>
                   <p className='mt-2 md:mt-4 md:text-[20px] text-[9px] text-white'> Read community reviews and upvote your favorites. <br /> Help others find the next great read</p>
                   <button className='px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 mt-4 md:text-2xl text-[12px] rounded-md font-semibold'>View Popular Books</button>
                 </span>
            </div>
            <div className='w-4/6 '>
               <img className='h-full w-full ' src={slider2} alt="" />
            </div>
            </div>
           
        </SwiperSlide>
        <SwiperSlide className=''>
           <div className='flex items-center h-[450px] bg-[#9BC9C6] '>
            <div className="text-left flex items-center justify-center w-2/6">
            <span className="md:h-50 h-30 px-3 items-center">
               <h1 className='md:text-[37px] text-[13px] text-black  font-semibold'>Track Your Reading Progress</h1>
              
               <p className='mt-2 md:mt-4 md:text-[20px] text-black text-[9px]'> Stay motivated with visual progress tracking and <br /> reach your reading goals faster.</p>
               <button className='px-4 py-2 bg-blue-600 text-white  hover:bg-blue-700 mt-4 md:text-2xl text-[12px] rounded-md font-semibold'>Track Now </button>
            </span>
            
            </div>
            <div className='w-4/6 '>
               <img id='img' className='h-full w-full  ' src={slider3} alt="" />
            </div>
           
           </div>
        </SwiperSlide>
       
      </Swiper>
        </div>
    );
};

export default Banner;