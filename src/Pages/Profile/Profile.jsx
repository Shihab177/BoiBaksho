import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
const Profile = () => {
    const navigate =useNavigate()
    const {user,logout} = use(AuthContext)
    console.log(user)

    const handelLogout=()=>{
      logout().then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Logout Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
      
    });
    }
    return (
        <motion.div className='md:container mx-auto my-20'initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}>
           <h1>name: {user?.displayName}</h1>
           <img src={user?.photoURL} alt="" />
           <button className='bg-red-500 px-4 py-2 mt-8 text-white' onClick={handelLogout}>logout</button>
        </motion.div>
    );
};

export default Profile;