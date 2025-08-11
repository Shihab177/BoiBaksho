import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
const PopularBooks = () => {
  const [books, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://boibaksho-server.vercel.app/highestupvote/book`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handelDetails = (id) => {
    navigate(`/details/${id}`);
  };
  console.log(books);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="md:container md:mx-auto my-8 md:mt-15 mx-2"
    >
      <h1 className="md:text-[36px] text-[24px] font-medium text-gray-700 text-center">
        Popular Books
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2  rounded-sm mt-5  gap-5">
        {loading ? (
          <p className="text-center mt-7 font-semibold text-2xl">
            Loading books....
          </p>
        ) : (
          books.map((book) => (
            <div
              key={book._id}
              className="bg-white shadow-md rounded-lg p-4 transition hover:shadow-xl"
            >
              <div className="xl:flex  gap-7">
                <div className="lg:h-48 xl:mx-0 mx-auto lg:w-[133px] h-38 w-[120px]">
                  <img
                    src={book.cover_photo}
                    alt={book.book_title}
                    className="h-full w-full mx-auto rounded mb-3"
                  />
                </div>
                <div className="flex flex-col lg:mt-0 mt-2 xl:w-[calc(100%-233px)] gap-2">
                  <h2 className="text-xl font-semibold">{book.book_title}</h2>
                  <p className="text-gray-800 font-semibold">
                    Author: {book.book_author}
                  </p>
                  <p className="text-sm text-gray-700 font-semibold">
                    Category: {book.book_category}
                  </p>
                  <p className="text-sm text-yellow-600 mt-1 font-semibold">
                    Upvote: {book.upvote}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handelDetails(book._id)}
                className="md:text-[20px] text-[17px]  font-semibold py-2 text-white bg-[#2198D4] hover:bg-[#26AAED] w-full rounded-2xl mt-6"
              >
                Details
              </button>
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
};

export default PopularBooks;
