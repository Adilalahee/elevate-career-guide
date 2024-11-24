import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Components/Service/ServiceCard';

const Blog = () => {
    const services=useLoaderData();
    return (
        <div>
                <div className='grid grid-cols-3 gap-3 p-3'>
            {
                services.map(service=><ServiceCard service={service}></ServiceCard>)
            }
        </div>
        </div>
    );
};

export default Blog;