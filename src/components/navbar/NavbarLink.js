import React from "react";
import "./nav.css";
import { BsBoxSeam } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";

import { HERO__ITEMS } from "../static";

function NavbarLink() {
  return (
    <div className="">
      <div className="hero__line"></div>
      <div className="container">
        <div className="browse__wrapper">
          <div className="browse">
            <BsBoxSeam />
            <h2 className="browse__title">Browse</h2>
            <select className="browse__opt" name="" id="">
              <option value="">All Categories</option>
            </select>
          </div>
        

        <div className="browse__box" >
          <ul className="browse__ul">
            {HERO__ITEMS?.map(({id, bgc, bgcolor, icon, title,icons})=> (
              <div className="browse__li" key={id}>
                <span className="first__icon" style={{ color: bgcolor }}>{icons}</span>
                <li style={{ color: bgc }}>{title}</li>
                <span className="browse__icon" style={{ color: bgcolor }} >{icon}</span>

              </div>
            ))}
            <li> </li>
          </ul>
        </div>

        <div className="browse__contact">
        <TfiHeadphoneAlt />

          
         <div className="">
         <h2 className='footer__number'>1900 - 888</h2>
          <h2 className='footer__time'>24/7 Support Center</h2>
         </div>
        
        </div>
        </div>
      </div>
      <div className="hero__line"></div>
    </div>
  );
}

export default NavbarLink;
