import React, { use, useState } from "react";
import logo from "../../assets/logo (2).png";
import { Link, NavLink, useNavigate } from "react-router";
import "./Navbar.css";
import { AuthContext } from "../../Provider/AuthProvider";
import { CiMenuFries } from "react-icons/ci";
import Swal from "sweetalert2";
const Navbar = () => {
  const [menu,setMenu]=useState(false)
  const { user, logout } = use(AuthContext);
  const navigate = useNavigate();
  const handelLogout = () => {
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
  };
 const handelMenu =()=>{
   setMenu(!menu)
 }
 
  return (
    <div className="relative">
      <nav className=" py-3 px-2 flex items-center justify-between bg-[#F1E9F7]">
        <div className="flex lg:w-4/12 md:w-3/12 gap-6">
          <img className="w-14 h-14 lg:flex hidden" src={logo} alt="Logo" />
          <button className="md:hidden" onClick={handelMenu}><CiMenuFries size={23} /></button>
          
          <h1 className="lg:text-[38px] md:text-[28px] text-[20px] font-semibold md:font-bold">BoiBaksho</h1>
        </div>
        <div className="lg:w-6/12 md:w-7/12 md:flex hidden md:text-[17px] font-semibold justify-between">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/Bookshelf">
            <p>Bookshelf</p>
          </NavLink>
          <NavLink to="/AddBook">
            <p>Add Book</p>
          </NavLink>
          <NavLink to="/MyBooks">
            <p>My Books </p>
          </NavLink>
          <NavLink to="/Profile">
            <p>Profile </p>
          </NavLink>
        </div>
        <div className="lg:w-3/12 md:w-2/12 flex justify-end">
          {user ? (
            <button
              onClick={handelLogout}
              className="md:text-[25px] text-[15px] bg-blue-600 rounded-md px-2 py-1 lg:px-4 lg:py-2 text-white font-bold"
            >
              {" "}
              Logout
            </button>
          ) : (
            <Link to="/auth/login">
              {" "}
              <button className="text-[25px] bg-blue-600 rounded-md px-4 py-2 text-white font-bold">
                Login
              </button>
            </Link>
          )}
        </div>
        
      </nav>
      {
            menu && <div className="w-[60%] absolute top-13 p-4 bg-yellow-100 z-50 h-screen rounded-sm">
              <div className="text-[16px] font-semibold flex flex-col gap-2">
          <NavLink to="/">
            <h4>Home</h4>
          </NavLink>
          <NavLink to="/Bookshelf">
            <h4>Bookshelf</h4>
          </NavLink>
          <NavLink to="/AddBook">
            <h4>Add Book</h4>
          </NavLink>
          <NavLink to="/MyBooks">
            <h4>My Books </h4>
          </NavLink>
          <NavLink to="/Profile">
            <h4>Profile </h4>
          </NavLink>
        </div>
             
              
          </div>
          }
    </div>
  );
};

export default Navbar;
