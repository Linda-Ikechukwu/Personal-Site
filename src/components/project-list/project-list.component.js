import React from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import ProjectItem from "../project-item/project-item.component"
import "./project-list.styles.scss"



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
                  image="images/phcschoolofai.png"
                  imageAlt="Screenshot of Port Harcout School Of AI Website"
                  techsUsed={['HTML', 'SASS','PostCSS','JavaScript','Gulp' ]}
                  githubLink="https://github.com/Linda-Ikechukwu/Official-Website"
                />
                <ProjectItem
                   num = {2}
                   title='Money Paddy (PWA)'
                   projectLink=" https://linda-ikechukwu.github.io/MoneyPaddy/dist/index.html"
                   description="Income and Expense Logging PWA."
                   image="images/moneypaddy.png"
                   imageAlt="Screenshot of the moneypaddy project"
                   techsUsed={['JavaScript','Indexed DB', 'PostCSS', 'Firebase','Push API']}
                   githubLink=" https://github.com/Linda-Ikechukwu/MoneyPaddy"
                />
                 <ProjectItem
                   num = {3}
                   title='Newsify'
                   projectLink=" https://linda-ikechukwu.github.io/MoneyPaddy/dist/index.html"
                   description="A news curator app. Filter, search and read news from different sites. "
                   image="images/newsify.png"
                   imageAlt="Screenshot of the newsify project"
                   techsUsed={['HTML', 'CSS','Node JS','Express','EJS']}
                   githubLink=" https://github.com/Linda-Ikechukwu/Newsify"
                />
                <ProjectItem
                   num = {4}
                   title='Labrinth Stores'
                   projectLink=" https://github.com/Linda-Ikechukwu/Labrinth-Stores"
                   description="A hypothetical ecommerce store for an african american women clothing."
                   image="images/labrinthe.png"
                   imageAlt="Screenshot of the labrinth project"
                   techsUsed={['Sass','React','Redux', 'Firebase', 'Localstorage',]}
                   githubLink=" https://github.com/Linda-Ikechukwu/Labrinth-Stores"
                />
                <ProjectItem
                   num = {5}
                   title="MyPickup"
                   projectLink=" https://github.com/Linda-Ikechukwu/React-Dashboard/tree/development"
                   description="Admin dashboard for a delivery as a service startup."
                   image="images/labrinthe.png"
                   imageAlt="Screenshot of the labrinth project"
                   techsUsed={['Sass','React','Material UI',]}
                   githubLink=" https://github.com/Linda-Ikechukwu/React-Dashboard/tree/development"
                />
                <ProjectItem
                   num = {6}
                   title='Severless Notist'
                   projectLink=" https://github.com/Linda-Ikechukwu/notist-severless"
                   description="A severless react app for taking notes."
                   image="images/notist2.png"
                   imageAlt="Screenshot of the Notist project"
                   techsUsed={['React','Severless Framework','DynamoDB', 'AWS Cognito', 'Lambda', 'Chakra UI']}
                   githubLink=" https://github.com/Linda-Ikechukwu/notist-severless"
                />

            </div>
        )
    }


}

export default ProjectList;