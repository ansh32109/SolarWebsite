import React from 'react'
import Navbar from './Navbar'
import navItems from '../utils/navItems'
import LineChart from './Graph/LineChart'

const Graph = () => {
  return (
    <div>
        <Navbar navItems={navItems} />
        {/* <div className='mt-[10vh] ' /> */}
        <div className='h-[600px] w-[1080px] mx-auto mt-[20vh]'>
            <LineChart />
        </div>
    </div>
  )
}

export default Graph