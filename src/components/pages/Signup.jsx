import React from 'react'
import Navbar from '../Navbar'
import navItems from '../../utils/navItems'

const Signup = () => {
  return (
    <div>
        <Navbar navItems={navItems} page="signup" />
    </div>
  )
}

export default Signup