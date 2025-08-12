import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="bg-[#F1E9F6] font-poppins">
      <Navbar></Navbar>

      <div className="min-h-[calc(100vh-277px)] mx-2 xl:mx-0">
        <Outlet />
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
