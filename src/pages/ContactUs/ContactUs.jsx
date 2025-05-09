import React from 'react'
import "./style.scss"

const ContactUs = () => {
  return (
    <div className='contactUs__wrapper'>
      <h1>
        Contact Us
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
      <form action="" className='form'>
        <div className='first__part__Inputs'>
          <div className='inputs__wrapper'>
            <label htmlFor="name">Name</label>
            <input id='name' type="text" placeholder='Enter your name' />
          </div>
          <div className='inputs__wrapper'>
            <label htmlFor="email">Email</label>
            <input id='email' type="text" placeholder='Enter your Email' />
          </div>
        </div>
        <div className='second__part__Inputs'>
          <div className='inputs__wrapper'>
            <label htmlFor="subject_provide">Subject</label>
            <input id='subject_provide' type="text" placeholder='Provide context' />
          </div>
          <div className='inputs__wrapper'>
            <label htmlFor="subject">Subject</label>
            <input id='subject' type="text" placeholder="Select Subject"/>
          </div>
        </div>
        <div className='text__area__wrapper'>
          <label htmlFor="message">Message</label>
          <textarea name="" id="message" className='message' placeholder='Write your  question here'></textarea>
        </div>
        <button>Send Message</button>
      </form>
    </div>
  )
}

export default ContactUs