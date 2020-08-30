import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image"

import "./posts.style.scss";

import AOS from 'aos';
import 'aos/dist/aos.css';

class Posts extends React.Component {
  componentDidMount() {
    console.log(this.props.data);
    this.aos = AOS;
    this.aos.init();
  }

  componentDidUpdate() {
    this.aos.refresh();
  }

  render() {
    
    return (
          <div className="blogs-container">
            <ul className="posts">
              {this.props.data.allMarkdownRemark.edges.map(edge => {
                return (
                    <li key={edge.node.id} className="post" data-aos="zoom-in-right">
                      <Link to={`/blog/${edge.node.fields.slug}/`}>
                        <div className="post__thumbnail">
                            {
                                edge.node.frontmatter.featured && (
                                    <Img 
                                      style={{
                                        height: `15rem`,
                                        width: `100%`
                                      }}
                                        fixed={edge.node.frontmatter.featured.childImageSharp.fixed}
                                        alt={edge.node.frontmatter.title}
                                    />
                                )
                            }
                        </div>
                        <h2 className="post__title">
                            <Link to={`/blog/${edge.node.fields.slug}/`}>
                                {edge.node.frontmatter.title}
                            </Link>
  
                        </h2>
                        <div className="post__info">
                            <span>
                                Published on {edge.node.frontmatter.date} <span>  </span>{" "}
                                ({edge.node.timeToRead} min read)
                            </span>
                        </div>
                        <p className="post__excerpt">{edge.node.frontmatter.description}</p>
                      </Link>  
                    </li>
                )
            })}
        </ul>
      </div>
    )}
    
    
  
  
  
}

export default Posts;