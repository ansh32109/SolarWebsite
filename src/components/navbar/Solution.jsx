import React from 'react'
import Navbar from '../Navbar'
import navItems from '../../utils/navItems'
import { TypewriterEffectSmooth } from './TypeWriter'

const Solution = () => {

  const words = [
    {
      text: 'Presenting'
    },
    {
      text: 'our'
    },
    {
      text: 'solutions'
    }
  ]

  return (
    <div>
        <Navbar navItems={navItems} />
        <TypewriterEffectSmooth words={words} className={`mt-[15vh] mx-auto w-fit`} />
        <div className='border w-[30vw] mx-auto' />
        <div className='flex w-[80vw] justify-around mx-auto h-[60vh] mt-8 rounded-xl'>
          <div className='border w-[30vw] text-center rounded-xl p-4 my-auto hover:border-neutral-700 hover:duration-300 hover:-translate-y-3 hover:bg-neutral-200'>
            <h1 className='text-xl mb-4'>
              Climate Tech
            </h1>
            <ol className='leading-8 my-5'>
              <li>
                Predictive Analytics and Process Automation    
              </li>
              <li>
                Risk Assessment and Mitigation
              </li>
              <li>
                Local Sensing for Real-Time Asset Visibility
              </li>
            </ol>
          </div>
          <div className='border w-[30vw] text-center rounded-xl p-4 my-auto hover:border-neutral-700 hover:duration-300 hover:-translate-y-3 hover:bg-neutral-200'>
            <h1 className='text-xl mb-4'>
              Environmental Markets
            </h1>
            <ol className='leading-8 my-5'>
              <li>
                RECs - Renewable Energy Certificates
              </li>
              <li>
                i-RECs - International RECs 
              </li>
              <li>
                PAT - Perform Achieve and Trade
              </li>
            </ol>
          </div>
        </div>
    </div>
  )
}

export default Solution