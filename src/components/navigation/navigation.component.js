import React from "react";
import { Link } from "gatsby";
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './navigation.styles.scss'

const Navigation = ({dark}) => {
    return (
        <div className={`nav ${dark ? 'nav-dark' : ' '} `}>
            <a href='#main' className="visually-hidden ">Skip to main content</a>
            <div className="nav__right">
                <span className="nav__item"><Link to="/">Home</Link></span>
                <span className="nav__item"><Link to="/blog">Blog</Link></span>
            </div>
            <div className="nav__left">
                <span className="nav__item">
                    <ThemeToggler>
                        {({ theme, toggleTheme }) => (
                            <label className="switch" aria-label="Switch For Light Mode or Dark Mode">
                                <input
                                    type="checkbox"
                                    aria-label="Switch For Light Mode or Dark Mode"
                                    onChange={e => toggleTheme(e.target.checked ? 'light-mode' : 'dark-mode')}
                                    checked={theme === 'light-mode'}
                                />
                                <span className="slider"></span>
                            </label>
                        )}
                    </ThemeToggler>
                </span>
                <span className="nav__item"><a href="https://github.com/Linda-Ikechukwu" aria-label="Go to My Github"><GitHubIcon style={{ fontSize: 22 }} /></a></span>
                <span className="nav__item"><a href="https://twitter.com/_MsLinda" aria-label="Go to My Twitter"><TwitterIcon style={{ fontSize: 22 }} /></a></span>
                <span className="nav__item"><a href="https://www.linkedin.com/in/linda-ikechukwu/" aria-label="Go to My LinkedIn"><LinkedInIcon style={{ fontSize: 22 }} /></a></span>
            </div>
        </div>
    )
}

export default Navigation;