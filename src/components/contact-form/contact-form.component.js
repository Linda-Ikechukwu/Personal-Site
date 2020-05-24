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
            <form  action="https://formspree.io/xrgygkey" method="POST" data-aos="zoom-in" >
                <div className="form">
                    <div className="form__left">
                        <label for="name">Name</label>
                        <input className="input" type="text" name="Name" placeholder="Your Name" id="name" required></input>
                        
                        <label for="email">Email</label>
                        <input className="input" type="email" name="Email" placeholder="Your Email" id="email" required ></input>
                    </div>
                    <div className="form__right">
                        <label for="message">Message</label>
                        <textarea className="textarea" placeholder="Your Message" name="Message" id="message" required wrap="hard"></textarea>
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