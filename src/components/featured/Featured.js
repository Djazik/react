import React from "react";
import { FeaturedCategories } from "../static";
import "./featured.css"

function Featured() {
  return (
    <div className="container">
      <div className="feature">
        <ul className="feature_ul">
          <li className="feat">Featured Categories</li>
          <li className="ulfeat">Cake & Milk</li>
          <li className="ulfeat">Coffes & Teas</li>
          <li className="ulfeatli">Pet Foods</li>
          <li className="ulfeat">Vegetables</li>
        </ul>

        <div className="feature_box">
          {FeaturedCategories?.map((el) => (
           <div className="card__feature"  key={el.id}>
             <div className={el.clsname}>
              <img className="feature__img" src={el.imgage} alt="" />
              <h2 className="feature__title">{el.title}</h2>
              <p className="feature__items">{el.items}</p>
            </div>
           </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;
