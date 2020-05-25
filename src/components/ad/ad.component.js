import React from "react";

import Button from "../button/button.component"

import "./ad.styles.scss";

const AdComponent = ({ image, alt, description, link, cto }) => {
    return (
        <div className="adComponent">
            <img src={image} alt={alt}></img>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
            <a href={link}><Button>{cto}</Button></a>
        </div>
    )
}


export default AdComponent;