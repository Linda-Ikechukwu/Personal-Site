import React from "react";

import "./info.style.scss"

const Info = () => {
    return (
        <div className="info">
            <div className="info__community">
                <h2 className="title">Community</h2>
                <p>
                    I believe in the power of human capacity development and community.
                    I believe technology can change lives.
            </p>
                <p>
                    Talent is evenly distributed but opportunity isn't and thats why I'm passionate
                    over being part of communities that aim to equip underrepresented groups with technological skills,
                    to build the future they want for themselves.
            </p>
                <ul className="info__list">
                    <li className="info__list__item">
                        <h4><a href="https://www.phcschoolofai.org">Port Harcourt School Of AI</a></h4><span></span>
                        <p>Community Manager </p>
                    </li>
                </ul>
            </div>
            <div className="info__speaking">
                <h2 className="title">Speaking</h2>
                <p>I love to share my knowledge and experience,
                If you'll like me to speak at your event, please <a href="#contact">send me a message</a>
                </p>
                <ul className="info__list">
                    <li className="info__list__item">
                        <h4><a href="https://docs.google.com/presentation/d/174D8Q_I1XEAKdxGzQugh2j9xkj4qYU6zT1LWyNAz8_w/edit?usp=sharing">Automating Responsive Images in HTML</a></h4><span></span>
                        <p>January 2020. Fronstack, Lagos, Nigeria</p>
                    </li>
                    <li className="info__list__item">
                        <h4><a href="https://drive.google.com/file/d/1V9kv_3VwSxq4Yml-ih0A7OsfG-ATB3Xi/view?usp=sharing">Contributing to Open Source; First Steps</a></h4><span></span>
                        <p>November 2019. DevFest SE Oko, Nigeria</p>
                    </li >
                    <li className="info__list__item">
                        <h4><a href="https://docs.google.com/presentation/d/1zsMYoRizoLiGMU03pRApIcDACzPwyjwcwiZN8Y1smcY/edit?usp=sharing">Design For Developers</a></h4><span></span>
                        <p>July 2019. NerdFest UNN, Enugu, Nigeria</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Info;