import React from "react";

import Button from "../button/button.component"; 

import "./project-item.style.scss"

//AOS.init();

const ProjectItem = ({active, title, projectLink, description, image,imageAlt, techsUsed, githubLink, num}) => {
    return (
        <div className={`project project--${num}`} >
           <a target="blank" href={projectLink} aria-label={imageAlt}>
               <img alt={imageAlt} src={image}></img>
            </a>

        </div>
    )
}

export default ProjectItem