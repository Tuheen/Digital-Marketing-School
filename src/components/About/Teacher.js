import React from 'react';

const Teacher = (props) => {
    // deconstruction
    const { name, img, title, description } = props.teacher
    return (
        <div className="border-3 bg-red-600 rounded-tl-lg border-black p-4">
            <div>
                <img src={img} alt="" width="100%" className="rounded-bl-lg mx-auto my-2" />
            </div>
            <h1 className="text-2xl text-white font-bold">{name}</h1>
            <h3 className="text-white text-lg font-semibold">{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Teacher;