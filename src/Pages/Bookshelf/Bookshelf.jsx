import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";
import Loading from "../../Components/loading/Loading";

const Bookshelf = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState(""); 
  const [statusFilter, setStatusFilter] = useState(""); 

  // filter books
  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.book_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.book_author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter
      ? book.reading_status === statusFilter
      : true;

    return matchesSearch && matchesStatus;
  }); 

  useEffect(() => {
    axios
      .get("https://boibaksho-server.vercel.app/allbooks")
      .then((data) => {
        setBooks(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handelDetails = (id) => {
    navigate(`/details/${id}`);
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="md:container mt-[55px] md:mt-[81px] mx-auto md:mb-10 my-4">
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="md:text-[36px] text-[28px] text-center font-bold text-gray-800"
      >
        Browse All Books
      </motion.h1>

      {/*  Search and Filter UI */}
      <div className="flex flex-col mx-4 md:mx-0 md:flex-row  gap-4 justify-center items-center mt-8">
        
          <input
          type="text"
          placeholder="Search by title or author"
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="border-2 border-blue-700 p-2 rounded-3xl w-full md:w-1/2"
        />

        
        <select
          value={statusFilter} // 
          onChange={(e) => setStatusFilter(e.target.value)} 
          className="border-2 border-blue-800 p-2 rounded w-full md:w-1/4"
        >
          <option value="">All Reading Status</option>
          <option value="Read">Read</option>
          <option value="Reading">Reading</option>
          <option value="Want-to-Read">Want to Read</option>
        </select>
      </div>
      {/*  END */}

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white mt-5 p-4 md:max-h-[700px]  max-h-[500px] overflow-y-auto rounded-sm"
      >
        {loading ? (
          <div className="text-center font-semibold text-lg mt-10">
            Loading books...
          </div>
        ) : (
          filteredBooks.length === 0 && (
            <p className="text-center text-2xl mt-10 text-gray-900">
              No books found.
            </p>
          )
        )}

        {filteredBooks.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredBooks.map((book) => (
              <div
                key={book._id}
                className="bg-gray-200 shadow-md rounded-lg p-4 transition hover:shadow-xl"
              >
                <div className="xl:flex gap-7">
                  <div className="lg:h-48 mx-auto xl:mx-0 md:w-[133px] h-38 w-[120px]">
                    <img
                      src={book.cover_photo}
                      alt={book.book_title}
                      className="h-full w-full mx-auto rounded mb-3"
                    />
                  </div>
                  <div className="flex flex-col mt-2 md:mt-0 xl:w-[calc(100%-233px)] gap-2">
                    <h2 className="text-xl font-semibold">
                      {book.book_title}
                    </h2>
                    <p className="text-gray-800 font-semibold">
                      Author: {book.book_author}
                    </p>
                    <p className="text-sm text-gray-700 font-semibold">
                      Category: {book.book_category}
                    </p>
                   
                   
                    <p className="text-sm font-semibold text-gray-600 mt-1">
                      Status: {book.reading_status}
                    </p>
                     <p className="text-sm text-yellow-600 mt-1 font-semibold">
                      Upvote: {book.upvote}
                    </p>
                    
                  </div>
                </div>
                <button
                  onClick={() => handelDetails(book._id)}
                  className="text-[24px] font-semibold py-2 text-white bg-blue-500 hover:bg-blue-700 w-full rounded-2xl mt-6"
                >
                  Details
                </button>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Bookshelf;
