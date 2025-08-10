import React, { use, useEffect, useRef, useState } from "react";
import logo from "../../assets/logo (2).png";
import { Link, NavLink, useNavigate } from "react-router";
import "./Navbar.css";
import { AuthContext } from "../../Provider/AuthProvider";
import { CiMenuFries } from "react-icons/ci";
import Swal from "sweetalert2";
import {
  FaHome,
  FaBook,
  FaPlusCircle,
  FaUserAlt,
  FaBookOpen,
} from "react-icons/fa";
const Navbar = () => {
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const [menu, setMenu] = useState(false);
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
  const handelMenu = () => {
    setMenu(!menu);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenu(false);
      }
    };

    if (menu) {
      window.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menu]);

  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 w-full z-50 py-3 px-2 flex items-center justify-between bg-[#F1E9F7] shadow-md">
        <div className="flex lg:w-4/12 md:w-3/12 gap-6">
          <img className="w-14 h-14 lg:flex hidden" src={logo} alt="Logo" />
          <button ref={buttonRef} className="md:hidden" onClick={handelMenu}>
            <CiMenuFries size={27} />
          </button>

          <h1 className="lg:text-[38px] md:text-[28px] text-[20px] font-semibold md:font-bold">
            BoiBaksho
          </h1>
        </div>
        <div className="lg:w-6/12 md:w-7/12 md:flex hidden xl:text-[20px] md:text-[17px] font-semibold justify-between">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/Bookshelf">
            <p>Bookshelf</p>
          </NavLink>
          <NavLink to="/AddBook">
            <p>Add Book</p>
          </NavLink>
          {user && (
            <>
              <NavLink to="/MyBooks">
                <p>My Books </p>
              </NavLink>
              <NavLink to="/Profile">
                <p>Profile </p>
              </NavLink>
            </>
          )}
        </div>
        <div className="lg:w-3/12 md:w-2/12 flex justify-end">
          {user ? (
            <button
              onClick={handelLogout}
              className="lg:text-[20px] md:text-[17px] text-[13px] bg-[#2198D4] hover:bg-[#26AAED] rounded-sm px-3 py-1 md:px-3  lg:px-4 md:py-2 text-white font-medium md:font-semibold"
            >
              {" "}
              Logout
            </button>
          ) : (
            <Link to="/auth/login">
              {" "}
              <button className="lg:text-[20px] md:text-[17px] text-[13px] bg-[#2198D4] hover:bg-[#26AAED] rounded-sm px-3 py-1 md:px-3  lg:px-4 md:py-2 text-white font-medium md:font-semibold">
                Login
              </button>
            </Link>
          )}
        </div>
      </nav>
      {menu && (
        <div
          ref={menuRef}
          className="w-[60%] absolute md:hidden p-4 bg-[#7E5EC1] z-50 h-screen rounded-sm"
        >
          <div className="flex items-center gap-4  mb-6">
            <img className="w-10 h-10" src={logo} alt="Logo" />
          </div>
          <div className="text-[16px] font-semibold flex flex-col gap-2 text-white">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "flex gap-2 items-center bg-[#F1E9F6] text-black p-2 rounded-sm"
                  : "flex gap-2 items-center"
              }
            >
              <FaHome />
              <h4>Home</h4>
            </NavLink>
            <NavLink
              to="/Bookshelf"
              className={({ isActive }) =>
                isActive
                  ? "flex gap-2 items-center bg-[#F1E9F6] text-black p-2 rounded-sm"
                  : "flex gap-2 items-center"
              }
            >
              <FaBookOpen />
              <h4>Bookshelf</h4>
            </NavLink>
            <NavLink
              to="/AddBook"
              className={({ isActive }) =>
                isActive
                  ? "flex gap-2 items-center bg-[#F1E9F6] text-black p-2 rounded-sm"
                  : "flex gap-2 items-center"
              }
            >
              <FaPlusCircle />
              <h4>Add Book</h4>
            </NavLink>
            <NavLink
              to="/MyBooks"
              className={({ isActive }) =>
                isActive
                  ? "flex gap-2 items-center bg-[#F1E9F6] text-black p-2 rounded-sm"
                  : "flex gap-2 items-center"
              }
            >
              <FaBook />
              <h4>My Books</h4>
            </NavLink>
            <NavLink
              to="/Profile"
              className={({ isActive }) =>
                isActive
                  ? "flex gap-2 items-center bg-[#F1E9F6] text-black p-2 rounded-sm"
                  : "flex gap-2 items-center"
              }
            >
              <FaUserAlt />
              <h4>Profile</h4>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
