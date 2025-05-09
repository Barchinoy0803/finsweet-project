import React from 'react'
import "./style.scss"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Work = () => {
  return (
    <div className='work__page'>
      <div className='context'>
        <p>What we created</p>
        <h1>Our Work Portfolio</h1>
        <p>We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.</p>
      </div>
      <div className='icons__wrapper'>
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedin />
      </div>
    </div>
  )
}

export default Work