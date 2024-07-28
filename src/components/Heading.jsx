import React from 'react'
import './styles/heading.css'

const Heading = ({heading, subheading}) => {
    
  return (
    <div className='heading-wrapper'>
      <div className='heading-container'>
        <h1 className='heading'>{heading}</h1>
        <p className='subheading'>{subheading}</p>
      </div>
    </div>
  )
}

export default Heading