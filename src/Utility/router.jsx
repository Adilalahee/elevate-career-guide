import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Team from "../Pages/Team";
import Blog from "../Pages/Blog";
import Profile from "../Pages/Profile";

const router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch("/service.json")
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
            {
                path:"/team",
                element:<Team></Team>
            },       {
                path:"/blog",
                element:<Blog></Blog>,
                loader:()=>fetch("/service.json")
            },
            {
                path:"/profile",
                element:<Profile></Profile>
            },

        ]
    }
])
export default router;