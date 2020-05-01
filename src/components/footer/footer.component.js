import React from "react";
import "./footer.styles.scss";

const Footer = () => {
    return(
        <div className="footer">
            <p> 
                &copy; {new Date().getFullYear()}. 
                <span role="img" aria-label="Love"> 💖 </span> &  
                <span role="img" aria-label="Light">✨</span>, From Linda Ikechukwu, Always.
            </p>
        </div>
    )
}

export default Footer;