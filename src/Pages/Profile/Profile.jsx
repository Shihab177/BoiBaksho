import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import Chart from "./Chart";
import axios from "axios";
const Profile = () => {
  const [book, setBook] = useState([]);
  const { user } = use(AuthContext);
  console.log(user);
  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:8000/books?email=${user?.email}`)
        .then((res) => {
          setBook(res.data);
        });
    }
  }, [user]);

  return (
    <motion.div
      className="md:container mx-auto my-10"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto  flex justify-center max-w-250">
        <div className="flex gap-6 items-center">
          <img
            className="border-gray-300 rounded-full border-3 h-50 w-50"
            referrerPolicy="no-referrer"
            src={user?.photoURL}
            alt=""
          />
          <div className="text-[26px] font-semibold">
            <h1>Name: {user?.displayName}</h1>
            <h1>Email: {user?.email}</h1>
          </div>
        </div>
      </div>
      <hr className="border border-dashed border-purple-800 my-4" />

      <Chart book={book}></Chart>
    </motion.div>
  );
};

export default Profile;
