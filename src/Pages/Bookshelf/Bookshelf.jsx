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

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 6;

  // Filter books
  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.book_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.book_author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter
      ? book.reading_status === statusFilter
      : true;

    return matchesSearch && matchesStatus;
  }); 

  // Calculate books to show on current page
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  // Number of pages
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

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

  // Pagination handlers
  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  // If searchTerm or statusFilter changes, reset to first page
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="md:container h-full  md:mx-auto md:mb-10 my-4 mx-2">
      <div className="pt-[55px] md:pt-[85px]">
        <h1 className="text-[24px] md:text-[36px] font-medium text-center"> Browse All Books</h1>
      {/* Search and Filter UI */}
      <div className="flex flex-col mx-4 md:mx-0 md:flex-row gap-4 justify-center md:items-center mt-5">
        
        <input
          type="text"
          placeholder="Search by title or author"
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="border-2 border-[#26AAED] p-2 rounded-3xl w-full md:w-1/2"
        />

        <select
          value={statusFilter} 
          onChange={(e) => setStatusFilter(e.target.value)} 
          className="border-2 border-[#26AAED] p-2 rounded w-40 md:w-1/4"
        >
          <option value="">All Reading Status</option>
          <option value="Read">Read</option>
          <option value="Reading">Reading</option>
          <option value="Want-to-Read">Want to Read</option>
        </select>
      </div>

      {/* Book List */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mt-8  md:max-h-[700px]  overflow-y-auto rounded-sm"
      >
        {filteredBooks.length === 0 ? (
          <p className="text-center text-2xl mt-10 text-gray-900">
            No books found.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {currentBooks.map((book) => (
              <div
                key={book._id}
                className="bg-white shadow-md rounded-lg p-4 transition hover:shadow-xl"
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
                    <h2 className="text-xl font-semibold">{book.book_title}</h2>
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
                  className="text-[17px] md:text-[20px] font-semibold py-2 bg-[#2198D4] hover:bg-[#26AAED] text-white w-full rounded-2xl mt-6"
                >
                  Details
                </button>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Pagination Controls */}
      {filteredBooks.length > booksPerPage && (
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md font-semibold ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#2198D4] hover:bg-[#26AAED] text-white"
            }`}
          >
            Previous
          </button>
          <p className="text-lg font-semibold">
            Page {currentPage} of {totalPages}
          </p>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md font-semibold ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#2198D4] hover:bg-[#26AAED] text-white"
            }`}
          >
            Next
          </button>
        </div>
      )}
      </div>
    </div>
  );
};

export default Bookshelf;
