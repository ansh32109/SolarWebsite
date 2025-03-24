import React from 'react'
import Navbar from '../Navbar'
import navItems from '../../utils/navItems'
import LoginForm from '../loginForm/LoginForm'
const Login = () => {
  return (
    <div>
        <Navbar navItems={navItems} />
        <div className='flex items-center justify-around h-[100vh]'>
          <div className='border'>
            Some test text
          </div>
          <LoginForm />
        </div>   
    </div>
  )
}

export default Login