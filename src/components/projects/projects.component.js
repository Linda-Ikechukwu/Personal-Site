import React from "react";

import "./projects.style.scss"

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects__title">
                <h4 className="title">Sample Projects</h4>
                <p className="u-center">All Projects built from scratch with coffee and chips </p>
            </div>
            <div className="projects__list"></div>
        </div>
    )
}

export default Projects