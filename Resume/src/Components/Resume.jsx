import React from 'react';


const Resume = () => {
    return (
        <div className="resume-container">
            <header className="resume-header">
            <div className='text-yellow-500 text-left text-4xl   '><h1>MY RESUME</h1></div>
            <div className='text-3xl text-white text-center mt-11 font-bold'>EXPERIENCE</div>
            </header>

            <div className='text-white text-2xl text-center pt-80 font-bold'>EDUCATION</div>
            
            <div className=' text-white text-xl text-left pt-80 font-bold'>
                GURU GHASIDAS VISHWAVIDYALYA
            </div>
            <div className='text-white text-xl text-left pt-5 font-bold'>
            Computer Science Engineering
            </div>
            <div className='text-white text-xl text-left  font-bold'>
                7.0 SGPA
            </div>
            <div className='text-white text-xl text-left  font-bold'>
               2023-2027
            </div>
            </div>
    );
};

export default Resume;