import React from "react";

import Button from "../button/button.component";

import "./project-item.style.scss"

//AOS.init();

const ProjectItem = ({ title, projectLink, description, image, imageAlt, techsUsed, githubLink, num }) => {
    return (
        <div className={`project project--${num}`} >
            <img alt={imageAlt} src={image}></img>
            <div className="project__overlay">
                <div className="project__details">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <div>
                        {
                            techsUsed &&

                            techsUsed.map(techUsed => {
                                return (
                                    <p>{techUsed}</p>
                                )
                            })

                        }
                    </div>
                    <div className="project__links" >
                        <p><a className="inline-link" href={projectLink}>Live</a></p>
                        <p><a className="inline-link" href={githubLink}>Github</a></p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProjectItem