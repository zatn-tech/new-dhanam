import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

const Layout = () => {
  return (
    <>
        <ScrollToTop/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout