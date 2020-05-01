import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import MetaData from "../components/metadata"
import AdComponent from "../components/ad/ad.component"

import "../components/posts/posts.style.scss"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        keywords
        date(formatString: "DD MMMM, YYYY")
        featured {
            childImageSharp {
              fluid(maxWidth: 750) {
                ...GatsbyImageSharpFluid
              }
              resize(width: 1200) {
                src
                height
                width
              }
            }
        }
      }
      excerpt(pruneLength: 160)
      timeToRead
      html
    }
  }
`

const BlogPost = props => {

    return (
        <Layout>
            <MetaData
                title={props.data.markdownRemark.frontmatter.title}
                description={props.data.markdownRemark.frontmatter.description || props.data.markdownRemark.excerpt}
                image={props.data.markdownRemark.frontmatter.featured.childImageSharp.resize}
                keywords={props.data.markdownRemark.frontmatter.keywords}
                pathname={props.location.pathname}
            />
            <div className="container flex-container">
                <div className="post-body">
                    
                    <div className="post-body__info">
                        <h1 className="post-body__title">{props.data.markdownRemark.frontmatter.title}</h1>
                        <span>Published on {props.data.markdownRemark.frontmatter.date}{" "}<span>
                        </span> ({props.data.markdownRemark.timeToRead} min read)</span>
                    </div>
                    <div className="post-body__hero-image">
                        {
                            props.data.markdownRemark.frontmatter.featured && (
                                <Img style={{
                                       height: `40rem`,
                                       width: `100%`
                                    }}
                                    fluid={
                                        props.data.markdownRemark.frontmatter.featured.childImageSharp.fluid
                                    }
                                    alt={props.data.markdownRemark.frontmatter.title}
                                />
                            )
                        }
                    </div>
                   <div className="post-body__content"
                        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
                    >
                    </div>
                </div>
                <AdComponent/>
            </div>
        </Layout>
    )
}

export default BlogPost