import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
             <Navbar></Navbar>
            <main className='md:container mx-auto min-h-[calc(100vh-358px)]'>
              <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;