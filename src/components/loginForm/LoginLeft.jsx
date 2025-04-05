import React from 'react'
import { FlipWords } from './Flipwords'
import { ContainerTextFlip } from './ContainerTextFlip'

const LoginLeft = () => {

    const words = ["Revolutionize", "Energize", "Synthesize"]

  return (
    // <div className="h-[40rem] flex justify-center items-center px-4">
    //   <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
    //     Build
    //     <FlipWords words={words} /> <br />
    //     Energy solutions with Aurora Solar
    //   </div>
    // </div>
    <div className='w-[35vw] flex justify-around items-center h-[50vh] flex-col'>
        <div>
            <ContainerTextFlip words={words} />
        </div>
        <div>
          Revolutionizing solar energy
        </div>
    </div>
  )
}

export default LoginLeft