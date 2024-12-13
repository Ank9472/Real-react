import React from 'react'
import Header from './Header'
function CreateTasks() {
    return (
           
        <div className="h-screen px-2" >
            <div className='my-5'><Header/></div>
            <div>
                <form className="flex items-start w-full bg-zinc-900 ">
                    <div>
                        <div className="mb-4">
                            <h3 className="text-gray-300 text-lg mb-2">Task Title</h3>
                            <input className="w-full h-10 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" type="text" placeholder="Make a UI design" />
                        </div>
                        <div className="mb-4">
                            <h3 className="text-gray-300 text-lg mb-2">Date</h3>
                            <input className="w-full h-10 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 " type="date" />
                        </div>
                        <div className="mb-4">
                            <h3 className="text-gray-300 text-lg mb-2">Assign to</h3>
                            <input className="w-full h-10  text-sm py-2 px-10 rounded outline-none bg-transparent border-[1px] border-gray-400 " type="text" placeholder="Employee" />
                        </div>
                        <div className="mb-4">
                            <h3 className="text-gray-300 text-lg mb-2">Category</h3>
                            <input className="w-full h-10 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 " type="text" placeholder="Design, Development, etc." />
                        </div>
                        
                    </div>
                    <div  className="w-2/5 flex flex-col items-start ml-auto">
                        <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
                        <textarea className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 "
                           cols="30" rows="10" placeholder="Detailed description of task (Max 500 words)"></textarea>
                   <button className="w-full  bg-green-700 text-white my-3 py-4 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Create Task</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateTasks
