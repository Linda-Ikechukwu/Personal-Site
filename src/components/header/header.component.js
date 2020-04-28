import React from "react"
import Button from "../button/button.component";

import "./header.styles.scss"

const Header = () => {
  return (
    <div className="header">
       <div className="header__left">
           <div className="header__title">
                Hi, I’m Linda
           </div>
           <div className="header__subtitle">
                Software Developer (Frontend + Cloud)
           </div>
           <div className="header__description">
               Asides being a myraid of a couple of awesome things, 
               I build stuff that you see on the web and sometimes deploy, 
               deliver or manage stuff on the cloud. I write stuff too - when I feel like it.
           </div>

           <Button textContent="See Sample Projects" />
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
  )
}

export default Header;