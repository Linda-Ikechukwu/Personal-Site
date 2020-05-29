import React from "react";

import ProjectItem from "../project-item/project-item.component"

import "./project-list.styles.scss"

import AOS from 'aos';
import 'aos/dist/aos.css';

class ProjectList extends React.Component{

    componentDidMount(){
        const allProjectTiles = document.querySelectorAll('.project');
        let index = 1;
        document.querySelector('.next-button').addEventListener('click',function(){
           allProjectTiles[index].classList.add('active');
           
           index === 0 ? allProjectTiles[allProjectTiles.length - 1].classList.remove('active') : allProjectTiles[index - 1].classList.remove('active')
           

           if(index === (allProjectTiles.length -1)){
               index = 0
           }else{
               index++
           }
        })

        this.aos = AOS;
        this.aos.init();
    
        
    }

    componentDidUpdate() {
        this.aos.refresh();
    }

    render(){
        
    
        return (
            <div className="projects-list" data-aos="zoom-in-right">
                <ProjectItem active 
                  title='Port Harcourt School of AI'
                  projectLink="https://phcschoolofai.org/"
                  description="<p>The Port Harcourt School Of AI is an educational community focused on democratizing Data Science and Machine Learning educaton to underrepresented 
                  groups.</p> <p>We needed a website to let the world in on what we do, so I designed the layout and developed it. </p>"
                  image="/phcschoolofai.png"
                  techsUsed={['HTML', 'SASS','PostCSS','JavaScript','Gulp' ]}
                  githubLink="https://github.com/Linda-Ikechukwu/Official-Website"
                />
                <ProjectItem
                   title='Trivia Quiz App (PWA)'
                   projectLink=" https://linda-ikechukwu.github.io/Simple-Quiz-App/src/index.html"
                   description="<p>The trivia quiz app is a fully offline app that can be installed from the browser like a native app. It features four categories each with 20 random questions for each round and a timer of 20 seconds for each round.</p> 
                   <p>The app makes use of localstorage to store user highscores, info and state.</p>"
                   image="/trivaapp.png"
                   techsUsed={['HTML', 'CSS','JavaScript','Service Workers', 'Local Storage' ]}
                   githubLink=" https://github.com/Linda-Ikechukwu/Simple-Quiz-App"
                />
                <ProjectItem
                   title='Money Paddy (PWA)'
                   projectLink=" https://linda-ikechukwu.github.io/MoneyPaddy/dist/index.html"
                   description="<p>Money Paddy is an income and expense logging app. The app incoporates indexed DB and Local Storage to persist data so the user can have a fully offline experience after installation. </p> 
                   <p>It makes use of the Push and Notification Web APIs alongside firebase functions to implement Push Notifications and background syncing.</p>"
                   image="/moneypaddy.png"
                   techsUsed={['HTML', 'CSS','JavaScript','Webpack','Babel','Service Workers', 'Local Storage', 'PostCSS', 'Firebase', 'Indexed DB', 'Push API', 'Notifications API' ]}
                   githubLink=" https://github.com/Linda-Ikechukwu/MoneyPaddy"
                />
                 <ProjectItem
                   title='Newsify'
                   projectLink=" https://linda-ikechukwu.github.io/MoneyPaddy/dist/index.html"
                   description="<p>This project is a news website powered by the NEWS API. It is built on Express and uses EJS for templating. The app curates news from thousand of sources, which can then be filtered in terms of category or keyword.</p> "
                   image="/newsify.png"
                   techsUsed={['HTML', 'CSS','Node JS','Express','EJS']}
                   githubLink=" https://github.com/Linda-Ikechukwu/Newsify"
                />
                <ProjectItem
                   title='Labrinth Stores'
                   projectLink=" https://github.com/Linda-Ikechukwu/Labrinth-Stores"
                   description="<p>Labrinth Stores is a hypothetical full blown ecommerce store for an african american women clothing label, with all the features you would expect: Authentication
                   product directory, payment processing e.t.c</p> <p>The aim of this project was to challenge me to learn React to an Intermediate level</p>"
                   image="/labrinthe.png"
                   techsUsed={['Sass', 'JSX','React','Redux','React-Redux', 'Firebase Firestore', 'Firebase Authentication', 'Localstorage',]}
                   githubLink=" https://github.com/Linda-Ikechukwu/Labrinth-Stores"
                />
                
                <button className="next-button">&#10095;</button>
            </div>
        )
    }

    
}

export default ProjectList;