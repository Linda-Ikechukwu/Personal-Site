import React from "react";

import ContactForm from "../contact-form/contact-form.component"; 

import "./contact.style.scss"

import AOS from 'aos';
import 'aos/dist/aos.css';

//AOS.init();

const Contact = () => {
    return (
        <div className="contact" id="contact" >
            <h2 className="title">Say Hi</h2>
            <p className="u-center">Talk to me about Code, Content Strategy, Community Management, Food and Chitchat</p>
            <ContactForm/>
        </div>
    )
}

export default Contact