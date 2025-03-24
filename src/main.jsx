import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
// import About from './components/pages/About.jsx'
import Login from './components/pages/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        {/* <Route path='about' element={<About/>} /> */}
        <Route path='login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
