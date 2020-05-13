import React from "react";
import "./footer.styles.scss";

const Footer = () => {
    return(
        <div className="footer">
            <p> 
                <span role="img" aria-label="Love"> 💖 </span> &  
                <span role="img" aria-label="Light">✨</span>, From Linda Ikechukwu, Always.
            </p>
            <p><span>&copy; {new Date().getFullYear()}. Made with Gatsby</span></p>
        </div>
    )
}

export default Footer;