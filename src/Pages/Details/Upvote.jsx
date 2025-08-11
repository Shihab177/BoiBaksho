import React, { use, useState } from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
const Upvote = ({ book }) => {
  const [likeCount ,setLikeCount]=useState(book.upvote || 0)
  const { user } = use(AuthContext);
  const handelClick = () => {
    if (user?.email === book?.user_email) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "You cannot Vote your own post.",
      });
    }
    if (!user) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "Please log in before voting for this book.",
      });
    }

    axios.patch(`https://boibaksho-server.vercel.app/upvote/${book?._id}`,{},{
      headers: {
              Authorization: `Bearer ${user.accessToken}`
            }
    })
    .then(data=>{
     
     setLikeCount(data.data.upvote)
    })
  };
  return (
    <div className="mt-3">
      <span className="text-black font-semibold">{likeCount} People Upvoted</span>
      <button
        onClick={handelClick}
        className="flex items-center mt-2 gap-2 px-4 py-2 rounded-md text-white font-semibold bg-[#2198D4] hover:bg-[#26AAED] transition"
      >
        <BiSolidUpArrow className="text-lg" />
        Upvote
      </button>
    </div>
  );
};

export default Upvote;
