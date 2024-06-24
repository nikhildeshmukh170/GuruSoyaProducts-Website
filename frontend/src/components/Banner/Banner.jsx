import React from "react";
// import Marquee from "react-fast-marquee";
import "./Banner.css";
import { assets } from "../../assets/assets";

const Banner = () => {
  return (
    <div className="banner">
      <div id="infinite" class="content-slider">
        <div class="container content-barrier">
          <ul class="content">
            <li class="prod-name"><img src={assets.coffee_cup} alt="" /><div className="name">Soya Cafe <span>Nutrient</span></div></li>
            <li class="prod-name"><img src={assets.nuts} alt="" /><div className="name">Soya Roasted <span>Namkeen</span></div></li>
            <li class="prod-name"><img src={assets.flour} alt="" /><div className="name">Soya Flour<span>Protien</span></div></li>
            <li class="prod-name"><img src={assets.papad} alt="" /><div className="name">Soya Udad papad<span>Crunchy</span></div></li>
            <li class="prod-name"><img src={assets.tofu} alt="" /><div className="name">soya Tofu</div></li>
            <li class="prod-name"><img src={assets.cookies} alt="" /><div className="name">Soya Cookies<span>Healthy</span></div></li>
            <li class="prod-name"></li>
            <li class="prod-name"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
