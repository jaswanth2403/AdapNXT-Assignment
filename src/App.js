import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from './components/Dashboard'
import Projects from './components/Projects'
import Header from './components/ColorSchemesExample'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='main-container'>
    <BrowserRouter>
    <div className='header-container'><Header/></div>
    <div className='component-container'>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/education" element={<Dashboard/>} />
          <Route exact path="/projects" element={<Projects/>} />
          <Route eaxct path="/*" element={<NotFound/>} />
        </Routes>
    </div>
      <div className='footer-container'><Footer/></div>
    </BrowserRouter>
    </div>
  )
}

export default App
