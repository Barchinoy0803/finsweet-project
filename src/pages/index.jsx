import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import AboutUs from './AboutUs/AboutUs'
import ContactUs from './ContactUs/ContactUs'
import Work from './Work/Work'
import Blog from './Blog/Blog'
import Pricing from './Pricing/Pricing'

const MainRouters = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/aboutUs' element={<AboutUs/>}></Route>
        <Route path='/contactUs' element={<ContactUs/>}></Route>
        <Route path='/work' element={<Work/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/pricing' element={<Pricing/>}></Route>
    </Routes>
  )
}

export default MainRouters