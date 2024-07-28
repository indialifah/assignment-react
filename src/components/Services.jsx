import React from 'react'
import './styles/services.css'
import iconLearn from '../assets/Learn-more.png'

const Services = (props) => {
    const {services} = props
  return (
    <div className='services-wrapper'>
        <div className='services-container'>
            {
                services.map((service) => {
                    return (
                        <div className='card'>
                            <div className='card-content'>
                                <p className='card-title'>{service.title}</p>
                                <div className='learn-more'>
                                    <img src={iconLearn} alt="" />
                                    <p>Learn More</p>
                                </div>
                            </div>
                            <img src={service.image} alt="icon" />
                        </div>

                    )
                })
            }

        </div>
    </div>
  )
}

export default Services