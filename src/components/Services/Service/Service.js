import React from 'react';

const Service = (props) => {
    // deconstruction
    const { img, title, description } = props.service
    return (
        <div className="border-2 border-red-500 flex bg-black my-10">
            <div className="w-1/2">
                <img className="mx-auto my-6 pt-4" src={img} alt="" width="80%" />
            </div>
            <div className="ml-20 mt-20 pb-20 w-1/2">
                <h1 className="text-4xl bg-red-600 py-2 pl-3 text-white my-1">{title}</h1>
                <p className="text-lg text-red-600 w-4/5">{description}</p>
            </div>
        </div>
    );
};

export default Service;