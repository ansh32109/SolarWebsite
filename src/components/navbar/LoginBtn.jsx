import React, { useState } from 'react'
import { NavLink } from 'react-router'

const LoginBtn = ({ className }) => {

    const [colorVal, setColorVal] = useState('black')
    const [fillCol, setFillCol] = useState('black')
    // const [active, setActive] = useState('')

    const colorChange = (e) => {
        setColorVal("white")
        setFillCol("white")
    }

    const colorReset = (e) => {
        setColorVal("black")
        setFillCol("black")
    }

    const handleClick = (e) => {
        e.preventDefault();
    }

  return (
    <NavLink className={`${className} gap-1 text-xl`} to="/login">
        <button>
            <div onMouseEnter={colorChange} onMouseLeave={colorReset} className='flex border p-2 border-black bg-white rounded-2xl hover:duration-200 hover:bg-black hover:text-white'>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill={fillCol}  stroke={colorVal}  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                Login
            </div>
        </button>
    </NavLink>
    
  )
}

export default LoginBtn