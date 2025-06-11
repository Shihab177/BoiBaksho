import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import Upvote from "./Upvote";
import Review from "./Review";

const Details = () => {
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState();
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8000/details/${id}`).then((data) => {
      setBook(data.data);
      setLoading(false);
    });
  }, [id]);
  console.log(book);
  return (
    <div className="max-w-4xl bg-white p-5 rounded-md shadow-md my-7 mx-auto ">
     
        {loading ? (
          <p className="text-[30px] text-center mt-7 font-semibold">Loading Book Details ....</p>
        ) : (
          <div className="flex p-3 gap-5">
            <div className="bg-gray-200 max-h-[347px] w-[254px] p-2 rounded-md">
              <img
                src={book.cover_photo}
                alt={book.book_title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Book Info */}
            <div className="space-y-3 w-[calc(100%-254px)]">
              <h2 className="text-3xl font-bold text-gray-800">
                {book.book_title}
              </h2>
              <p>
                <span className="font-semibold text-gray-700">Author:</span>
                {book?.book_author}
              </p>
              <p>
                <span className="font-semibold text-gray-700">Category:</span>
                {book?.book_category}
              </p>
              <p>
                <span className="font-semibold text-gray-700">
                  Total Pages:
                </span>{" "}
                {book?.total_page}
              </p>
              <p>
                <span className="font-semibold text-gray-700">
                  Reading Status:
                </span>{" "}
                {book?.reading_status}
              </p>
              <div>
                <h4 className="font-semibold text-gray-700">Overview:</h4>
                <p className="text-gray-600">{book?.book_overview}</p>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                <p>
                  <strong>Uploaded by:</strong> {book?.user_name}
                </p>
                <p>
                  <strong>Email:</strong> {book?.user_email}
                </p>
              </div>
              <div>
                <Upvote book={book}></Upvote>
              </div>
            </div>
          </div>
        )}

        <Review book={book}></Review>
     
    </div>
  );
};

export default Details;
