import React from 'react'
import { useState } from 'react'

const Button = ({children}) => {

    const [hovering, setHovering] = useState(false)

  return (
    <button className='border hover:bg-white hover:border-none hover:text-black hover:duration-200 group rounded-lg border-black p-1.5 hover:scale-110'>
        <div className='relative'>
            {children}
            {/* <span style={{ transform: hovering ? "scaleX(1)" : "scaleX(0)" }} className='absolute border border-white top-6 origin-left transition-transform h-[2px]'/> */}
        </div>
            {/* <div className='absolute border border-white' /> */}
        {/* </div> */}
    </button>
  )
}

export default Button