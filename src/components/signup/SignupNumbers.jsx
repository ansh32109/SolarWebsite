import React from 'react'

const SignupNumbers = ({children}) => {
  return (
    <div className='z-0 relative text-white'>
        <div className='absolute -z-10 rounded-2xl p-5 translate-x-[-50%] top-1/2 left-1/2 bg-purple-950 translate-y-[-50%]'></div>
        <hr className='-z-10 absolute w-[10vw] top-1/2 left-1/2 translate-x-[100%] border border-black' />
        {children}
    </div>
  )
}

export default SignupNumbers