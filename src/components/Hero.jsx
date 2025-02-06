import React from 'react'
import HeroLeft from './hero/HeroLeft'
import HeroRight from './hero/HeroRight'

const Hero = () => {
  return (
    <div>
        <div className='mt-8 grid grid-cols-3 text-white h-[70vh]'>
            <div className='flex justify-center items-center'>
                <HeroLeft />
            </div>
            <div className='flex text-center justify-center items-center col-span-2 px-52'>
                <HeroRight />
            </div>
      </div>
    </div>
  )
}

export default Hero