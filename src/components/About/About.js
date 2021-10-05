import React, { useEffect, useState } from 'react';
import Teacher from './Teacher';

const About = () => {
    // hooks
    const [teachers, setTeachers] = useState([])
    useEffect(() => {
        fetch('./team.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return (
        <div>
            <div className="my-20">
                <h1 className="text-5xl text-red-600 text-center mb-4">Who We Are!</h1>
                <p className="text-center text-white bg-red-600 mx-16">Industry Grade Digital Marketing Experts in Our Arsenal</p>
            </div>
            {/* grid items */}
            <div className="grid grid-cols-3 gap-4 m-4">
                {teachers.map(teacher => <Teacher key={teacher.id} teacher={teacher}></Teacher>)}
            </div>
        </div>
    );
};

export default About;