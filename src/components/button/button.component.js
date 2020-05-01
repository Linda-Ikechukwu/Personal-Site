import React from "react";

import "./button.styles.scss";

const Button = ({ children,small, ...otherProps}) => (
    <button className={`button ${small ? 'button--small' : ' '} `} {...otherProps}>
        {children}
    </button>
)


export default Button;