import axios from "axios";
import React, { useEffect, useState, useContext } from "react"; // 🔴 useContext যোগ
import { useParams } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import Upvote from "./Upvote";
import Review from "./Review";
import Loading from "../../Components/loading/Loading";
import { motion } from "framer-motion";

const Details = () => {
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState();
  const [readingStatus, setReadingStatus] = useState("");
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`https://boibaksho-server.vercel.app/details/${id}`)
      .then((data) => {
        setBook(data.data);
        setReadingStatus(data.data.reading_status);
        setLoading(false);
      });
  }, [id]);

  // Status Update Handler
  const handleStatusUpdate = async () => {
    let nextStatus = "";
    if (readingStatus === "Want-to-Read") {
      nextStatus = "Reading";
    } else if (readingStatus === "Reading") {
      nextStatus = "Read";
    } else {
      return;
    }

    try {
      const res = await axios.patch(
        `https://boibaksho-server.vercel.app/details/${id}`,
        {
          reading_status: nextStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      if (res.status === 200) {
        setReadingStatus(nextStatus);
      }
    } catch (error) {
      console.error("Status update failed:", error);
    }
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl bg-white p-5 rounded-md shadow-md my-4 mt-[81px] md:mb-7 mx-auto "
    >
      {loading ? (
        <p className="text-[30px] text-center mt-7 font-semibold">
          Loading Book Details ....
        </p>
      ) : (
        <div className="md:flex p-3 gap-5">
          <div className="bg-gray-200 md:h-[400px] md:w-[254px] h-48 w-[174px] md:mx-0 mx-auto p-2 rounded-md">
            <img
              src={book.cover_photo}
              alt={book.book_title}
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Book Info */}
          <div className="space-y-3 mt-4 md:mt-0 md:w-[calc(100%-254px)]">
            <h2 className="md:text-3xl text-2xl font-bold text-gray-800">
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
              <span className="font-semibold text-gray-700">Total Pages:</span>{" "}
              {book?.total_page}
            </p>

            {/*  Reading Status with Conditional Button */}
            <p>
              <span className="font-semibold text-gray-700 mr-1">
                Reading Status:
              </span>
              {readingStatus}

              {user?.email === book?.user_email && readingStatus !== "Read" && (
                <button
                  onClick={handleStatusUpdate}
                  className="ml-3 px-4 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
                >
                  {readingStatus === "Want-to-Read"
                    ? "Start Reading"
                    : "Mark as Read"}
                </button>
              )}
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
    </motion.div>
  );
};

export default Details;
