import React from 'react'
import NavItems from './navbar/NavItems'
import placeHolderImg from '../assets/placeholder.jpg'

const Navbar = ({ navItems }) => {

  return (
    <div className='bg-white border-b-2 border-y-black fixed top-0 left-0 w-full h-[10vh] flex'>  
        <a href="/home" className='inline w-[10%] hover:scale-110 hover:duration-150'> 
            <img src={placeHolderImg} height={10} width={10} className='border h-full w-full' /> 
        </a>
        <nav className='h-full w-[90%] flex text-black  items-center justify-start'>
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
    </div>
  )
}

export default Navbar