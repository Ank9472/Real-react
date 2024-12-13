import React from 'react'
import Header from './Others/Header'
import CreateTask from './Others/CreateTasks'
import AllTask from './Others/AllTask'
function AdminDashboard() {
    return (
        <div className=''>
            <Header/>
            <CreateTask/>
            <AllTask/> 
        </div>
    )
}

export default AdminDashboard
