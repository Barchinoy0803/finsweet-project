import React from 'react'
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import heroImage from "../../assets/images/heroImage.png"
import "./style.scss"
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className='hero__section'>
            <div className='container hero__wrapper'>
                <div className='context__wrapper'>
                    <h1>
                        Building stellar websites for early startups
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div className='buttons__wrapper'>
                        <button>View our work</button>
                        <div className='navigate__button'>
                            <Link to={"/pricing"}>View Pricing</Link>
                            <HiOutlineArrowNarrowRight  className='navigate__icon'/>
                        </div>
                    </div>
                </div>
                <div className='image__wrapper'>
                    <img src={heroImage} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero