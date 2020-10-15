import React from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import ProjectList from "../project-list/project-list.component"
import "./projects.style.scss"

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
            <section className="section projects">
                <div className="projects__title" data-aos="zoom-in-right">
                    <p className="p-big">I sometimes mockup UIs and build stuff that help solidify what I'm currently learning </p>
                </div>
                <ProjectList></ProjectList>
            </section>
        )
    }
}

export default Projects