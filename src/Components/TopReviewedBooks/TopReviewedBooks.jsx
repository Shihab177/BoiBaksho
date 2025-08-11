import React from "react";
import { motion } from "framer-motion";
import book1 from "../../assets/book/book-1.png";
import book2 from "../../assets/book/book-2.png";
import book3 from "../../assets/book/book-3.png";
import book4 from "../../assets/book/book-4.png";
import book5 from "../../assets/book/book-5.png";
import book6 from "../../assets/book/book-6.png";
import book7 from "../../assets/book/book-7.png";
import book8 from "../../assets/book/book-8.png";
const TopReviewedBooks = () => {
  return (
    <div className="md:container rounded-md mx-2 md:mx-auto my-7 md:my-15">
      <h1 className="md:text-[36px] text-[24px]  font-medium text-gray-700 text-center">
        Top Reviewed & Upvote Books
      </h1>
      <div className="bg-white mt-5 overflow-y-auto max-h-430 rounded-md p-5 shadow-md">
        <div className="grid md:gap-4 gap-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1   ">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="border flex items-center gap-2  text-[18px] font-semibold border-gray-200 shadow-md rounded-md "
          >
            <div className=" py-2 px-4 flex items-center w-20 h-25 bg-gray-200">
              <img className="" src={book1} alt="" />
            </div>
            <div>
              <p className="hover:text-blue-500"> Qur'an and Tafsir</p>
            <p className='text-yellow-600 font-medium'>Review :42</p>
            <p className="text-[14px] text-yellow-600 font-medium">Upvote: 84</p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="border flex items-center gap-2 text-[18px] font-semibold border-gray-200 shadow-md rounded-md "
          >
            <div className=" py-2 px-4 flex items-center w-20 h-25 bg-gray-200">
              <img className="" src={book2} alt="" />
            </div>
            <div>
              <p className="hover:text-blue-500">
              Marhaba JavaScript e maro thaba
            </p>
            <p className='text-yellow-600 font-medium'>Review : 40</p>
             <p className="text-[14px] text-yellow-600 font-medium">Upvote: 74</p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="border flex items-center gap-2 text-[18px] font-semibold border-gray-200 shadow-md rounded-md "
          >
            <div className=" py-2 px-4 flex items-center w-20 h-25 bg-gray-200">
              <img className="" src={book3} alt="" />
            </div>
           
            <div>
               <p className="hover:text-blue-500">Language Studies and Grammar</p>
               <p className='text-yellow-600 font-medium'>Review : 39</p>
                <p className="text-[14px] text-yellow-600 font-medium">Upvote: 72</p>
            </div>
            
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="border flex items-center gap-2 text-[18px] font-semibold border-gray-200 shadow-md rounded-md "
          >
            <div className=" py-2 px-4 flex items-center w-20 h-25 bg-gray-200">
              <img className="" src={book4} alt="" />
            </div>
            
             <div>
              <p className="hover:text-blue-500">
              Stories for Children and Teens
            </p>
               <p className='text-yellow-600 font-medium'>Review : 35</p>
                <p className="text-[14px] text-yellow-600 font-medium">Upvote: 69</p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="border flex items-center gap-2 text-[18px] font-semibold border-gray-200 shadow-md rounded-md "
          >
            <div className=" py-2 px-4 flex items-center w-20 h-25 bg-gray-200">
              <img className="" src={book5} alt="" />
            </div>
           <div>
             <p className="hover:text-blue-500"> Madrasa Books</p>
              <p className='text-yellow-600 font-medium'>Review : 31</p>
               <p className="text-[14px] text-yellow-600 font-medium">Upvote: 67</p>
           </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="border flex items-center gap-2 text-[18px] font-semibold border-gray-200 shadow-md rounded-md "
          >
            <div className=" py-2 px-4 flex items-center w-20 h-25 bg-gray-200">
              <img className="" src={book6} alt="" />
            </div>
           <div>
             <p className="hover:text-blue-500">Contemporary Novels</p>
            <p className='text-yellow-600 font-medium'>Review : 26</p>
             <p className="text-[14px] text-yellow-600 font-medium">Upvote: 61</p>
           </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="border flex items-center gap-2 text-[18px] font-semibold border-gray-200 shadow-md rounded-md "
          >
            <div className=" py-2 px-4 flex items-center w-20 h-25 bg-gray-200">
              <img className="" src={book7} alt="" />
            </div>
           <div>
             <p className="hover:text-blue-500">Biography of the Prophet</p>
            <p className='text-yellow-600 font-medium'>Review : 26</p>
             <p className="text-[14px] text-yellow-600 font-medium">Upvote: 58</p>
           </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="border flex items-center gap-2 text-[18px] font-semibold border-gray-200 shadow-md rounded-md "
          >
            <div className=" py-2 px-4 flex items-center w-20 h-25 bg-gray-200">
              <img className="" src={book8} alt="" />
            </div>
          <div>
              <p className="hover:text-blue-500">Thriller</p>
            <p className='text-yellow-600 font-medium'>Review : 21</p>
              <p className="text-[14px] text-yellow-600 font-medium">Upvote: 43</p>
            
          </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TopReviewedBooks;
