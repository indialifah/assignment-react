import React from 'react'
import './styles/header.css'
import illus from '../assets/Illustration.png'

const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className='header-container'>
            <div className='header-content'> 
                <p className='header-title'>
                    Navigating the digital landscape for success
                </p>
                <p className='header-desc'>
                    Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                </p>
                <button>Book a consultation</button>
            </div>
            <div className='illustration'>
                <img src={illus} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header