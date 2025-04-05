import React, { useEffect, useState } from 'react'
import NavItems from './navbar/NavItems'
// import placeHolderImg from '../assets/placeholder.jpg'
import LoginBtn from './navbar/LoginBtn'
import { Link } from 'react-router'
import AuroraLogo from '../assets/AuroraLogo.svg'
import { useSelector } from 'react-redux'
import LogoutBtn from './navbar/LogoutBtn'

const Navbar = ({ navItems, page }) => {

    // const [isLoggedIn, setIsLoggedIn] = useState(false)

    const authStatus = useSelector(state => state.authStatus)

  return (
    <div className='bg-white absolute top-0 left-0 w-full h-[10vh] flex'>  
        <a href="/" className='inline w-[10%]'> 
            <img src={AuroraLogo} height={10} width={10} className='h-full w-full' /> 
        </a>
        <nav className='h-full w-[80%] flex text-black  items-center justify-start'>
            <ul className='flex'>
                {navItems.map((item, ind) => (
                    <li key={ind} className='mx-8'>
                        <a href={item.ref}>
                            <NavItems key={ind} name={item.name} dropdown={item.dropdown} />
                        </a>
                    </li>   
                ))}
            </ul>
        </nav>
        {
            authStatus ? <LogoutBtn /> : <LoginBtn className='flex items-center w-[10%] justify-center' />
        }
        
    </div>
  )
}

export default Navbar