import React from "react";

import Button from "../button/button.component"; 

import "./project.style.scss"

const Project = ({title, description, image, techsUsed}) => {
    return (
        <div className="project">
           <h5 className="project__title">{title}</h5>
           <p className="project__desription">{description}</p>
           <img src={image}></img>
           <div className="projects__tech">
               {
                   techsUsed.map(techUsed =>{
                   <span className="projects__tech__item">{techUsed}</span>
                   })
               }
           </div>
           <Button>Read More ..</Button>

        </div>
    )
}

export default Project