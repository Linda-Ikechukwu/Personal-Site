import React from "react";
import "./footer.styles.scss";

const Footer = () => {
    return(
        <footer className="footer">
            <p> 
                <span role="img" aria-label="Love icon"> 💖 </span> &  
                <span role="img" aria-label="Light icon">✨</span>  Always, From Linda Ikechukwu.
            </p>
            <p><span>&copy; {new Date().getFullYear()}. Made with Gatsby</span></p>
        </footer>
    )
}

export default Footer;