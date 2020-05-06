import React from "react";

import Button from "../button/button.component"; 

import "./contact-form.style.scss"

const ContactForm = () => {
    return (
        <form  action="https://formspree.io/xrgygkey" method="POST">
            <div className="form">
                <div className="form__left">
                    <input className="input" type="text" name="Name" placeholder="Your Name" required></input>
                    <input className="input" type="email" name="Email" placeholder="Your Email" required></input>
                </div>
                <div className="form__right">
                    <textarea className="textarea" placeholder="Your Message" name="Message" required wrap="hard"></textarea>
                </div>
            </div>
            <div className="form">
                <Button type="submit" small center>Send</Button>
            </div>
            
        </form>
    )
}

export default ContactForm