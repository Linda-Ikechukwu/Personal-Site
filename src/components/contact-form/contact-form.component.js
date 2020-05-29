import React from "react";

import Button from "../button/button.component"; 

import "./contact-form.style.scss"

import AOS from 'aos';
import 'aos/dist/aos.css';

//AOS.init();

class ContactForm extends React.Component{

    componentDidMount() {
        this.aos = AOS;
        this.aos.init();
    }

    componentDidUpdate() {
        this.aos.refresh();
    }
    
    render(){
        return (
            <form className="contact-form" action="https://formspree.io/xrgygkey" method="POST" data-aos="zoom-in" >
                <div className="form">
                    <div className="form__left">
                        
                        <input id="name" className="input" type="text" name="Name" placeholder="Your Name"  required></input>
                        <label htmlFor="name">Name</label>
                        
                        <input id="email" className="input" type="email" name="Email" placeholder="Your Email"  required ></input>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form__right">
                        
                        <textarea id="message" className="textarea" placeholder="Your Message" name="Message" required wrap="hard"></textarea>
                        <label htmlFor="message">Message</label>
                    </div>
                </div>
                <div className="form">
                    <Button type="submit" small center>Send</Button>
                </div>
                
            </form>
        )
    }
}

export default ContactForm