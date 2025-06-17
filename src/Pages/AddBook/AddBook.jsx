import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
const AddBook = () => {
     const {user}= use(AuthContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        const from =e.target
        const fromData = new FormData(from);
        const newBook = Object.fromEntries(fromData.entries());
          newBook.upvote = parseInt(newBook.upvote);

        axios.post ('https://boibaksho-server.vercel.app/books',newBook,{
           headers: {
              Authorization: `Bearer ${user.accessToken}`
            }
        })
        .then(data=>{
              if (data?.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Add Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
              from.reset()
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <motion.div initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }} className="md:container mx-auto mt-[55px] md:mt-[81px] my-4 md:mb-7 ">
      <h2 className="md:text-[36px] text-[28px] font-bold mb-4 text-center text-gray-700">Add A New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4 text-[17px] font-semibold p-6 bg-white rounded shadow">
         <div className="grid md:grid-cols-2 md:gap-5">
            <fieldset>
            <label htmlFor="">Book Title</label>
             <input name="book_title"  required placeholder="Book Title" className="w-full border p-2" />
         </fieldset>
         <fieldset>
            <label htmlFor=""> Cover Photo URL </label>
             <input name="cover_photo"  required placeholder="Cover Photo URL" className="w-full border p-2" />
         </fieldset>
         <fieldset>
            <label htmlFor="">Total Pages</label>
            <input name="total_page"  required placeholder="Total Pages" type="number" className="w-full border p-2" />
         </fieldset>
        <fieldset>
            <label htmlFor="">Author Name</label>
             <input name="book_author" type="text"  required placeholder="Author Name" className="w-full border p-2" />
        </fieldset>

       <fieldset>
        <label htmlFor=""> User Email</label>
         <input value={user?.email || ""} name='user_email' readOnly className="w-full border p-2 bg-gray-100" />
       </fieldset>
        <fieldset>
            <label htmlFor="">User Name</label>
            <input value={user?.displayName || ""} name='user_name' readOnly className="w-full border p-2 bg-gray-100" />
        </fieldset>

       <fieldset>
        <label htmlFor="">Book Category</label>
          <select name="book_category" defaultValue="" required className="w-full border p-2">
          <option disabled value="">Select Book Category</option>
          <option>Fiction</option>
          <option>Non-Fiction</option>
          <option>Fantasy</option>
        </select>
       </fieldset>
        <fieldset>
            <label htmlFor="">Reading Status</label>
            <select name="reading_status" defaultValue="" required  className="w-full border p-2">
                <option disabled value="">Select Reading Status</option>
          <option>Read</option>
          <option>Reading</option>
          <option>Want-to-Read</option>
        </select>
        </fieldset>
        
         <fieldset>
            <label htmlFor="">Upvote</label>
            <input value={0} name='upvote' readOnly className="w-full border p-2 bg-gray-100" />
         </fieldset>

         </div>
          
       <fieldset>
        <label htmlFor="">Book Overview</label>
           <textarea name="book_overview"  placeholder="Overview" className="w-full border p-2" />
       </fieldset>

       

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 w-full hover:bg-blue-700 rounded">Add Book</button>
      </form>
    </motion.div>
    );
};

export default AddBook;