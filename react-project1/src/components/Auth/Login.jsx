import React from 'react'

const Login = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='border-2 border-red-600'></div>
            <form action>
                <input type="email"  placeholder='Enter your email'/>
                <input type="password" placeholder='Enter password' />
            </form>
        </div>
    )
}

export default Login
