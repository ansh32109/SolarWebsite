import React from 'react'
import Navbar from '../Navbar'
import navItems from '../../utils/navItems'
import DetailInput from '../signup/DetailInput'
import SignupNumbers from '../signup/SignupNumbers'
import { useRef } from 'react'
import auth from '../../appwrite/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { login } from '../../features/loginSlice'

const Signup = () => {

  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignup = async (e) => {

    e.preventDefault()

    const signupObj = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    }

    const signedUpUserSession = await auth.createUser(signupObj)
    console.log('The session is: ', signedUpUserSession);
    
    if(signedUpUserSession){
      const currUser = await auth.getCurrentUser()
      console.log('Current user is: ', currUser);
      
      if(currUser){
        dispatch(login(currUser))
      }
      navigate('/')
    }
  }

  return (
    <div className='flex flex-row h-[100vh] justify-evenly gap-5 items-center'>
        <Navbar navItems={navItems} page="signup" />
        <div className=' h-[70vh] justify-around flex flex-col pt-6 pb-6'>
          <SignupNumbers>1</SignupNumbers>
          <SignupNumbers>2</SignupNumbers>
          <SignupNumbers>3</SignupNumbers>
        </div>
        <div>
          <form className='relative text-center flex h-[70vh] flex-col justify-around items-center' onSubmit={handleSignup}>
            <DetailInput type='text' ref={nameRef} label={'name'} />
            <DetailInput type='email' ref={emailRef} label={'email'} />
            <DetailInput type='password' ref={passwordRef} label={'password'}/>
            <button type='submit' className='absolute bottom-1 mx-auto px-5 outline-none rounded-xl hover:underline hover:underline-offset-4 py-2 text-xs cursor-pointer bg-blue-300 hover:bg-blue-700 hover:duration-150 hover:text-white'>
              Signup
            </button>
          </form>
          
        </div>
    </div>
  )
}

export default Signup