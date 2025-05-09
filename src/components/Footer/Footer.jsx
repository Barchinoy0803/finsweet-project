import React from 'react'
import logo from "../../assets/images/logo.svg"
import instIcon from "../../assets/icons/instagram.svg"
import linkedinIcon from "../../assets/icons/linkedin.svg"
import twitterIcon from "../../assets/icons/twitter.svg"
import facebokIcon from "../../assets/icons/facebook.svg"
import "./style.scss"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container footer__wrapper'>
        <div className='footer__first__part'>
          <img src={logo} alt="" />
          <p>We are always open to discuss your project and improve your online presence.</p>
          <div className='footer__contact'>
            <div className='first'>
              <h3>Email me at</h3>
              <p>contact@website.com</p>
            </div>
            <div className='second'>
              <h3>Call us</h3>
              <p>0927 6277 28525</p>
            </div>
          </div>
        </div>

        <div className='footer__second__part'>
          <h2>Lets Talk!</h2>
          <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
          <div className='footer__icons__wrapper'>
            <img src={facebokIcon} alt="" />
            <img src={twitterIcon} alt="" />
            <img src={instIcon} alt="" />
            <img src={linkedinIcon} alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer