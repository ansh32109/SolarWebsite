import React from 'react'
import Navbar from '../../Navbar'
import navItems from '../../../utils/navItems'
import connect from '../../../assets/ssshgc12.png'

const GridConnect = () => {
  return (
    <div>
        <Navbar navItems={navItems} />
        <img src={connect} alt="" className='h-[70vh] mt-[19vh] mx-auto ' />
    </div>
  )
}

export default GridConnect