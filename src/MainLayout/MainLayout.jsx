import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Banner from '../navbar/Banner';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;