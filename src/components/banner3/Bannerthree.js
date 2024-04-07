import React from 'react'
import "./bannerthree.css"
import { BsSend } from "react-icons/bs";
import rasm from "../../accents/img/banner-9.png.svg"

function Bannerthree() {
  return (
    <div className='container'>
    <div className="bannerall">
        <div className="bannercollecton">
        <div className="banner__cad">
        <h2 className="banner__titlee">Stay home & get  your  daily <br />
needs from our shop</h2>
        <h4 className='banner__text'>Start You'r Daily Shopping with <span>Nest Mart</span></h4>
        <div className="banner__input">
            <span> <BsSend /></span>
            <input type="email" placeholder="Your emaill address" />
            <button>Subscribe</button>
        </div>
        </div>
        <img src={rasm} alt="" />
    </div>
    </div>
    </div>

  )
}

export default Bannerthree