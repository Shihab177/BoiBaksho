import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const PopularBooks = () => {
    const [books,setBook]=useState([])
    const [loading,setLoading]=useState(true)
    const navigate =useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:8000/highestupvote/book`)
        .then(res=>{
            setBook(res.data)
            setLoading(false)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])
     const handelDetails = (id)=>{
          navigate(`/details/${id}`)
    } 
    console.log(books)
    return (
        <div className='md:container mx-auto my-15'>
            <h1 className='text-[36px] font-bold text-gray-800 text-center'>Popular Books</h1>
            <div className="grid md:grid-cols-3 bg-white p-4 rounded-sm mt-5 shadow-md gap-5">
               {
                 loading ? <p className='text-center font-semibold text-2xl'>Loading books....</p>
                 :
                 books.map(book=> <div key={book._id} className='bg-gray-200 shadow-md rounded-lg p-4 transition hover:shadow-xl'>
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
                   
                    Upvote: {book.upvote}
                  </p>
                </div>
              </div>
             <button onClick={()=>handelDetails(book._id)} className="text-[24px]  font-semibold py-2 text-white bg-blue-500 hover:bg-blue-700 w-full rounded-2xl mt-6">Details</button>
                 </div>)
               }
               
            </div>
        </div>
    );
};

export default PopularBooks;