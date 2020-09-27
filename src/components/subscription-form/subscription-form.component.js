import React, { useState } from 'react';

import Button from "../button/button.component";

import "./subscription-form.style.scss"


const SubscriptionForm = () => {

    const [status, setStatus] = useState(null);
    const [email, setEmail] = useState('');
    const FORM_URL = `https://app.convertkit.com/forms/1417892/subscriptions`;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);

        try {
            const response = await fetch(
                FORM_URL,
                {
                    method: 'post',
                    body: data,
                    headers: {
                        accept: 'application/json',
                    },
                }
            );

            setEmail('');

            const json = await response.json();

           if (json.status === 'success') {
                setStatus('SUCCESS');
                return;
            }


        } catch (err) {
            setStatus('ERROR');
            console.log(err);
        }
    };

    const handleInputChange = event => {
        const {value} = event.target;
        setEmail(value);
    }

    return (

        <div className="sub">
            <h2>Join My Newsletter</h2>
            <p>
                If you've found any of my articles useful, subscribe to be notified of more quality articles as soon as they're published.
            </p>

            {status === 'SUCCESS' && <p>Please go confirm your subscription!</p>}
            {status === 'ERROR' && <p>Oops, Something went wrong! try again.</p>}

            <form className="sub__form"
                action={FORM_URL}
                method="post"
                onSubmit={handleSubmit}
            >
                <input
                    type="email"
                    aria-label="Enter Your email"
                    name="email_address"
                    placeholder="Your email address"
                    onChange={handleInputChange}
                    value={email}
                    required
                />
                <Button type="submit">
                    Subscribe
                </Button>

            </form>

            <p className="sub__tag">I won't send you spam and you can unsubscribe at any time</p>
        </div>

    );
};

export default SubscriptionForm;