import React from 'react'
import NavItems from './navbar/NavItems'
import placeHolderImg from '../assets/placeholder.jpg'

const Navbar = ({ navItems }) => {



  return (
    <div className='bg-black w-[75%] border border-neutral-600 mx-auto h-[8vh] rounded-[1rem] flex'>  
        <a href="/home" className='inline w-[10%] hover:scale-110 hover:duration-150'> 
            <img src={placeHolderImg} height={10} width={10} className='border rounded-xl h-full w-full' /> 
        </a>
        <nav className='h-full rounded-[1rem] w-[90%] mx-auto flex text-white overflow-hidden items-center justify-around'>
            <ul className='flex'>
                {navItems.map((item, ind) => (
                    <li className='mx-8'>
                        <a href={item.ref}>
                            <NavItems key={ind} name={item.name} />
                        </a>
                    </li>   
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default Navbar