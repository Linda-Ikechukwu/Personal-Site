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
                  description="<p>The Port Harcourt School Of AI is an educational community focused on democratizing Data Science and Machine Learning education to underrepresented 
                  groups.</p> <p>We needed a website to let the world in on what we do, so I designed the layout and developed it. </p>"
                  image="/phcschoolofai.png"
                  imageAlt="Screenshot of the project"
                  techsUsed={['HTML', 'SASS','PostCSS','JavaScript','Gulp' ]}
                  githubLink="https://github.com/Linda-Ikechukwu/Official-Website"
                />
                <ProjectItem
                   num = {2}
                   title='Money Paddy (PWA)'
                   projectLink=" https://linda-ikechukwu.github.io/MoneyPaddy/dist/index.html"
                   description="<p>Money Paddy is an income and expense logging app. The app incoporates indexed DB and Local Storage to persist data so the user can have a fully offline experience after installation. </p> 
                   <p>It makes use of the Push and Notification Web APIs alongside firebase functions to implement Push Notifications and background syncing.</p>"
                   image="/moneypaddy.png"
                   imageAlt="Screenshot of the moneypaddy project"
                   techsUsed={['HTML', 'CSS','JavaScript','Webpack','Babel','Service Workers', 'Local Storage', 'PostCSS', 'Firebase', 'Indexed DB', 'Push API', 'Notifications API' ]}
                   githubLink=" https://github.com/Linda-Ikechukwu/MoneyPaddy"
                />
                 <ProjectItem
                   num = {3}
                   title='Newsify'
                   projectLink=" https://linda-ikechukwu.github.io/MoneyPaddy/dist/index.html"
                   description="<p>This project is a news website powered by the NEWS API. It is built on Express and uses EJS for templating. The app curates news from thousand of sources, which can then be filtered in terms of category or keyword.</p> "
                   image="/newsify.png"
                   imageAlt="Screenshot of the newsify project"
                   techsUsed={['HTML', 'CSS','Node JS','Express','EJS']}
                   githubLink=" https://github.com/Linda-Ikechukwu/Newsify"
                />
                <ProjectItem
                   num = {4}
                   title='Labrinth Stores'
                   projectLink=" https://github.com/Linda-Ikechukwu/Labrinth-Stores"
                   description="<p>Labrinth Stores is a hypothetical full blown ecommerce store for an african american women clothing label, with all the features you would expect: Authentication
                   product directory, payment processing e.t.c</p> <p>The aim of this project was to challenge me to learn React to an Intermediate level</p>"
                   image="/labrinthe.png"
                   imageAlt="Screenshot of the labrinth project"
                   techsUsed={['Sass', 'JSX','React','Redux','React-Redux', 'Firebase Firestore', 'Firebase Authentication', 'Localstorage',]}
                   githubLink=" https://github.com/Linda-Ikechukwu/Labrinth-Stores"
                />
                <ProjectItem
                   num = {5}
                   title='Labrinth Stores'
                   projectLink=" https://github.com/Linda-Ikechukwu/Labrinth-Stores"
                   description="<p>Labrinth Stores is a hypothetical full blown ecommerce store for an african american women clothing label, with all the features you would expect: Authentication
                   product directory, payment processing e.t.c</p> <p>The aim of this project was to challenge me to learn React to an Intermediate level</p>"
                   image="/labrinthe.png"
                   imageAlt="Screenshot of the labrinth project"
                   techsUsed={['Sass', 'JSX','React','Redux','React-Redux', 'Firebase Firestore', 'Firebase Authentication', 'Localstorage',]}
                   githubLink=" https://github.com/Linda-Ikechukwu/Labrinth-Stores"
                />
                <ProjectItem
                   num = {6}
                   title='Labrinth Stores'
                   projectLink=" https://github.com/Linda-Ikechukwu/Labrinth-Stores"
                   description="<p>Labrinth Stores is a hypothetical full blown ecommerce store for an african american women clothing label, with all the features you would expect: Authentication
                   product directory, payment processing e.t.c</p> <p>The aim of this project was to challenge me to learn React to an Intermediate level</p>"
                   image="/labrinthe.png"
                   imageAlt="Screenshot of the labrinth project"
                   techsUsed={['Sass', 'JSX','React','Redux','React-Redux', 'Firebase Firestore', 'Firebase Authentication', 'Localstorage',]}
                   githubLink=" https://github.com/Linda-Ikechukwu/Labrinth-Stores"
                />
                 
            </div>
        )
    }

    
}

export default ProjectList;