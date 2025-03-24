import React, { useRef } from 'react'
import Input from './Input'
import LoginButton from './LoginButton'
import auth from '../../appwrite/auth'

const LoginForm = () => {

  const usernameRef = useRef();
  const passRef = useRef();

  const handleLogin = async(e) => {
    e.preventDefault();

    const passObj = {
      email: usernameRef.current.value,
      password: passRef.current.value
    }

    const session = await auth.login(passObj)
    if(session){
      // console.log("Logged in with: ", usernameRef.current.value, " and ", passRef.current.value)
      
    } 
    else  console.log("Login failed")

    try {
      
    } catch (error) {
      
    }
  }

  return (
    <div className='flex flex-col border-2 border-neutral-400 hover:border-black hover:duration-300 hover:translate-y-[-0.75rem] p-[3rem] rounded-xl gap-5'>
      <div className='text-center text-3xl mb-[2rem] font-semibold'>
        <h1>Sign in to your account:</h1>
      </div>
      <form onSubmit={handleLogin} className='flex flex-col gap-5' autoComplete='on'>
        <Input label='Email' ref={usernameRef} type='email' placeholder='Enter email' />
        <Input label='Password' type='password' ref={passRef}  placeholder='Enter password' />

        <LoginButton />
      </form>
      
    </div>
  )
}

export default LoginForm