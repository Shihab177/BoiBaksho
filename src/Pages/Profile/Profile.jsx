import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import Chart from "./Chart";
import axios from "axios";
import Loading from "../../Components/loading/Loading";
const Profile = () => {
  const [loading,setLoading]=useState(true)
  const [book, setBook] = useState([]);
  const { user } = use(AuthContext);
  console.log(user);
  useEffect(() => {
    if (user) {
      axios
        .get(`https://boibaksho-server.vercel.app/books?email=${user?.email}`,{
            headers: {
              Authorization: `Bearer ${user.accessToken}`
            }})
        .then((res) => {
          setBook(res.data);
          setLoading(false)
        });
    }
  }, [user]);

  if(loading){
    return <Loading></Loading>
  }

  return (
    <motion.div
      className="md:container mx-auto my-10"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="md:container mx-auto p-3 md:p-4 bg-white shadow-md rounded-md my-5 ">
        <h1 className="font-bold text-center  text-[30px]">Profile</h1>
          <div className="flex items-center gap-5">
            <img
            className="border-gray-300 rounded-full border-3 md:h-30 md:w-30 h-20 w-20"
            referrerPolicy="no-referrer"
            src={user?.photoURL}
            alt=""
          />
          <div className="text-[20px] flex flex-col md:gap-3 gap-1 font-semibold">
            <h1 className="md:text-[26px] text-[18px] font-bold"> {user?.displayName}</h1>
            <h1 className="text-gray-600 font-bold">{user?.email}</h1>
          </div>
          </div>
        
      </div>
     

      <Chart book={book}></Chart>
    </motion.div>
  );
};

export default Profile;
