import React, { use, useEffect, useRef, useState,} from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const Review = ({ book }) => {
  const textRef =useRef()
  const { user } = use(AuthContext);
  const [reviews,setReviews]=useState([])
  const handelReview = () => {
    const reviewText = textRef.current.value;
    if (!user) {
      return Swal.fire({
        position: "center",
        icon: "warning",
        title: "Please log in to write a review.",
      });
    }
    if (!reviewText.trim()) {
      return Swal.fire({
        icon: "warning",
        title: "Review cannot be empty.",
      });
    }

    const reviewData = {
      book_id: book?._id,
      user_email: user?.email,
      user_name: user?.displayName,
      review_text: reviewText,
      created_at: new Date().toLocaleString("sv-SE", {
        timeZone: "Asia/Dhaka",
      }),
    };

    axios
      .post("http://localhost:8000/review", reviewData)
      .then((data) => {
        console.log(data.data);
        if (data.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Post Review Successful",
            showConfirmButton: false,
            timer: 1500,
          });
           getReviews();
        }
         textRef.current.value = "";
      })
      .catch((error) => {
        console.log(error);
      });


      
  };
  const getReviews = () => {
    axios.get("http://localhost:8000/review")
      .then((res) => {
        setReviews(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
   useEffect(() => {
    getReviews();
  }, []);
   

  return (
    <div>
      <div className="mt-10 bg-gray-100 p-6 rounded-md shadow-sm">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          💬 Book Reviews
        </h3>

        {/* Static Review List */}
        <div className="space-y-4 max-h-[240px] overflow-y-auto ">
           {
            reviews.length < 1 && <h4 className="text-[20px] font-semibold bg-white p-4 rounded-md shadow-sm border">No reviews available</h4>
           }
          {
            reviews.length > 0 &&
            reviews.map(review=> <div key={review._id} className="bg-white p-4 rounded-md shadow-sm border">
              <h2>{review.user_name}</h2>
              <p>{review.review_text}</p>
            </div>)
            
          }
        </div>

        {/* Review Form */}
        <div className="mt-6">
          {user && (
            <textarea
              className="w-full border rounded-md p-3 resize-none focus:outline-blue-400"
              rows="4"
             ref={textRef}
              placeholder="✍️ Write your review here..."
            ></textarea>
          )}
          <button
            onClick={handelReview}
            className="mt-3 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 font-semibold"
          >
            Post Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
