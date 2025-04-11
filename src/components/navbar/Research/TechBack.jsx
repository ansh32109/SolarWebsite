import React from 'react'
import Navbar from '../../Navbar'
import navItems from '../../../utils/navItems'
import box from '../../../assets/ssshgb13.png'

const TechBack = () => {
  return (
    <div>
        <Navbar navItems={navItems} />
        <img src={box} alt="" className='h-[70vh] mt-[19vh] mx-auto ' />
    </div>
  )
}

export default TechBack