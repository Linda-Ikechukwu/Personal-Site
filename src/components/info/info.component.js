import React from "react";

import "./info.style.scss"

import AOS from 'aos';
import 'aos/dist/aos.css';

//AOS.init();

class speaking extends React.Component {

    componentDidMount() {
        this.aos = AOS;
        this.aos.init();
    }

    componentDidUpdate() {
        this.aos.refresh();
    }

    render() {
        return (
            <section className="speaking" >
                <div data-aos="zoom-in-left" >
                    <p className="p-big">I give talks about frontend development or anything I find interesting. <br />
                       If you'll like me to speak at your event, please <a className="inline-link" href="#contact">send me a message</a> or
                       <a className="inline-link" href="https://twitter.com/_MsLinda"> find me on twitter</a>.
                    </p>
                    <div className="talks">
                        <ul className="speaking__list">
                            <li className="speaking__list__item">
                                <h4 aria-level="3"><a target="blank" href="https://speakerdeck.com/lindaikechukwu4/the-beginner-developers-guide-to-effective-learning">The Self Taught Developer's Guide to Learning</a></h4>
                                <span></span>
                                <p>July 2020. Developers In Vogue - MTB Session. Ghana, Online</p>
                            </li>
                            <li className="speaking__list__item">
                                <h4 aria-level="3"><a target="blank" href="https://bit.ly/scalable-and-maintainable-sass">Architecting Scalable and Maintainable Sass</a></h4>
                                <span></span>
                                <p>June 2020. Women Who Code - Connect Digital. Global, Online</p>
                            </li>
                            <li className="speaking__list__item">
                                <h4 aria-level="3"><a target="blank" href="https://docs.google.com/presentation/d/174D8Q_I1XEAKdxGzQugh2j9xkj4qYU6zT1LWyNAz8_w/edit?usp=sharing">Automating Responsive Images in HTML</a></h4>
                                <span></span>
                                <p>January 2020. Fronstack. Lagos, Nigeria</p>
                            </li>
                        </ul>
                        <ul className="speaking__list">
                            <li className="speaking__list__item">
                                <h4 aria-level="3"><a target="blank" href="https://drive.google.com/file/d/1V9kv_3VwSxq4Yml-ih0A7OsfG-ATB3Xi/view?usp=sharing">Contributing to Open Source; First Steps</a></h4>
                                <span></span>
                                <p>November 2019. DevFest SE. Oko, Nigeria</p>
                            </li >
                            <li className="speaking__list__item">
                                <h4 aria-level="3"><a target="blank" href="https://docs.google.com/presentation/d/1zsMYoRizoLiGMU03pRApIcDACzPwyjwcwiZN8Y1smcY/edit?usp=sharing">Design For Developers</a></h4>
                                <span></span>
                                <p>July 2019. NerdFest UNN. Enugu, Nigeria</p>
                            </li>
                        </ul>
                    </div>


                </div>
            </section >
        )
    }

}

export default speaking;