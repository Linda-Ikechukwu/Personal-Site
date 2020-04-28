import React from "react"

import "./button.styles.scss";

const Button = (props) => {
    return(
        <button className="button">
            {props.textContent}
        </button>
    )
}

export default Button;