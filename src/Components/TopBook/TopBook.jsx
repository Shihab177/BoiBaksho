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
const TopBook = () => {
  return (
    <div className="md:container  mx-auto my-15">
      <h1 className="text-[36px]  font-bold text-gray-700 text-center">
        Top Book Categories
      </h1>
      <div className="bg-white mt-5 max-h-80 rounded-sm p-5 shadow-md">
        <div className="grid gap-4 md:grid-cols-4 grid-cols-2 ">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="border flex items-center gap-2 text-[18px] font-semibold border-gray-200 shadow-md rounded-md "
          >
            <div className=" py-2 px-4 flex items-center w-20 h-25 bg-gray-200">
              <img className="" src={book1} alt="" />
            </div>
            <p className="hover:text-blue-500"> Qur'an and Tafsir</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="border flex items-center gap-2 text-[18px] font-semibold border-gray-200 shadow-md rounded-md "
          >
            <div className=" py-2 px-4 flex items-center w-20 h-25 bg-gray-200">
              <img className="" src={book2} alt="" />
            </div>
            <p className="hover:text-blue-500">
              Marhaba JavaScript e maro thaba
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="border flex items-center gap-2 text-[18px] font-semibold border-gray-200 shadow-md rounded-md "
          >
            <div className=" py-2 px-4 flex items-center w-20 h-25 bg-gray-200">
              <img className="" src={book3} alt="" />
            </div>
            <p className="hover:text-blue-500">Language Studies and Grammar</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="border flex items-center gap-2 text-[18px] font-semibold border-gray-200 shadow-md rounded-md "
          >
            <div className=" py-2 px-4 flex items-center w-20 h-25 bg-gray-200">
              <img className="" src={book4} alt="" />
            </div>
            <p className="hover:text-blue-500">
              {" "}
              Stories for Children and Teens
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="border flex items-center gap-2 text-[18px] font-semibold border-gray-200 shadow-md rounded-md "
          >
            <div className=" py-2 px-4 flex items-center w-20 h-25 bg-gray-200">
              <img className="" src={book5} alt="" />
            </div>
            <p className="hover:text-blue-500"> Madrasa Books</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="border flex items-center gap-2 text-[18px] font-semibold border-gray-200 shadow-md rounded-md "
          >
            <div className=" py-2 px-4 flex items-center w-20 h-25 bg-gray-200">
              <img className="" src={book6} alt="" />
            </div>
            <p className="hover:text-blue-500">Contemporary Novels</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="border flex items-center gap-2 text-[18px] font-semibold border-gray-200 shadow-md rounded-md "
          >
            <div className=" py-2 px-4 flex items-center w-20 h-25 bg-gray-200">
              <img className="" src={book7} alt="" />
            </div>
            <p className="hover:text-blue-500">Biography of the Prophet</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="border flex items-center gap-2 text-[18px] font-semibold border-gray-200 shadow-md rounded-md "
          >
            <div className=" py-2 px-4 flex items-center w-20 h-25 bg-gray-200">
              <img className="" src={book8} alt="" />
            </div>
            <p className="hover:text-blue-500">Thriller</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TopBook;
