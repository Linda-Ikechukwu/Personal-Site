import React from "react";

import Button from "../button/button.component"; 

import "./project-item.style.scss"

//AOS.init();

const ProjectItem = ({active, title, projectLink, description, image, techsUsed, githubLink}) => {
    return (
        <div className={`project ${active ? 'active' : ' '}`} >
           <h5 className="project__title "><a target="blank" href={projectLink}>{title}</a></h5>
           <div className="project__description" dangerouslySetInnerHTML={{ __html: description }}></div>
           <a target="blank" href={projectLink}><img alt="" src={image}></img></a>
           <p>Technologies Used :</p>
           <div className="tags">
               
               {
                   techsUsed &&
                   
                    techsUsed.map(techUsed =>{
                        return(
                            <span className="tag">{techUsed}</span>
                        )
                    })
                   
               }
           </div>
           <div className="github"><Button small><a target="blank" href={githubLink}>See Github</a></Button></div>

        </div>
    )
}

export default ProjectItem