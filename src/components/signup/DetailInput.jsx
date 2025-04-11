import React from 'react'
import auth from '../../appwrite/auth'

const DetailInput = ({ref, type, label, isLast=false}) => {

    

  return (
    <div>
        <div className='flex flex-col p-6'>
            <label className='pl-2 text-left text-xs text-black' htmlFor="inp">Enter your {label}:</label>
            <input type={type} id='inp' ref={ref}  className='p-1 bg-transparent border-b-2 border-blue-400 outline-none focus:duration-200 focus:border-blue-700 focus:outline-none' />
            {isLast ? 
                <button type='submit' className='mx-auto px-5 outline-none rounded-xl hover:underline hover:underline-offset-4 py-2 text-xs cursor-pointer  mt-4 bg-blue-300 hover:bg-blue-700 hover:duration-150 hover:text-white'>
                    Signup
                </button>
                : 
                <div className='py-3' />
            }
          </div>
    </div>
  )
}

export default DetailInput