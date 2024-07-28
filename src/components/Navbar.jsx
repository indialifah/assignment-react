import React from 'react'
import './styles/navbar.css'
import icon from '../assets/Icon.png'

const Navbar = (props) => {
    const {logo, navLinks} = props
  return (
    <div className='navbar-wrapper'>
        <div className='navbar-container'>
            <div className='logo-wrapper'>
                <img src={icon} alt="" />
                <h1>{logo}</h1>
            </div>
            <ul>
                {
                    navLinks.map((nav) => {
                    return (
                        
                        <li><a href={nav.link}>{nav.name}</a></li>
                    
                    )})
                }
                <li className='button-req'><a href="">Request a quote</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar