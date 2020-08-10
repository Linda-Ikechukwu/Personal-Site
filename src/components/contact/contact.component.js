import React from "react";

import ContactForm from "../contact-form/contact-form.component"; 

import "./contact.style.scss"



//AOS.init();

const Contact = () => {
    return (
        <div className="contact" id="contact" >
            <h2 className="title">Say Hi</h2>
            <p className="u-center">Talk to me about Code, Technical Writing, Community Management, and Food.</p>
            <ContactForm/>
        </div>
    )
}

export default Contact