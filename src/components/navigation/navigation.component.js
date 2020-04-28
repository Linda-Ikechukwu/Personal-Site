import React from "react";
import { Link } from "gatsby";

import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './navigation.styles.scss'

const Navigation = () => {
  return (
      <div className="nav"> 
           <div className="nav__right">
               <span className="nav__item"><Link to="/">Home</Link></span>
               <span className="nav__item"><Link to="/blog">Blog</Link></span>
           </div>
           <div className="nav__left">
               <span className="nav__item"><Link to="https://github.com/Linda-Ikechukwu"><GitHubIcon style={{ fontSize: 20 }} /></Link></span>
               <span className="nav__item"><Link to="/https://twitter.com/_MsLinda"><TwitterIcon style={{ fontSize: 20 }}/></Link></span>
               <span className="nav__item"><Link to="/https://www.linkedin.com/in/linda-ikechukwu/"><LinkedInIcon style={{ fontSize: 20 }}/></Link></span>
           </div>
      </div>
  )
}

export default Navigation;