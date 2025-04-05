import React, { useRef } from 'react'
import Input from './Input'
import LoginButton from './LoginButton'
import auth from '../../appwrite/auth'
import { Link } from 'react-router'
import { useDispatch } from 'react-redux'
import { login } from '../../features/loginSlice'
import { useNavigate } from 'react-router'

const LoginForm = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
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
      const userData = await auth.getCurrentUser()
      console.log(userData);
      if(userData){
        dispatch(login(userData))
      }
      navigate("/")
    } 
    else  console.log("Login failed")

    
  }

  return (
    <div className='flex relative flex-col border-2 border-neutral-400 hover:border-black hover:duration-300 hover:translate-y-[-0.75rem] p-[3rem] rounded-xl gap-5'>
      <div className='text-center text-3xl mb-[2rem] font-semibold'>
        <h1>Sign in to your account:</h1>
      </div>
      <form onSubmit={handleLogin} className='flex relative flex-col gap-5' autoComplete='on'>
        <Input label='Email' ref={usernameRef} type='email' placeholder='Enter email' />
        <Input label='Password' type='password' ref={passRef}  placeholder='Enter password' />

        <LoginButton />
      </form>
      {/* TODO: Implement forgot password functionality */}
      <div className='absolute text-xs bottom-[1.5rem] right-[3rem]'>
        Don't have an account? <Link to='/signup' className='hover:text-neutral-600 underline'>Sign up now</Link>
      </div>
    </div>
  )
}

export default LoginForm