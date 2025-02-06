import React from 'react'

const NavItems = ({ name, ref }) => {
  return (
    <div className='mx-8 hover:scale-[130%] hover:duration-200'>
        <div className='bg-gradient-to-r from-blue-700 to-green-800 bg-clip-text text-transparent font-bold'>
            {name}
        </div>
    </div>
  )
}

export default NavItems