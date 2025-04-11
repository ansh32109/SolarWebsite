import React from 'react'
import Navbar from '../Navbar'
import navItems from '../../utils/navItems'
import { TypewriterEffectSmooth } from './TypeWriter'
import { text } from 'motion/react-client'
import { Link } from 'react-router'

const Research = () => {

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
      text: 'research!'
    }
  ]

  return (
    <div>
        <Navbar navItems={navItems} />
        <TypewriterEffectSmooth words={words} className={`mt-[15vh] mx-auto w-fit`} />
        <div className='border w-[30vw] mx-auto' />
        <div className='border hover:-translate-y-4 hover:border-neutral-600 hover:duration-200 text-xl text-justify h-[50vh] rounded-2xl p-[3rem] w-[70vw] mx-auto mt-[13vh]'>
          Aurora Solar is a forward-thinking company committed to driving innovation through cutting-edge research and technology. With a passion for sustainability and clean energy, Aurora Solar continually invests in developing advanced solutions that shape the future of solar power. The company fosters a culture of curiosity, collaboration, and experimentation, empowering its teams to explore new ideas and push the boundaries of what's possible in renewable energy. Through its dedication to research and development, Aurora Solar aims to create impactful technologies that accelerate the global transition to a more sustainable future. <br /><br /><br />
          More work coming in the future!
          {/* Find out more: */}
          {/* <ol>
            <li>
              <Link to={`/research/technical%20background`}>
                Technical Background
              </Link>
            </li>
            <li>
              <Link to={`/research/publications`}>
                Publications
              </Link>
            </li>
          </ol> */}
          
          
        </div>
    </div>
  )
}

export default Research