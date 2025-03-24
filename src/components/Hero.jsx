import React from 'react'
import HeroLeft from './hero/HeroLeft'
import HeroRight from './hero/HeroRight'
import './Hero.css'
import { motion } from 'motion/react'

const Hero = () => {

  return (
    <div className='flex items-center container bg-gradient-to-b from-[#FFDD00]/60 via-[#FFA500]/60 to-[#FF4500]/60 h-screen'>
        <div className='grid grid-cols-3 text-black h-[70vh]'>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 , transition: {duration: 0.7} }} className='flex justify-center items-center'>
                <HeroLeft />
            </motion.div>
            <div className='flex text-center justify-center items-center col-span-2 px-52'>
                <HeroRight />
            </div>
      </div>
    </div>
  )
}

export default Hero