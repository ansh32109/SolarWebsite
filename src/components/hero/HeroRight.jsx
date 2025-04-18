import React from 'react'
import Button from './Button'

const HeroRight = () => {
  return (
    <div className=' w-[100%]'>
      <h1 className='text-3xl font-bold mb-5'> Powering a Brighter, Greener Future!</h1>
      <div>Harness the limitless energy of the sun with our advanced solar panel solutions.</div>
      <div className='flex justify-center flex-col mt-10 gap-4'>
        <Button>
          Get Quotes
        </Button>
        <Button>
          Learn More
        </Button>
      </div>
      
    </div>
    
  )
}

export default HeroRight