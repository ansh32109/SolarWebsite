import React from 'react'
import { motion } from 'motion/react'
import { useState } from 'react'

const NavItems = ({ name, ref, dropdown }) => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen( (prev) => !prev )

    console.log(isOpen);
  }

  return (
    <div className='relative'>
      <div onMouseOver={toggleDropdown} onMouseLeave={toggleDropdown} className='hover:scale-[130%] hover:duration-200 flex justify-center items-center gap-2 relative'>
        <div className='font-bold text-1xl'>
            {name} 
        </div>
        <div className='text-3xl absolute '>
          ˯
        </div>
      </div>
      {isOpen && 
      <motion.div initial={{scale: 0}} animate={{scale: 1}} exit={{ scale: 0, transition: {duration: 1} }} className='border absolute top-11 object-center bg-black text-neutral-500 p-2.5 content-center flex flex-col gap-2 text-nowrap'>
        {dropdown ? dropdown.map((item, ind) => (
          <div>
            {item}
          </div>
        )) : 'Test'}
      </motion.div>
      }
    </div>
    
  )
}

export default NavItems