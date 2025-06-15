import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FeaturedCategories = () => {
  const [loading, setLoading] = useState(true);
  const [fictionBook, setFictionBook] = useState([]);
  const [nonFictionBook, setNonFictionBook] = useState([]);
  const [fantasyBook, setFantasyBook] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/fiction/book")
      .then((res) => {
        setFictionBook(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:8000/nonfiction/book")
      .then((res) => {
        setNonFictionBook(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:8000/fantasty/book")
      .then((res) => {
        setFantasyBook(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="md:container mx-auto">
      <h1 className="text-[36px] font-bold  text-gray-800 text-center">
        Featured Categories
      </h1>
      <div className="bg-white rounded-sm shadow-md p-4 mt-5">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-md bg-[#D9F3DD] max-h-[420px]">
            <h2 className="text-[25px] font-semibold mt-3 text-center">
              Fiction
            </h2>
            <hr className="border border-dashed border-purple-700" />
            <div className="max-h-[340px] p-3 overflow-y-auto">
              {loading ? (
              <p className="font-semibold text-[20px] mt-5 text-center">
                Loading....
              </p>
            ) : (
              fictionBook.map((book) => (
                <div key={book?._id} className="">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                    className="border flex  gap-2 p-1 my-4 text-[18px] bg-white font-semibold border-gray-200 shadow-md rounded-md "
                  >
                    <div className=" py-2 px-4 flex items-center w-20 h-25 bg-gray-200">
                      <img className="" src={book.cover_photo} alt="" />
                    </div>
                    <div className="flex flex-col gap-2">
                     <p className="hover:text-blue-500 font-medium">{book?.book_title}</p>
                     <p className="hover:text-blue-500 text-gray-600">{book?.book_author}</p>
                    </div>
                  </motion.div>
                </div>
              ))
            )}
            </div>
          </div>
          <div className="rounded-md bg-[#EDF2FA]  max-h-[420px]">
            <h2 className="text-[25px] font-semibold mt-3 text-center">
              Non-Fiction
            </h2>
            <hr className="border border-dashed border-purple-700" />
            <div className="max-h-[340px] p-3 overflow-y-auto">
              {loading ? (
              <p className="font-semibold text-[20px] mt-5 text-center">
                Loading....
              </p>
            ) : (
              nonFictionBook.map((book) => (
                <div key={book?._id} className="">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                    className="border flex  gap-2 p-1 my-4 text-[18px] bg-white font-semibold border-gray-200 shadow-md rounded-md "
                  >
                    <div className=" py-2 px-4 flex items-center w-20 h-25 bg-gray-200">
                      <img className="" src={book.cover_photo} alt="" />
                    </div>
                    <div className="flex flex-col gap-2">
                     <p className="hover:text-blue-500 font-medium">{book?.book_title}</p>
                     <p className="hover:text-blue-500 text-gray-600">{book?.book_author}</p>
                    </div>
                  </motion.div>
                </div>
              ))
            )}
            </div>
          </div>
          
          <div className="rounded-md bg-[#D4E8EE] max-h-[420px]">
            <h2 className="text-[25px] font-semibold mt-3 text-center">
              Fantasy
            </h2> 
            <hr className="border border-dashed border-purple-700" />
            <div className="max-h-[340px] p-3 overflow-y-auto">
              {loading ? (
              <p className="font-semibold text-[20px] mt-5 text-center">
                Loading....
              </p>
            ) : (
              fantasyBook.map((book) => (
                <div key={book?._id} className="">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                    className="border flex  gap-2 p-1 my-4 text-[18px] bg-white font-semibold border-gray-200 shadow-md rounded-md "
                  >
                    <div className=" py-2 px-4 flex items-center w-20 h-25 bg-gray-200">
                      <img className="" src={book.cover_photo} alt="" />
                    </div>
                    <div className="flex flex-col gap-2">
                     <p className="hover:text-blue-500 font-medium">{book?.book_title}</p>
                     <p className="hover:text-blue-500 text-gray-600">{book?.book_author}</p>
                    </div>
                  </motion.div>
                </div>
              ))
            )}
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
