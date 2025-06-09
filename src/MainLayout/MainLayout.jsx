import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet, } from 'react-router';
import Footer from '../Components/Footer/Footer';




const MainLayout = () => {
 
    return (
        <div>
           <Navbar></Navbar>
           
        <div
        
          className="min-h-[calc(100vh-358px)]"
          
        >
        <Outlet />
         
        </div>
      
           
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;