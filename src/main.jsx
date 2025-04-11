import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
// import About from './components/pages/About.jsx'
import Login from './components/pages/Login.jsx'
import Signup from './components/pages/Signup.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import Tech from './components/navbar/Tech.jsx'
import Research from './components/navbar/Research.jsx'
import Applications from './components/navbar/Applications.jsx'
import Solution from './components/navbar/Solution.jsx'
import AboutUs from './components/navbar/AboutUs.jsx'
import GridBox from './components/navbar/Tech/GridBox.jsx'
import GridConnect from './components/navbar/Tech/GridConnect.jsx'
import TechBack from './components/navbar/Research/TechBack.jsx'
import Publ from './components/navbar/Research/Publ.jsx'
import Graph from './components/Graph.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          {/* <Route path='about' element={<About/>} /> */}
          <Route path='/technology' element={<Tech />} />
          <Route path='/technology/gridbox' element={<GridBox />} />
          <Route path='/technology/gridconnect' element={<GridConnect />} />
          <Route path='/research' element={<Research />} />
          {/* <Route path='/research/technical%20background' element={<TechBack />} />
          <Route path='/research/publications' element={<Publ />} /> */}
          <Route path='/applications' element={<Applications />} />
          <Route path='/solutions' element={<Solution />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/graph' element={<Graph />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    
  </StrictMode>,
)
