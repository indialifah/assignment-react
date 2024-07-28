import React from 'react'
import iconLearn from '../assets/Learn-more.png'
import './styles/caseStudies.css'

const CaseStudies = (props) => {
    const {studies} = props
  return (
    <div className='case-wrapper'>
        <div className='case-container'>
            {
                studies.map((study) => (
                    <div className='case-content'>
                        <p className='study'>{study}</p>
                        <div className='learn-more'>
                            <p style={{color:'#B9FF66'}}>Learn More</p>
                            <img src={iconLearn} alt="" />
                        </div>
                    </div>
                ))
            }
            

        </div>
    </div>
  )
}

export default CaseStudies