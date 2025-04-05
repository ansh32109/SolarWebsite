import React, { useState } from 'react'
import auth from './../../appwrite/auth'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { logout } from '../../features/loginSlice'

const LogoutBtn = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [isClicked, setIsClicked] = useState(false)
  // const [bgColor, setBgColor] = useState('white')
  const [strokeColor, setStrokeColor] = useState('black')

  const mouseEnterHandler = () => {
    // setBgColor('black')
    setStrokeColor('white')
  }

  const mouseLeaveHandler = () => {
    // setBgColor('white')
    setStrokeColor('black')
  }

  const logoutHandler = async (e) => {
    e.preventDefault()
    const lgo = await auth.logout()
    console.log(lgo);
    dispatch(logout())
    navigate('/')
  }

  return (
    <div className='relative'>
      <button onClick={logoutHandler} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className='flex gap-2 h-[50%] hover:bg-black hover:text-white hover:duration-200 absolute top-5 rounded-xl border border-black justify-center w-[10vw] items-center'>
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke={strokeColor}  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-logout"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" /><path d="M9 12h12l-3 -3" /><path d="M18 15l3 -3" /></svg>
        Logout
      </button>
    </div>
  )
}

export default LogoutBtn