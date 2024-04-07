import React, { memo , useEffect, useState } from "react";
import axios from "axios";

import "./style.css";
import { NavLink } from "react-router-dom";
import HeroNav from "./HeroNav";
import rasm from "../../accents/img/logo.svg";
import { IoSearch } from "react-icons/io5";
import { SlArrowDown } from "react-icons/sl";
import { PiCircleDashedBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import NavbarLink from "./NavbarLink";
import { API_URL } from "../static";
import { IoLocationSharp } from "react-icons/io5";


function Navbar() {
  const [categories, setCategories] = useState([])
  useEffect(()=> {
    axios
    .get(`${API_URL}/products/categories`)
    .then(res => setCategories(res.data))
    .catch(err => console.log(err))
},[])

  let categoryItems = categories?.map((el,inx)=> <option key={inx} value={el}>{el}</option>)

  return (
    <div>
      <HeroNav />
      <div className="className='navbar'">
        <div className="container navbar__hero">
          <NavLink to={"/"}>
            <img src={rasm} alt="" />
          </NavLink>

          <div className="hero__input">
          <select className="hero__select" name="" id="">
                <option value="">All Categories</option>
                {categoryItems}
              </select>
              <div className="hero_line"></div>
            <input  type="text" placeholder="Search for items... " />
            <IoSearch />
          </div>

          <div className="hero__location">
          <IoLocationSharp />
            <h4> Your Location</h4>
            <SlArrowDown />
          </div>

          <div className="link__items">
            <div className="">
              <PiCircleDashedBold />
              <h3>Compare</h3>
            </div>
            <div className="">
              <FaRegHeart />
              <h3>Wishlist</h3>
            </div>
            <div className="">
              <AiOutlineShoppingCart />
              <h3>Cart</h3>
            </div>
            <div className="">
              <IoPersonOutline />
              <NavLink to={"/admin"}>Admin</NavLink>
            </div>
          </div>
        </div>
      </div>
      <NavbarLink/>
    </div>
  );
}

export default memo(Navbar);
