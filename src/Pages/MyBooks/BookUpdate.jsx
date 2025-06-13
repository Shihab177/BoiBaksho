import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router";
const BookUpdate = () => {
    const navigate =useNavigate()
  const [book, setBooks] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:8000/Updatebook/${id}`).then((res) => {
      setBooks(res.data);
    });
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const fromData = new FormData(from);
    const updateBook = Object.fromEntries(fromData.entries());
    updateBook.upvote = parseInt(updateBook.upvote);

    axios
      .patch(`http://localhost:8000/updatebook/${id}`, updateBook)
      .then((data) => {
        console.log(data.data)
        if (data.data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Update Successful",
            showConfirmButton: false,
            timer: 1500,
          });
            navigate('/MyBooks')
        }
    
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (!book || !book.book_title) {
    return (
      <div className="text-center  mt-10 font-bold">Loading book data...</div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="md:container mx-auto my-7 "
    >
      <h2 className="text-[36px] font-bold mb-4 text-center text-gray-700">
        Update Your Book
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 text-[17px] font-semibold p-6 bg-white rounded shadow"
      >
        <div className="grid md:grid-cols-2 md:gap-5">
          <fieldset>
            <label htmlFor="">Book Title</label>
            <input
              defaultValue={book?.book_title}
              name="book_title"
              required
              placeholder="Book Title"
              className="w-full border p-2"
            />
          </fieldset>
          <fieldset>
            <label htmlFor=""> Cover Photo URL </label>
            <input
              defaultValue={book?.cover_photo}
              name="cover_photo"
              required
              placeholder="Cover Photo URL"
              className="w-full border p-2"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="">Total Pages</label>
            <input
              defaultValue={book?.total_page}
              name="total_page"
              required
              placeholder="Total Pages"
              type="number"
              className="w-full border p-2"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="">Author Name</label>
            <input
              defaultValue={book?.book_author}
              name="book_author"
              type="text"
              required
              placeholder="Author Name"
              className="w-full border p-2"
            />
          </fieldset>

          <fieldset>
            <label htmlFor=""> User Email</label>
            <input
              value={book?.user_email}
              name="user_email"
              readOnly
              className="w-full border p-2 bg-gray-100"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="">User Name</label>
            <input
              value={book?.user_name || ""}
              name="user_name"
              readOnly
              className="w-full border p-2 bg-gray-100"
            />
          </fieldset>

          <fieldset>
            <label htmlFor="">Book Category</label>
            <select
              name="book_category"
              defaultValue={book?.book_category}
              required
              className="w-full border p-2"
            >
              <option disabled value="">
                Select Book Category
              </option>
              <option>Fiction</option>
              <option>Non-Fiction</option>
              <option>Fantasy</option>
            </select>
          </fieldset>
          <fieldset>
            <label htmlFor="">Reading Status</label>
            <select
              name="reading_status"
              defaultValue={book?.reading_status}
              required
              className="w-full border p-2"
            >
              <option disabled value="">
                Select Reading Status
              </option>
              <option>Read</option>
              <option>Reading</option>
              <option>Want-to-Read</option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="">Upvote</label>
            <input
              value={book?.upvote}
              name="upvote"
              readOnly
              className="w-full border p-2 bg-gray-100"
            />
          </fieldset>
        </div>

        <fieldset>
          <label htmlFor="">Book Overview</label>
          <textarea
            defaultValue={book?.book_overview}
            name="book_overview"
            placeholder="Overview"
            className="w-full border p-2"
          />
        </fieldset>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 w-full hover:bg-blue-700 rounded"
        >
          Update
        </button>
      </form>
    </motion.div>
  );
};

export default BookUpdate;
