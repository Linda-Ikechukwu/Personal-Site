import React from "react";

import ProjectItem from "../project-item/project-item.component"

import "./project-list.styles.scss"

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
    }

    render(){
        
    
        return (
            <div className="projects-list">
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
                   description="<p>The trivia quiz app is a PWA that can be installed from the browser like a native app. It has four categories with 20 random questions for each round and a countdown timer.</p> 
                   <p>The web appmakes use of localstorage to store user highscores, ifo and state</p>"
                   image="/trivaapp.png"
                   techsUsed={['HTML', 'CSS','JavaScript','Service Workers' ]}
                   githubLink=" https://github.com/Linda-Ikechukwu/Simple-Quiz-App"
                />
                <ProjectItem
                   title='Project 3'
                />
                <button className="next-button">&#10095;</button>
            </div>
        )
    }

    
}

export default ProjectList;