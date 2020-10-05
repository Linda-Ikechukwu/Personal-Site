import React, {useEffect} from "react";
import AOS from 'aos';
import "./header.styles.scss"

const Header = () => {

  useEffect(() =>{
    AOS.init()
  })

  //creating an  array containing the floating shapes
  const shapes = [...Array(30)];

  return (
    <div className="shape">

      <section className="header section" data-anchor="Page 1">

        <div className="header__right" >
          <div className="header__image">
            <img className="hero-dark" src="images/hero4.png"
              alt="headshot of Linda Ikechukwu">
            </img>
            <img className="hero-light" src="images/hero5.png"
              alt="headshot of Linda Ikechukwu">
            </img>
          </div>
        </div>

        <div className="header__left">
          <div className="header__title">
            <p>Hi, I'm Linda</p>
          </div>
          <div className="header__subtitle">
            <h1>Frontend Developer + <br/> Technical Writer</h1>
          </div>
          <div className="header__description">
            <p>
              I build web interfaces and <a className="inline-link" href="/blog">write</a> about it.
            </p>
          </div>

        </div>


      </section>
    </div>
  )
}

export default Header;
