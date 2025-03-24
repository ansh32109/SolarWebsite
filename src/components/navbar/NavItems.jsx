import React from 'react'
import { motion } from 'motion/react'
import { useState } from 'react'

const NavItems = ({ name, ref, dropdown }) => {

  const [isOpen, setIsOpen] = useState(false)
  const [popLeft, setPopLeft] = useState(null)

  const toggleDropdown = (e) => {
    setIsOpen( (prev) => !prev )
    setPopLeft(e.currentTarget.offsetLeft)
    console.log(popLeft);
    
    // console.log(isOpen);
  }

  const closeDropdown = () => {
    setIsOpen(false)
  }

  return (
    <div className='relative' onMouseEnter={toggleDropdown} onMouseLeave={closeDropdown}>
      <div className='hover:scale-[120%] hover:duration-200 flex justify-center items-center gap-2 relative'>
        <div className='font-bold text-xl'>
            {name} 
        </div>
        {/* <div className='text-3xl absolute '>
          ˯
        </div> */}
      </div>
      {dropdown ? (isOpen && 
        <motion.div initial={{scale: 0}} animate={{scale: 1}} exit={{ scale: 0, transition: {duration: 1} }} className={`border absolute top-8 left-${popLeft} object-center bg-black text-neutral-500 p-3 content-center flex flex-col gap-2 text-nowrap`}>
          {dropdown.map((item, ind) => (
            <div className='hover:text-white hover:duration-200 hover:scale-105' key={ind}>
              {item}
            </div>
          ))}
        
      </motion.div>)
       : null}
      
    </div>
    
  )
}

export default NavItems