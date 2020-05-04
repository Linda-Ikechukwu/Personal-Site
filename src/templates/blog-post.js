import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import MetaData from "../components/metadata"
import AdComponent from "../components/ad/ad.component"
import ShareButtons from "../components/share-buttons/share.component"

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
    
    //For the social share buttons
    const title ="Great Article by Linda Ikechukwu on " + props.data.markdownRemark.frontmatter.title;
    const url = props.location.href;
    
    //For the previous and next blog post link
    const prev = props.pageContext.prev ?
        {
            url: `/blog/${props.pageContext.prev.fields.slug}`,
            title: props.pageContext.prev.frontmatter.title
        }
        : null;

    const next = props.pageContext.next
        ? {
            url: `/blog/${props.pageContext.next.fields.slug}`,
            title: props.pageContext.next.frontmatter.title
        }
        : null

    

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
                    <div className="post-body__share-buttons">
                        <span>Share this Post:</span> <ShareButtons title={title} url={url}/>
                    </div>
                    <div className="post-body__links">
                        {prev && (
                            <div>
                                <span>⇦ Previous Post</span>
                                <h3><Link to={prev.url}>{prev.title}</Link></h3>
                            </div>
                        )}
                        {next && (
                            <div>
                                <span>Next Post ⇨</span>
                                <h3><Link to={next.url}>{next.title}</Link></h3>
                            </div>
                        )}
                    </div>
                </div>
                <AdComponent />
            </div>
        </Layout>
    )
}

export default BlogPost