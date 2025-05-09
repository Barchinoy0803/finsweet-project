import React from 'react'
import { pricingPlans } from '../../constants'
import PriceCard from '../../components/PriceCard/PriceCard'
import "./style.scss"

const Pricing = () => {
  return (
    <div className='container pricing__page__wrapper'>
      <div className='pricing__content'>
        <h1>Our Pricing Plans</h1>
        <p>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
      </div>
      <div className="cards__wrapper">
        {
          pricingPlans.map((data) => (
            <PriceCard data={data} />
          ))
        }
      </div>
    </div>
  )
}

export default Pricing