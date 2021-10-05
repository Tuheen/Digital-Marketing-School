import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex items-center px-10 py-2 justify-between bg-red-700">
            <div className="">
                <Link to="/home"><h1 className="border-black border-2 p-1 text-xl font-bold text-white text-center ml-20 leading-none tracking-tighter font-black">Learn. <br /> <span className="font-thin">Digital</span></h1></Link>
            </div>
            <div>
                <nav className="flex list-none gap-8">
                    <li className="px-4 py-2 font-black hover:bg-red-500 hover:text-white"><Link to="/home">Home</Link></li>
                    <li className="px-4 font-black py-2 hover:bg-red-500 hover:text-white"><Link to="/about">Who We Are</Link></li>
                    <li className="px-4 py-2 font-black hover:bg-red-500 hover:text-white"><Link to="/services">All Courses</Link></li>
                    <li className="px-4 font-black py-2 hover:bg-red-500 hover:text-white"><Link to="/contact">Reach Us</Link></li>
                </nav>
            </div>
        </div>
    );
};
<div class="...">Circle</div>
export default Header;