import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Bookshelf from "../Pages/Bookshelf/Bookshelf";
import AddBook from "../Pages/AddBook/AddBook";
import MyBooks from "../Pages/MyBooks/MyBooks";
import Profile from "../Pages/Profile/Profile";
import AuthLayout from "../AuthLayout/AuthLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "../Provider/PrivateRoute";
import Details from "../Pages/Details/Details";
import BookUpdate from "../Pages/MyBooks/BookUpdate";


export const router =createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                Component:Home
            },
            {
                path:'/Bookshelf',
                Component:Bookshelf
            },
            {
                path:'/AddBook',
                element:<PrivateRoute><AddBook></AddBook></PrivateRoute>
            },
            {
                path:'/MyBooks',
                element:<PrivateRoute><MyBooks></MyBooks></PrivateRoute>
            },
            {
               path:'/Profile',
               element:<PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path:'/details/:id',
                element:<Details></Details>
            },
            {
                path:'/bookUpdate/:id',
                element:<PrivateRoute><BookUpdate></BookUpdate></PrivateRoute>
            }
            
        ]
    }
    ,
    {
        path:'/auth',
        Component:AuthLayout,
        children:[
            {
                path:'/auth/login',
                Component:Login
            },
            {
                path:'/auth/register',
                Component:Register
            }
        ]
    }
])