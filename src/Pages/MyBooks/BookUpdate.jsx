import axios from "axios";
import React, { use, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../../Components/loading/Loading";
const BookUpdate = () => {
  const {user}=use(AuthContext)
    const navigate =useNavigate()
  const [book, setBooks] = useState([]);
  const [loading,setLoading]=useState(true)
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios.get(`https://boibaksho-server.vercel.app/Updatebook/${id}`,{
      headers: {
              Authorization: `Bearer ${user.accessToken}`
            }
    }).then((res) => {
      setBooks(res.data);
      setLoading(false)
    });
  }, [id,user]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const fromData = new FormData(from);
    const updateBook = Object.fromEntries(fromData.entries());
    updateBook.upvote = parseInt(updateBook.upvote);

    axios
      .patch(`https://boibaksho-server.vercel.app/updatebook/${id}`, updateBook,{
          headers: {
              Authorization: `Bearer ${user.accessToken}`
            }
      })
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
   if(loading){
    return <Loading></Loading>
   }
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
      className="md:container pt-[50px] md:pt-[72px] mx-5 md:mx-auto my-7 "
    >
      <h2 className="md:text-[36px] text-[24px] font-medium mb-4 text-center text-gray-700">
        Update Your Book
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 text-[17px] font-semibold text-black "
      >
        <div className="grid md:grid-cols-2 gap-y-3 md:gap-5">
          <fieldset>
            <label className='text-[14px] md:text-[17px]' htmlFor="">Book Title</label>
            <input
              defaultValue={book?.book_title}
              name="book_title"
              required
              placeholder="Book Title"
              className="w-full border p-2 bg-gray-100 rounded-md border-[#26AAED] text-[14px] placeholder:text-[14px]"
            />
          </fieldset>
          <fieldset>
            <label className='text-[14px] md:text-[17px]' htmlFor=""> Cover Photo URL </label>
            <input
              defaultValue={book?.cover_photo}
              name="cover_photo"
              required
              placeholder="Cover Photo URL"
              className="w-full border p-2 bg-gray-100 rounded-md border-[#26AAED] text-[14px] placeholder:text-[14px]"
            />
          </fieldset>
          <fieldset>
            <label className='text-[14px] md:text-[17px]' htmlFor="">Total Pages</label>
            <input
              defaultValue={book?.total_page}
              name="total_page"
              required
              placeholder="Total Pages"
              type="number"
              className="w-full border p-2 bg-gray-100 rounded-md border-[#26AAED] text-[14px] placeholder:text-[14px]"
            />
          </fieldset>
          <fieldset>
            <label className='text-[14px] md:text-[17px]' htmlFor="">Author Name</label>
            <input
              defaultValue={book?.book_author}
              name="book_author"
              type="text"
              required
              placeholder="Author Name"
              className="w-full border p-2 bg-gray-100 rounded-md border-[#26AAED] text-[14px] placeholder:text-[14px]"
            />
          </fieldset>

          <fieldset>
            <label className='text-[14px] md:text-[17px]' htmlFor=""> User Email</label>
            <input
              value={book?.user_email}
              name="user_email"
              readOnly
              className="w-full border p-2 bg-gray-100 rounded-md border-[#26AAED] text-[14px] placeholder:text-[14px]"
            />
          </fieldset>
          <fieldset>
            <label className='text-[14px] md:text-[17px]' htmlFor="">User Name</label>
            <input
              value={book?.user_name || ""}
              name="user_name"
              readOnly
              className="w-full border p-2 bg-gray-100 rounded-md border-[#26AAED] text-[14px] placeholder:text-[14px]"
            />
          </fieldset>

          <fieldset>
            <label className='text-[14px] md:text-[17px]'>Book Category</label>
            <select
              name="book_category"
              defaultValue={book?.book_category}
              required
              className="w-full border p-2 bg-gray-100 rounded-md border-[#26AAED] text-[14px] "
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
            <label className='text-[14px] md:text-[17px]'>Reading Status</label>
            <select
              name="reading_status"
              defaultValue={book?.reading_status}
              required
              className="w-full border p-2 bg-gray-100 rounded-md border-[#26AAED] text-[14px]"
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
            <label className='text-[14px] md:text-[17px]' htmlFor="">Upvote</label>
            <input
              value={book?.upvote}
              name="upvote"
              readOnly
              className="w-full border p-2 bg-gray-100 rounded-md border-[#26AAED] text-[14px] placeholder:text-[14px]"
            />
          </fieldset>
        </div>

        <fieldset>
          <label className='text-[14px] md:text-[17px]' htmlFor="">Book Overview</label>
          <textarea
            defaultValue={book?.book_overview}
            name="book_overview"
            placeholder="Overview"
            className="w-full border p-2 bg-gray-100 rounded-md border-[#26AAED] text-[14px] placeholder:text-[14px]"
          />
        </fieldset>

        <button
          type="submit"
          className="bg-[#2198D4] hover:bg-[#26AAED] text-white py-2 px-4 w-full rounded"
        >
          Update
        </button>
      </form>
    </motion.div>
  );
};

export default BookUpdate;
