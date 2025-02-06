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
      name: 'Alpha',
      ref: '/Alpha'
    },
    {
      name: 'Beta',
      ref: '/Beta'
    },
    {
      name: 'Gamma',
      ref: '/Gamma'
    },
    {
      name: 'Delta',
      ref: '/Delta'
    }
  ]

  return (
    <>
      <Navbar navItems={navItems} />
      <Hero />
    </>
  )
}

export default App
