import React from 'react'
import { Routes, Route } from 'react-router-dom'

//Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

//Components
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>
        <header className='header' id="header" >
          <Navbar/>
        </header>        
        <h2>Welcome to React Router Dom Tutorial</h2>        
        <Routes>
          <Route path='/' element={<Home/>}>Home</Route>
          <Route path='/About' element={<About/>}>About</Route>
          <Route path='/Contact' element={<Contact/>}>Contact</Route>
        </Routes>

    </>
  )
}

export default App
