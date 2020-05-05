import React from "react";

import "./projects.style.scss"

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <div className="projects__title">
                <h2 className="title">Sample Projects</h2>
                <p className="u-center">All Projects built from scratch with coffee and chips </p>
            </div>
            <div className="projects__list"></div>
        </div>
    )
}

export default Projects