import React from 'react'
import Navbar from '../Navbar'
import navItems from '../../utils/navItems'
import { TypewriterEffectSmooth } from './TypeWriter'
import GlowingButton from '../About/GlowingButton'

const AboutUs = () => {

  const words = [
    {
      text: "About"
    },
    {
      text: "Us!"
    }
  ]

  return (
    <div>
        <Navbar navItems={navItems} />
        <TypewriterEffectSmooth words={words} className={`mt-[10vh] mx-auto w-fit`}/>
        <div className='border relative w-[30vw] mx-auto'>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-[3px]" />
        </div>
        <div className=' h-[75vh] w-[80vw] mx-auto mt-4 gap-5 flex flex-row '>
          <div className='border w-[40vw] px-7 py-7 hover:border-neutral-700 hover:duration-200 hover:-translate-y-2 rounded-2xl text-center'>
            <h1 className='text-3xl'>Who we are:</h1>
            <p className='text-justify'><br />
              Aurora Solar is committed to advancing cutting-edge research and innovation as a driving force behind its mission to transform the renewable energy industry. With a sharp focus on leveraging technology to accelerate solar adoption, the company invests heavily in developing advanced tools, intelligent software, and data-driven solutions designed to shape the future of clean energy.

              Believing that true industry leadership stems from continuous learning and experimentation, Aurora Solar fosters a research-driven culture where curiosity, technical excellence, and bold ideas thrive. The company’s R&D efforts are aimed at solving complex challenges in solar design, optimization, and deployment — making renewable energy smarter, faster, and more accessible at scale.

              Positioning itself to be a future pioneer in the global energy transition, Aurora Solar is not only building innovative products but also shaping the long-term vision of a sustainable, technology-powered energy ecosystem. Through its relentless commitment to research and forward-thinking solutions, Aurora Solar aspires to lead the next generation of renewable energy innovation and drive meaningful impact across the industry.
            </p>
            <GlowingButton />
          </div>
          <div className='flex flex-col gap-5 w-[40vw]  rounded-2xl'>
            <div className='h-[40%] flex hover:border-neutral-700 hover:duration-200 hover:-translate-y-2 justify-between border rounded-2xl my-auto p-6 '>
              <h1 className='text-3xl my-auto'>Where to find us:</h1>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.636296718381!2d74.79246164460821!3d13.010851814140713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35211d773f671%3A0xc781937fae762966!2sElectrical%20and%20Electronics%20Department%20NITK%20Surathkal!5e1!3m2!1sen!2sin!4v1744361724772!5m2!1sen!2sin" className='rounded-lg' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='h-[40%] border hover:border-neutral-700 hover:duration-200 hover:-translate-y-2 flex justify-between rounded-2xl my-auto p-6 '>
              <h1 className='text-3xl my-auto'>Contact us:</h1>
              <div className='flex flex-col justify-around px-5'>
                <div>
                  Phone number: +1(234) 123-456-78
                </div>
                <div>
                  Email address: samplemail@email.com
                </div>
                <div>
                  Postal address: Address line  
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutUs