import React from 'react';

const Service = (props) => {
    // deconstruction
    const { img, title } = props.service
    return (
        <div className="mt-14 grid grid-cols-6 gap-4">
            <h1 className="text-center bg-black text-red-600 py-3 col-start-2 col-span-4 text-4xl">{title}</h1>
            <img className="col-start-2 col-span-4 mb-14 mx-auto" src={img} alt="" width="80%" />
        </div>
    );
};

export default Service;