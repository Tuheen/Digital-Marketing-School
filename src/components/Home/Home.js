import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from './Service';

const Home = () => {
    // hooks
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./fakeDb.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="bg-black flex p-16 items-center">
                <div className="ml-16 w-1/2">
                    <h1 className="text-6xl text-red-600 mb-4 font-mono tracking-widest">Digital Marketing<br></br> <span className="text-red-200 text-opacity-25">Masterclass Courses</span></h1>
                    <Link to="/services"><button className="bg-red-600 rounded-tl-lg text-white py-2 px-4 hover: font-extrabold hover:text-red-600 hover:bg-white my-3 mr-2">Explore <br /> Digital Marketing</button></Link>
                </div>
                <div className="w-1/2 ml-16">
                    <img src="https://image.freepik.com/free-psd/digital-marketing-presentation-template-with-mobile-screen-mockup_53876-98679.jpg" alt="" />
                </div>
            </div>
            {/* Service section */}
            <div className="bg-red-600">
                <h1 className="text-8xl text-center text-black underline bg-red-700 bg-opacity-25">Courses to <br /> Explore</h1>
                {services.filter((item, index) => index < 4).map(service => <Service key={service.id} service={service}></Service>)}
            </div>
        </div>
    );
};

export default Home;