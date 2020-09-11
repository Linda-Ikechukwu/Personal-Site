import React from "react";

import ContactForm from "../contact-form/contact-form.component"; 

import "./contact.style.scss"



//AOS.init();

const Contact = () => {
    return (
        <section className="contact section" id="contact"  data-anchor="Page 4" >
            <p className="p-big">I love to chat about gigs, technical writing, food, tequila and karaoke dates</p>
            <ContactForm/>
        </section>
    )
}

export default Contact