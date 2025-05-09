import React from 'react'
import workImage from "../../assets/images/workImage.png"
import "./style.scss"

const Blog = () => {
  return (
    <div className='blog__page__wrapper'>
      <h1>A UX Case Study on Creating a Studious Environment for Students</h1>
      <h4>Andrew Jonson Posted on 27th January 2021</h4>
      <img src={workImage} alt="" />
      <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
      <a href="#">Read more</a>
    </div>
  )
}

export default Blog