import React, { useRef, useState } from 'react'
import './Input.css'

const Input = ({label, placeholder, type, ref, props}) => {

  // const [type, setType] = useState("text")
  // const ref = useRef()


  return (
    <div className='flex flex-col'>
        <label className='smol-text text-neutral-800'>
            {label}
        </label>

        <input {...props} type={type} ref={ref} className='rounded-md border overflow-hidden focus:border-2 focus:border-blue-700 outline-none focus:border-solid' placeholder={placeholder} />
    </div>
  )
}

export default Input