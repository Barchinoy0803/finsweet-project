import React from 'react'
import activePointer from "../../assets/images/pointer.png"
import pointer from "../../assets/images/redPointer.png"
import "./style.scss"

const PriceCard = ({ data }) => {
    return (
        <div className={`pricing__card ${data.isMostUseful ? 'blue__wrapper' : ""}`}>
            <div className='price'>
                <strong>{data.price}</strong>
                <span>{data.type}</span>
                
            </div>
            <h3>{data.title}</h3>
            <p className='description'>{data.description}</p>
            <div className='features__button'>
                <ul>
                    {
                        data.features.map((feature) => (
                            <li className='features__wrapper'>
                                <div className='features'>
                                    <img src={feature.isIncluded ? activePointer : pointer} alt="" />
                                    <p>{feature.title}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <button>Get started</button>
            </div>
        </div>
    )
}

export default PriceCard