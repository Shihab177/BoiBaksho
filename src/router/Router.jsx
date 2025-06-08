import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Bookshelf from "../Pages/Bookshelf/Bookshelf";
import AddBook from "../Pages/AddBook/AddBook";
import MyBooks from "../Pages/MyBooks/MyBooks";
import Profile from "../Pages/Profile/Profile";

export const router =createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
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
                Component:AddBook
            },
            {
                path:'/MyBooks',
                Component:MyBooks
            },
            {
               path:'/Profile',
               Component:Profile
            }
        ]
    }
])