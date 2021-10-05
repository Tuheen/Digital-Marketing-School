import React, { useEffect, useState } from 'react';
import Service from './Service/Service'
const Services = () => {
    // hooks
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./fakeDb.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className="text-6xl py-3 my-12 text-center bg-black mx-12 text-red-600">Our Courses</h1>
            <div className="mx-4 my-20">
                {services.map(service => <Service key={service.id} service={service}></Service>)}
            </div>
        </div>
    );
};

export default Services;