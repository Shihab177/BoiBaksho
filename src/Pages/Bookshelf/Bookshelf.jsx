import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";
const Bookshelf = () => {
  const navigate =useNavigate()
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:8000/books")
      .then((data) => {
        setBooks(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

    const handelDetails = (id)=>{
          navigate(`/details/${id}`)
    } 
  return (
    <div className="md:container mx-auto my-10">
      <h1 className="text-[36px] text-center font-bold text-gray-800">
        Browse All Books
      </h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white mt-5 p-4 rounded-sm"
      >
        {loading ? (
          <div className="text-center font-semibold text-lg mt-10">
            {" "}
            Loading books...
          </div>
        ) : (
          books.length === 0 && (
            <p className="text-center text-2xl mt-10 text-gray-900">
              {" "}
              No books found.
            </p>
          )
        )}

        {
          books && 
          <div className="grid md:grid-cols-3 gap-5">
          {books.map((book) => (
            <div
              key={book._id}
              className="bg-gray-200 shadow-md rounded-lg p-4 transition hover:shadow-xl"
            >
              <div className="flex gap-7">
                <div className="h-48 w-[133px]">
                  <img
                    src={book.cover_photo}
                    alt={book.book_title}
                    className="h-full w-full mx-auto rounded mb-3"
                  />
                </div>
                <div className="flex flex-col w-[calc(100%-233px)] gap-2">
                  <h2 className="text-xl font-semibold">{book.book_title}</h2>
                  <p className="text-gray-800 font-semibold">
                    Author: {book.book_author}
                  </p>
                  <p className="text-sm text-gray-700 font-semibold">
                    Category: {book.book_category}
                  </p>
                  <p className="text-sm text-yellow-600 mt-1 font-semibold">
                   
                    Upvotes: {book.upvote}
                  </p>
                </div>
              </div>
             <button onClick={()=>handelDetails(book._id)} className="text-[24px] text-white font-semibold py-2 bg-blue-500 hover:-blue-700 w-full rounded-md mt-6">Details</button>
            </div>
          ))}
        </div>
        }
      </motion.div>
    </div>
  );
};

export default Bookshelf;
