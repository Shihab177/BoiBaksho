import React, { use } from "react";
import logo from "../../assets/logo (2).png";
import { Link, NavLink, useNavigate } from "react-router";
import './Navbar.css'
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
const Navbar = () => {
  const {user,logout}=use(AuthContext)
  const navigate = useNavigate()
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
    <div>
      <nav className=" py-3 px-2 flex items-center bg-[#F1E9F7]">
        <div className="flex w-4/12 gap-6">
          <img className="w-14 h-14 " src={logo} alt="Logo" />
          <h1 className="text-[38px] font-bold">BoiBaksho</h1>
        </div>
        <div className="w-6/12  flex text-[20px] font-semibold justify-between">
          <NavLink to='/'>
            <p>Home</p>
          </NavLink>
          <NavLink to='/Bookshelf'>
            <p>Bookshelf</p>
          </NavLink>
          <NavLink to='/AddBook'>
            <p>Add Book</p>
          </NavLink>
          <NavLink to='/MyBooks'>
            <p>My Books </p>
          </NavLink>
          <NavLink to='/Profile'>
            <p>Profile </p>
          </NavLink>
        </div>
        <div className="w-3/12 flex justify-end">
        {
          user? 
           <button onClick={handelLogout} className="text-[25px] bg-blue-600 rounded-md px-4 py-2 text-white font-bold"> Logout</button>
           :<Link to='/auth/login'> <button className="text-[25px] bg-blue-600 rounded-md px-4 py-2 text-white font-bold">Login</button></Link>
        }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
