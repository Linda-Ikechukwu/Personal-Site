import React from "react";

import "./button.styles.scss";

const Button = ({ children,small,center, ...otherProps}) => {
    return(
        <button className={`button ${small ? 'button--small' : ' '} ${center ? 'button--center' : ' '} `} {...otherProps}>
            {children}
        </button>
    )
}


export default Button;