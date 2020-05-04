import React from "react";

import Button from "../button/button.component"; 

import "./contact-form.style.scss"

const ContactForm = () => {
    return (
        <form>
            <div className="form">
                <div className="form__left">
                    <input type="text" placeholder="Your Name" required></input>
                    <input type="email" placeholder="Your Email" required></input>
                </div>
                <div className="form__right">
                    <textarea placeholder="Your Message" required wrap="hard"></textarea>
                </div>
            </div>
            <div className="form">
                <Button small center>Send</Button>
            </div>
            
        </form>
    )
}

export default ContactForm