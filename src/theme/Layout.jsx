import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../theme/Navbar/Navbar'
import Footer from './Footer/Footer'

function Layout() {
  return (
    <>
    <Navbar/>
     <Outlet/> 
     <Footer/>
    </>
  )
}

export default Layout
