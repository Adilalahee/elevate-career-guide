import React from 'react';
import Banner from '../navbar/Banner';
import { NavLink, useLoaderData } from 'react-router-dom';
import ServiceCard from '../Components/Service/ServiceCard';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const services=useLoaderData();
    return (
        <>
        <Helmet>
            <title>Career Guide</title>
        </Helmet>
        <Banner></Banner>
        <h1 className='text-3xl font-bold justify-center items-center text-center mx-auto mb-4'>Our Services</h1>
        <div className='grid grid-cols-3 gap-5 p-3 max-w-screen-xl mx-auto'>
            {
                services.slice(0,6).map(service=><ServiceCard service={service}></ServiceCard>)
            }
        </div>
        <button className='mx-auto block btn btn-neutral mb-4'><NavLink to="/blog">Browse all services</NavLink> </button>
        </>
    );
};

export default Home;