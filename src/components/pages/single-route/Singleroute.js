import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { API_URL } from "../../static";
import "./style.css";
import { useFetch } from "../../hooks/useFatch";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import { MdHomeFilled } from "react-icons/md";
import { SlArrowRight } from "react-icons/sl";
import img from "../../../accents/img/1.svg";
import img1 from "../../../accents/img/2.svg";
import img2 from "../../../accents/img/3.svg";
import img3 from "../../../accents/img/4.svg";
import rate from "../../../accents/img/rate.svg";
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import { IoCartSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { GiDirectionSigns } from "react-icons/gi";
import Bannerthree from "../../banner3/Bannerthree";

function Singleroute() {
  const { id } = useParams();
  const { data: product, loading } = useFetch(`${API_URL}/products/${id}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Navbar />
      <div className="single__hero container">
        <span className="hero__home">
          <MdHomeFilled />
        </span>
        <h2 className="single__title">Home</h2>
        <span className="hero__product">
          <SlArrowRight />
        </span>
        <h2 className="single__title">Product</h2>
        <span className="hero__product">
          <SlArrowRight />
        </span>
        <p className="single__text"> Seeds of Change Organic</p>
      </div>
      <div className="hero__line"></div>
      <section className="container">
        <div className="single__wrapper">
          <div className="single__photo">
            <div className="single__img">
              <img width={300} src={product?.data?.image} alt="" />
              <h2>{product?.data?.title}</h2>
              <h2> {product?.data?.price} USD</h2>
            </div>
            <div className="single__photos">
              <img src={img} alt="" />
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
            </div>
          </div>
          <div className="single__malumot">
            <button className="sale">Sale Off</button>
            <div className=""></div>
            <h2 className="seed">Seeds of Change <br /> Organic Quinoa, Brown</h2>

            <div className="ratee">
              <img src={rate} alt="" />
              <p>(32 reviews)</p>
            </div>

            <div className="usd">
              <h1>$38</h1>
              <div className="usdd">
                <h3>26% Off</h3>
                <h4>$52</h4>
              </div>
            </div>

            <p className="lorem">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Aliquam
              rem officia, corrupti reiciendis minima nisi modi, quasi, <br />odio
              minus dolore impedit fuga eum eligendi.
            </p>

            <div className="size">
              <h3>Size / Weight:</h3>
              <h3>50g</h3>
              <h2>60g</h2>
              <h3>80g</h3>
              <h3>100g</h3>
              <h3>150g</h3>
            </div>
            <div className="cardd">
              <div className="siiiz">
                <h2>1</h2>
                <div className="siizes">
                  <SlArrowUp />
                  <SlArrowDown />
                </div>
              </div>

              <button className="add">
                <IoCartSharp /> Add to cart
              </button>
              <button className="heart">
                <FaRegHeart />
              </button>
              <button className="heart">
                <GiDirectionSigns />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Bannerthree/>
      <Footer />
    </div>
  );
}

export default Singleroute;
