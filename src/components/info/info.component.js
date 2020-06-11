import React from "react";

import "./info.style.scss"

import AOS from 'aos';
import 'aos/dist/aos.css';

//AOS.init();

class Info extends React.Component {

    componentDidMount() {
        this.aos = AOS;
        this.aos.init();
    }

    componentDidUpdate() {
        this.aos.refresh();
    }

    render(){
        return (
            <div className="info" >
                <div className="info__community" data-aos="zoom-in-right">
                    <h2 className="title">Community</h2>
                    <p>
                        I believe technology can change lives.
                        I believe in the rapid growth community fosters.
                  </p>
                    <p>
                        Talent is evenly distributed but opportunity isn't and thats why I'm passionate
                        over working with communities that aim to equip underrepresented individuals with technological skills,
                        to build the future they want for themselves.
                  </p>
                    <ul className="info__list">
                        <li className="info__list__item">
                            <h4><a href="https://www.phcschoolofai.org">Port Harcourt School Of AI</a></h4><span></span>
                            <p>Community Manager </p>
                        </li>
                    </ul>
                </div>
                <div className="info__speaking" data-aos="zoom-in-left" >
                    <h2 className="title">Speaking</h2>
                    <p>I enjoy sharing knowledge and experiences as I learn.
                    If you'll like me to speak at your event, please <a className="inline-link" href="#contact">send me a message</a>
                    </p>
                    <ul className="info__list">
                    <li className="info__list__item">
                            <h4><a target="blank" href="https://bit.ly/scalable-and-maintainable-sass">Architecting Scalable and Maintainable Sass</a></h4><span></span>
                            <p>June 2020. Women Who Code - Connect Digital, Global, Online</p>
                        </li>
                        <li className="info__list__item">
                            <h4><a target="blank" href="https://docs.google.com/presentation/d/174D8Q_I1XEAKdxGzQugh2j9xkj4qYU6zT1LWyNAz8_w/edit?usp=sharing">Automating Responsive Images in HTML</a></h4><span></span>
                            <p>January 2020. Fronstack, Lagos, Nigeria</p>
                        </li>
                        <li className="info__list__item">
                            <h4><a target="blank" href="https://drive.google.com/file/d/1V9kv_3VwSxq4Yml-ih0A7OsfG-ATB3Xi/view?usp=sharing">Contributing to Open Source; First Steps</a></h4><span></span>
                            <p>November 2019. DevFest SE Oko, Nigeria</p>
                        </li >
                        <li className="info__list__item">
                            <h4><a target="blank" href="https://docs.google.com/presentation/d/1zsMYoRizoLiGMU03pRApIcDACzPwyjwcwiZN8Y1smcY/edit?usp=sharing">Design For Developers</a></h4><span></span>
                            <p>July 2019. NerdFest UNN, Enugu, Nigeria</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
    
}

export default Info;