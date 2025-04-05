import React from 'react'
import Navbar from '../Navbar'
import navItems from '../../utils/navItems'
import LoginForm from '../loginForm/LoginForm'
// import { ContainerTextFlip } from '../loginForm/Flipwords'
import LoginLeft from '../loginForm/LoginLeft'

const Login = () => {
  return (
    <div>
        <Navbar navItems={navItems} page="login" />
        <div className='flex items-center justify-around h-[100vh]'>
          <LoginLeft />
          <LoginForm />
        </div>   
    </div>
  )
}

export default Login