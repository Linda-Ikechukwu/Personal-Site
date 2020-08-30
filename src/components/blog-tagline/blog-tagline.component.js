import React from "react";

import "./blog-tagline.style.scss";

const BlogTagline = ({outlined}) => {
    return (
        <div className={`blog-tagline ${outlined ? 'aside-outlined' : ' '}`}>
            <h2>CodeWithLinda</h2>
            <p>
                Beginner Friendly Articles on Frontend Developement (without the Technical Jargons), 
                Dev Life and more written by <a href="https://twitter.com/_MsLinda" className="inline-link">Linda Ikechukwu</a>.
            </p>
        </div>
    )
}


export default BlogTagline