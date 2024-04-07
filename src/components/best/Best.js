import React from "react";
import "./best.css";
import { BEST } from "../../components/static/index";
import ras from "../../accents/img/footer-1.svg";
function Best() {
  return (
    <div className="container">
      <div className="best">
        {BEST?.map(({imgage, id, title, items}) => (
          <div key={id} className="best__card">
            <img src={imgage} alt="" />
            <div className="best__item">
              <h2 className="best__title">{title}</h2>
              <p className="best_itmes">{items}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Best;
