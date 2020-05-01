import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image"
import Button from "../button/button.component";

import "./posts.style.scss";

const Posts = () => {
    const data = useStaticQuery(
      graphql`
      query {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
          edges {
            node {
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                featured {
                    childImageSharp {
                      fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                      }
                      fixed( quality: 100, cropFocus: CENTER){
                        ...GatsbyImageSharpFixed
                      }
                    }
                }
              }
              timeToRead
              excerpt
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `
    )
    return (
        <div className="blogs-container">
            <ul className="posts">
                {data.allMarkdownRemark.edges.map(edge => {
                    return (
                        <li key={edge.node.id} className="post">
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
                            <p className="post__excerpt">{edge.node.excerpt}</p>
                            <Button small><Link to={`/blog/${edge.node.fields.slug}/`}>Read More </Link></Button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Posts;