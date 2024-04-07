import React from 'react'
import { SlArrowDown } from "react-icons/sl";
import "./nav.css"

function HeroNav() {
  return (
    <div className="">
    <div className='nav container '>
        <ul className='nav__item'>
            <li>About Us</li>
            <div></div>
            <li>My Account</li>
            <div></div>
            <li>Wishlist</li>
            <div></div>
            <li>Tracking</li>
        </ul>
        <ul className='nav__item'>
            <li>Need help? Call Us : + <span>1800 900</span></li>
            <div></div>
            <li>English <SlArrowDown /></li>
            <div></div>
            <li>USD <SlArrowDown /></li>
        </ul>
    </div>
        <div className="hero__line"></div>
    </div>
  )
}

export default HeroNav