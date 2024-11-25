import { Await, createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Team from "../Pages/Team";
import Blog from "../Pages/Blog";
import Profile from "../Pages/Profile";
import Details from "../Components/Details/Details";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Privateroute from "./Privateroute";

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
            {
                path:"/details/:id",
                element: <Privateroute>
                    <Details></Details>
                </Privateroute>,
                loader:async({params})=>{
                    const res=await fetch("/service.json")
                    const data=await res.json()
                    const singledata=data.find(d=>d.id==params.id)
                    console.log(singledata)
                    return singledata;

                }
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }

        ]
    }
])
export default router;