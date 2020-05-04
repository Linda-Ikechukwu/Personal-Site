import React from "react";

import ContactForm from "../contact-form/contact-form.component"; 

import "./contact.style.scss"

const Contact = () => {
    return (
        <div className="contact">
            <h4 className="title">Say Hi</h4>
            <p className="u-center">Talk to me about Code, Content Strategy, Community Management, Food and Chitchat</p>
            <ContactForm/>
        </div>
    )
}

export default Contact