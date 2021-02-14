import React from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import Button from "../button/button.component";

import "./contact-form.style.scss"


class ContactForm extends React.Component {
    /* constructor() {
        super();
        this.state = {
            messageError: "",
        }
    } */

    componentDidMount() {
        this.aos = AOS;
        this.aos.init();
    }

    componentDidUpdate() {
        this.aos.refresh();
    }

   /*  verifyMessage = (e) => {
        e.target.value.length > 320 ? this.setState({ messageError: "message limit exceeed" }) : "";
    } */

    render() {
        return (
            <form className="contact-form" action="https://formspree.io/xrgygkey" method="POST" data-aos="zoom-in" >
                <div className="form">
                    <div className="form__left">

                        <input id="name" className="input" type="text" name="Name" placeholder="Your Name" required></input>
                        <label htmlFor="name">Name</label>

                        <input id="email" className="input" type="email" name="Email" placeholder="Your Email" required ></input>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form__right">
                        <textarea
                            id="message"
                            className="textarea"
                            placeholder="Your Message"
                            name="Message"
                            required
                            wrap="hard"
                            maxLength="320"
                            //onChange={() => this.verifyMessage()}
                        >
                        </textarea>
                        <label htmlFor="message"> A Short Message</label>
                        {/* <p>Hello{this.state.messageError}</p> */}
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