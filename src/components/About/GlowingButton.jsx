import React from 'react'
import './Glowing.css'
import { Link } from 'react-router'

const GlowingButton = () => {
  return (
    <button className='text-white bg-black p-3 mt-4 rounded-xl hover:text-yellow-200 hover:duration-150'>
        <Link to={`/graph`}>
            Click here to see the graph!
        </Link>
    </button>
  )
}

export default GlowingButton