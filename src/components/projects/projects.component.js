import React from "react";

import ProjectList from "../project-list/project-list.component"

import "./projects.style.scss"

import AOS from 'aos';
import 'aos/dist/aos.css';

//AOS.init();

class Projects extends React.Component {

    componentDidMount() {
        this.aos = AOS;
        this.aos.init();
    }

    componentDidUpdate() {
        this.aos.refresh();
    }
    
    render(){
        return (
            <div className="projects" id="projects">
                <div className="projects__title" data-aos="zoom-in-right">
                    <h2 className="title">Sample Projects</h2>
                    <p className="u-center">All Projects built from scratch with coffee and chips </p>
                </div>
                <ProjectList></ProjectList>
            </div>
        )
    }
}

export default Projects