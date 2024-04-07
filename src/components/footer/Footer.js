import React,{memo} from 'react'
import rasm from "../../accents/img/logo.svg"
import { IoLocationOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsSend } from "react-icons/bs";
import { TbClockHour9 } from "react-icons/tb";
import { FOOTER_LOGO } from '../static';
import { ACCOUNT } from '../static';
import { Corporate } from '../static';
import { Popular } from '../static';
import app1 from "../../accents/img/app1.svg"
import app2 from "../../accents/img/app2.svg"
import app3 from "../../accents/img/app3.svg"
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterest,FaYoutube } from "react-icons/fa";




import "./style.css"

function Footer() {
  return (
    <div className='container'>
      <div className="footer__hero">
      <div className="footer">
        <div className="footer__logo">
          <div className="footer__logoimg">
          <img src={rasm} alt="logo" />
          </div>
          <h2 className='awe'>Awesome grocery store website <br /> template</h2>

          <div className="add1">
          <IoLocationOutline />
            <h2>Address: 5171 W Campbell Ave</h2>
          </div>

          <h2 className='kent'>undefined Kent, Utah 53127 United States</h2>

          <div className="add1">
          <TfiHeadphoneAlt />
          <h2>Call Us:(+91) - 540-025-124553</h2>
          </div>

          <div className="add1">
          <BsSend />
          <h2>Email:sale@Nest.com</h2>
          </div>

          <div className="add1">
          <TbClockHour9 />
          <h2>Hours:10:00 - 18:00, Mon - SatEmail:sale@Nest.com</h2>
          </div>
        </div>

        <div className="footer__box">
          <div className="company">
            <ul className='company_ul'>
              <li className='company__item'>Company</li>
              {FOOTER_LOGO.map((el,index) => {
               return <li className='company__items' key={index}>{el}</li>
               })}
            </ul>
          </div>
          
          <div className="account">
            <h2 className='account__title'>Account</h2>
            <ul className='account__item'>
              {ACCOUNT.map((el,index) => {
                return <li className='account__items' key={index}>{el}</li>
              })}
              
            </ul>
          </div>

          <div className="corporate">
            <h2 className='account__title'>Corporate</h2>
            <ul className='account__item'>
              {Corporate.map((el,index) => {
                return <li className='account__items' key={index}>{el}</li>
              })}
              
            </ul>
          </div>

          <div className="popular">
            <h2 className='account__title'>Popular</h2>
            <ul className='account__item'>
              {Popular.map((el,index) => {
                return <li className='account__items' key={index}>{el}</li>
              })}
              
            </ul>
          </div>
          
        </div>

        <div className="app">
          <h2 className='account__title'>Install App</h2>
          <h2 className='app__text'>From App Store or Google Play</h2>
          <div className="app__img">
              <img src={app1} alt="" />
              <img src={app2} alt="" />
          </div>
          <h2 className='app__text'>Secured Payment Gateways</h2>
          <img src={app3} alt="" />
        </div>
      </div>
      <div className="footer__line"></div>
      </div>

      <div className="footer__footer">
        <h2 className='footer__footer-title'>© 2022, Nest - HTML Ecommerce Template <br />All rights reserved</h2>
       
        <div className="">
        <div className="footer__phone">
        <div className="footer__pho">
          <FiPhoneCall />
         <div className="">
         <h2 className='footer__number'>1900 - 6666</h2>
          <h2 className='footer__time'>Working 8:00 - 22:00</h2>
         </div>
        </div>
        <div className="footer__pho">
          <FiPhoneCall />
         <div className="">
         <h2 className='footer__number'>1900 - 8888</h2>
          <h2 className='footer__time'>24/7 Support Center</h2>
         </div>
        </div>
        </div>
        </div>

        <div className="footer_follow">
          <div className="follow__items">
            <h2 className='follow__title'>Follow us</h2>
            <div className="follow__icon">
            <FaFacebook />
            <AiFillTwitterCircle />
            <AiFillInstagram />
            <FaPinterest />
            <FaYoutube />
            </div>
          </div>
            <h2 className='follow__text'>Up to 15% discount on your first subscribe</h2>
        </div>

      </div>
    </div>
  )
}

export default memo(Footer)