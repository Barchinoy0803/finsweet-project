import React from 'react'
import "./style.scss"
import aboutUsImage from "../../assets/images/aboutUsImage.png"

const AboutUs = () => {
  return (
    <div className='container aboutUs__wrapper' id='about'>
      <div className='about__us__content'>
        <h3>About us</h3>
        <h1>Our designs solve problems</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>
      <img src={aboutUsImage} alt="" />
    </div>
  )
}

export default AboutUs