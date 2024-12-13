import React from 'react'
import Header from './Others/Header'
import TaskList from './Others/TaskListNumber'
import TaskListNumber from './Others/TaskListNumber'
const EmployeeDashboard = (props) =>{
    return (
        <div className='p-10 bg-[#1C1C1C] h-screen'> 
        <Header changeUser = {PaymentResponse.changeUser} data={PaymentResponse.data}/>
        <TaskListNumber data={PaymentResponse.data}/>
        < TaskList data={PaymentResponse.data}/>
        </div>
    )
}

export default EmployeeDashboard
