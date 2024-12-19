import React from 'react';

function Header() {
    return (
        <div className='flex items-center bg-gray-800 space-x-52 justify-end w-full text-3xl p-0 overflow-hidden rounded-sm'>
           <button className='text-yellow-500 justify-end relative group'>
                HOME
                <div className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-500 transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button className='text-yellow-500 justify-end relative group'>
                ABOUT ME
                <div className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-500 transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button className='text-yellow-500 justify-end relative group'>
                SKILLS
                <div className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-500 transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button className='text-yellow-500 justify-end relative group'>
                RESUME
                <div className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-500 transition-all duration-300 group-hover:w-full"></div>
            </button>
        </div>
    );
}

export default Header;
