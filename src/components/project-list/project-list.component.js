import React from "react";

import ProjectItem from "../project-item/project-item.component"

import "./project-list.styles.scss"

import AOS from 'aos';
import 'aos/dist/aos.css';

class ProjectList extends React.Component{

    componentDidMount(){

        this.aos = AOS;
        this.aos.init();
    }

    componentDidUpdate() {
        this.aos.refresh();
    }

    render(){
        
    
        return (
            <div className="projects-list" data-aos="zoom-in-right">
                <ProjectItem
                  num = {1}
                  title='Port Harcourt School of AI'
                  projectLink="https://phcschoolofai.org/"
                  description="Website for The Port Harcourt School Of AI."
                  image="/phcschoolofai.png"
                  imageAlt="Screenshot of Port Harcout School Of AI Website"
                  techsUsed={['HTML', 'SASS','PostCSS','JavaScript','Gulp' ]}
                  githubLink="https://github.com/Linda-Ikechukwu/Official-Website"
                />
                <ProjectItem
                   num = {2}
                   title='Money Paddy (PWA)'
                   projectLink=" https://linda-ikechukwu.github.io/MoneyPaddy/dist/index.html"
                   description="Income and Expense Logging PWA. Works totally offline using local storage and Indexed DB."
                   image="/moneypaddy.png"
                   imageAlt="Screenshot of the moneypaddy project"
                   techsUsed={['HTML', 'CSS','JavaScript','Webpack','Service Workers', 'PostCSS', 'Firebase','Push API', 'Notifications API' ]}
                   githubLink=" https://github.com/Linda-Ikechukwu/MoneyPaddy"
                />
                 <ProjectItem
                   num = {3}
                   title='Newsify'
                   projectLink=" https://linda-ikechukwu.github.io/MoneyPaddy/dist/index.html"
                   description="A news curator app. Filter, search and read news from different sites. "
                   image="/newsify.png"
                   imageAlt="Screenshot of the newsify project"
                   techsUsed={['HTML', 'CSS','Node JS','Express','EJS']}
                   githubLink=" https://github.com/Linda-Ikechukwu/Newsify"
                />
                <ProjectItem
                   num = {4}
                   title='Labrinth Stores'
                   projectLink=" https://github.com/Linda-Ikechukwu/Labrinth-Stores"
                   description="Labrinth Stores is a hypothetical ecommerce store for an african american women clothing label."
                   image="/labrinthe.png"
                   imageAlt="Screenshot of the labrinth project"
                   techsUsed={['Sass','React','Redux', 'Firebase', 'Localstorage',]}
                   githubLink=" https://github.com/Linda-Ikechukwu/Labrinth-Stores"
                />
                <ProjectItem
                   num = {5}
                   title="MyPickup"
                   projectLink=" https://github.com/Linda-Ikechukwu/Labrinth-Stores"
                   description="Admin dashboard for a delivery as a service startup."
                   image="/labrinthe.png"
                   imageAlt="Screenshot of the labrinth project"
                   techsUsed={['Sass','React','Material UI',]}
                   githubLink=" https://github.com/Linda-Ikechukwu/Labrinth-Stores"
                />
                <ProjectItem
                   num = {6}
                   title='Severless Notist'
                   projectLink=" https://github.com/Linda-Ikechukwu/Labrinth-Stores"
                   description="A severless react app for taking notes."
                   image="/labrinthe.png"
                   imageAlt="Screenshot of the Notist project"
                   techsUsed={['Sass','React','Severless Framework','AWS DynamoDB', 'AWS Cognito', 'AWS Lambda',]}
                   githubLink=" https://github.com/Linda-Ikechukwu/Labrinth-Stores"
                />
                 
            </div>
        )
    }

    
}

export default ProjectList;