import React from 'react'
import Navbar from '../Navbar'
import navItems from '../../utils/navItems'
import { TypewriterEffectSmooth } from './TypeWriter'
import { Outlet, Link } from 'react-router'


const Tech = () => {

  const words = [
    {
      text: 'Welcome'
    },
    {
      text: 'to'
    },
    {
      text: 'our'
    },
    {
      text: 'technologies'
    }
  ]

  return (
    <div className=''>
        <Navbar navItems={navItems} />
        <TypewriterEffectSmooth className={`mt-[15vh] mx-auto w-fit`} words={words} />
        <div className='border w-[30vw] mx-auto' />
        <div className='h-full mt-[6vh] flex flex-row-reverse justify-evenly'>
          <div className='border text-lg h-[60vh] py-[10%] rounded-xl px-6 hover:-translate-y-2 hover:bg-yellow-200 border-neutral-300 hover:border-neutral-700 hover:duration-150'>
            Click to find out more about: <br />
            <ol>
              <li className='my-2 leading-7'>
                <Link to={'/tech/gridconnect'} className='hover:underline-offset-4 hover:underline hover:duration-200'>
                  Grid Connect
                </Link>
              </li>
              <li className='my-2 leading-7'>
                <Link to={'/tech/gridbox'} className='hover:underline-offset-4 hover:underline hover:duration-200'>
                  Grid Box
                </Link>
              </li>
            </ol>
          </div>
          <div className='border w-[30vw] text-md p-6 rounded-xl'>
            <div className='my-[5vh]'>
              The goal is to offer two distinct modes of services on our tech front. While the Grid Connect tech excels in integrating with satellite data, our Grid Box is a state of the art IoT hardware platform with integration capabilities for multiple infrastructures. <br /><br /><br />
              Grid Connect allowed remote sensing from geostationary satellites as well as Low Earth Orbit surface observation satellites. Meanwhile, GridBox makes use of wireless communications enabled by 2G and 4G, to ensure low latency and maximum throughput transfer of data.
            </div>
          </div>
        </div>
    </div>
  )
}

export default Tech