import React from 'react';

const Contact = () => {
    return (
        <div className="my-20 bg-black">
            <div className="my-20">
                <h1 className="text-center text-white bg-red-600 py-2 mx-12 text-5xl mb-4">Reach Us</h1>
                <p className="text-center text-red-600 underline">247 Support Waiting for You</p>
            </div>
            <div className="mx-20  justify-center">
                <div className="flex mb-4">
                    <input className="border-2 p-1 w-1/2 border-red-600 mr-2" type="text" name="first-name" placeholder="Your First Name" />
                    <input className="border-2 p-1 w-1/2 border-red-600 ml-2" type="text" name="last-name" placeholder="Last Name" />
                </div>
                <input className="border-2 p-1 w-full border-red-500 mb-4" type="email" name="email" placeholder="email@domain.com" />
                <textarea className="border-2 p-1 w-full border-red-560" name="message" placeholder="Your Message" cols="30" rows="10"></textarea>
                <button className="w-full bg-red-600 text-white py-2 hover:bg-red-700">Submit</button>
            </div>
        </div >
    );
};

export default Contact;