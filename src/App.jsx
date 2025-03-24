
import Navbar from './components/Navbar'
import navItems from './utils/navItems'
import Hero from './components/Hero'

function App() {
  

  return (
    <>
      <Navbar navItems={navItems} />
      <Hero />
      {/* <div className='h-[400vh] grid grid-cols-2 border gap-2'>
        <div className='border'>1</div>
        <div className='border'>2</div>
        <div className='border'>3</div>
        <div className='border'>4</div>
        <div className="border">5</div>
        <div className="border">6</div>
      </div> */}
    </>
  )
}

export default App