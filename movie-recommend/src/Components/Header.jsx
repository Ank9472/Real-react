import React from 'react';

function Header() {
    return (   
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className='mb-4'> {/* Added margin-bottom for spacing */}
                <input 
                    type="text" 
                    id="myInput" 
                    placeholder="Enter Movie Name" 
                    className='bg-red-200 px-10 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300'
                />
            </div>
            <div className='mt-4'>
                <button className='bg-red-700 rounded-md text-bold text-white px-4 py-2'>
                    Search
                </button>
            </div>
        </div>
    ); 
}

export default Header;
