import React, { use, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import Loading from "../../Components/loading/Loading";

import More from "./More";
const Review = ({ book }) => {
  const [loading, setLoading] = useState(true);
  const [reviewDone, setReviewDone] = useState(false);
  const textRef = useRef();
  const { user } = use(AuthContext);
  const [reviews, setReviews] = useState([]);
  const handelReview = () => {
    const reviewText = textRef.current.value;

    if (!reviewText.trim()) {
      return Swal.fire({
        icon: "warning",
        title: "Review cannot be empty.",
      });
    }

    if (reviewDone) {
      return Swal.fire({
        icon: "warning",
        title:
          "You have already submitted a review. You cannot submit more than one review.",
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
      .post("http://localhost:8000/review", reviewData,{
        headers: {
              Authorization: `Bearer ${user.accessToken}`
            }
      })
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
          setReviewDone(true);
          getReviews();
        }
        textRef.current.value = "";
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getReviews = () => {
    axios
      .get("http://localhost:8000/review")
      .then((res) => {
        setReviews(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getReviews();
  }, []);

  useEffect(() => {
    if (reviews.length > 0 && user) {
      const match = reviews.find(
        (rev) => rev.book_id === book?._id && rev.user_email === user.email
      );
      setReviewDone(!!match);
    }
  }, [reviews, user, book]);

  
  return (
    <div>
      <div className="mt-10 bg-gray-100 p-6 rounded-md shadow-sm">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Book Reviews</h3>

        {/* Static Review List */}
        <div className="space-y-4 max-h-[240px] overflow-y-auto ">
          {loading && (
            <p className="text-2xl text-center my-5">Review Loading ......</p>
          )}
          {reviews.length < 1 && (
            <h4 className="text-[20px] font-semibold bg-white p-4 rounded-md shadow-sm border">
              No reviews available
            </h4>
          )}
          {reviews.length > 0 &&
            reviews.map((review) =>
              book?._id === review.book_id ? (
                <div
                  key={review._id}
                  className="bg-white p-4 rounded-md shadow-sm "
                >
                  {book?._id === review.book_id && (
                    <div className="flex justify-between gap-4">
                      <div>
                        <h2 className=" text-gray-700">@{review.user_name} <span className="ml-4">{review.created_at}</span></h2>
                        <p className="mt-2 text-black font-semibold">{review.review_text}</p>
                      </div>
                      {review?.user_email === user?.email && (
                        <div className=""><More review ={review} onUpdate={getReviews}></More></div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                ""
              )
            )}
        </div>

        {/* Review Form */}
        {user && (
          <div className="mt-6">
            <textarea
              className="w-full border rounded-md p-3 resize-none focus:outline-blue-400"
              rows="4"
              ref={textRef}
              placeholder="✍️ Write your review here..."
            ></textarea>

            <button
              onClick={handelReview}
              className="mt-3 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 font-semibold"
            >
              Post Review
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Review;
