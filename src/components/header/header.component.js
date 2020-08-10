import React from "react";
import Button from "../button/button.component";

import "./header.styles.scss"

const Header = () => {
  //creating an  array containing the floating shapes
  const shapes = [...Array(50)];

  return (
    <div className="shape">
      {
        shapes.map((_, shape) => {
          return (
            <div key={shape} className={`shape-container--${shape+1} shape-animation`}><div aria-hidden="true" class="random-shape"></div></div>

            
          )
        })
      }
      <div className="header">

        <div className="header__left" id="main">
          <div className="header__title">
            <h1>Hi, I’m Linda</h1>
          </div>
          <div className="header__subtitle">
            <h2>Software Developer (Frontend + Cloud)</h2>
          </div>
          <div className="header__description">
            <p>
              Asides being a myriad of awesome things, I build stuff that you see on the web 
              and sometimes deploy, deliver, or manage stuff on the cloud. I write stuff too - when I feel like it
          </p>
          </div>

          <a href="#projects"><Button>See Sample Projects</Button></a>
        </div>

        <div className="header__right">
          <div className="header__image">
            <img src="https://res.cloudinary.com/lindadxk/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1588042230/me.jpg"
              alt="headshot of Linda Ikechukwu">
            </img>
            <div className="header__image__overlay"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
