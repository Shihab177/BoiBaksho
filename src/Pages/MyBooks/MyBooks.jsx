import React, { use, useEffect, useState } from 'react';
import { motion } from "framer-motion";
import axios from 'axios';
import {AuthContext} from '../../Provider/AuthProvider'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import Loading from '../../Components/loading/Loading';
const MyBooks = () => {
  const navigate = useNavigate()
  const [refresh, setRefresh] = useState(false);
    const {user}=use(AuthContext)
    const [books,setBooks]=useState([])
    const [loading,setLoading]=useState(true)
    console.log(user.accessToken)

    useEffect(()=>{
        if(user){
          axios.get(`https://boibaksho-server.vercel.app/books?email=${user?.email}`,{
            headers: {
              Authorization: `Bearer ${user.accessToken}`
            }
          })
        .then(data=>{
          console.log(data.data)
        
          setBooks(data.data)
          setLoading(false)
        })
        .catch(error=>{
          console.log(error)
        })
        }
    },[user,refresh])

    const handelDelete = (id)=>{
       Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      axios.delete(`https://boibaksho-server.vercel.app/mybook/${id}`,{
            headers: {
              Authorization: `Bearer ${user.accessToken}`
            }})
      .then(res=>{
        console.log(res.data)
        if (res.data.deletedCount > 0) {
             Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your post has been deleted.",
                        showConfirmButton: false,
                        timer: 1500,
                      });
            setRefresh(prev=> !prev)
          }
      })
      .catch(error=>{
        console.log(error)
      })
    }
  });//
      
    }
    if(loading){
      return <Loading></Loading>
    }
    return (
       <div className="md:container mx-auto my-10">
   
      <motion.h1 initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }} className="text-[36px] text-center font-bold text-gray-800">
        My added books
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white mt-5 p-4 rounded-sm"
      >
        {loading ? (
          <div className="text-center min-h-screen font-semibold text-lg mt-10">
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
          <div className="grid md:grid-cols-3 max-h-[762px] overflow-y-auto  gap-5">
          {books.map((book) => (
            <div
              key={book._id}
              className="bg-gray-200 max-w-[646px] shadow-md rounded-lg p-4 transition hover:shadow-xl"
            >
              <div className="">
                <div className="h-58 mb-5 mx-auto w-[193px]">
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
                  <p className='text-gray-800 font-semibold'>Pages: {book.total_page}</p>
                  <p className=" text-gray-700 font-semibold">
                    Category: {book.book_category}
                  </p>
                  <p className='text-gray-700 font-semibold'>Status: {book.reading_status}</p>
                  <p className="text-sm text-yellow-600 mt-1 font-semibold">
                   
                    Upvotes: {book.upvote}
                  </p>
                 
                </div>
                 <p className='text-gray-700 font-semibold'>Overview: {book.book_overview}</p>
              </div>
              <div className="flex mt-6 gap-6">
                <button  onClick={()=>navigate(`/bookUpdate/${book?._id}`)} className='text-[20px] font-semibold px-4 py-2 text-white rounded-sm bg-blue-500 hover:bg-blue-700'>Update</button>
                <button onClick={()=>handelDelete(book?._id)} className='text-[20px] font-semibold px-4 py-2 text-white rounded-sm bg-red-500 hover:bg-red-600'>Delete</button>
              </div>
            </div>
          ))}
        </div>
        }
      </motion.div>
    </div>
    );
};

export default MyBooks;