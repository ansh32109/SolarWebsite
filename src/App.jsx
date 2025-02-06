import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HeroRight from './components/hero/HeroRight'
import HeroLeft from './components/hero/HeroLeft'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)
  const navItems = [
    {
      name: 'About',
      ref: '/about'
    },
    {
      name: 'Technology',
      ref: '/tech'
    },
    {
      name: 'Solution',
      ref: '/solution'
    },
    {
      name: 'Contact',
      ref: '/contact'
    }
  ]

  return (
    <>
      <Navbar navItems={navItems} />
      <Hero />
      <div className='h-[400vh] grid grid-cols-2 text-white border'>
        <div className='border'>1</div>
        <div className='border'>2</div>
        <div className='border'>3</div>
        <div className='border'>4</div>
        <div className="border">5</div>
        <div className="border">6</div>
      </div>
    </>
  )
}

export default App
