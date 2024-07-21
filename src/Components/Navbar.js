import React from 'react'
import {  NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <ul className='navbar_list'>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/Contact">Contact</NavLink></li>
    </ul>
    </>
  )
}

export default Navbar
