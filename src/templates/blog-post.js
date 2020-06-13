import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Disqus } from 'gatsby-plugin-disqus'

import Layout from "../components/layout"
import MetaData from "../components/metadata"
import AdComponent from "../components/ad/ad.component"
import ShareButtons from "../components/share-buttons/share.component"
import BlogTagline from "../components/blog-tagline/blog-tagline.component"
import SubscriptionForm from "../components/subscription-form/subscription-form.component"


import "../components/posts/posts.style.scss"


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        tags
        keywords
        description
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
    const title = "Read this Article by Linda Ikechukwu on " + props.data.markdownRemark.frontmatter.title;
    const url = props.location.href;
    const twitterHandle = "_MsLinda";
    const tags = props.data.markdownRemark.frontmatter.tags;

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
    
    //For disquss comments

    let disqusConfig = {
        identifier: props.data.markdownRemark.frontmatter.title,
        title: props.data.markdownRemark.frontmatter.title,
    }

    return (

        <Layout dark>
            <MetaData
                title={props.data.markdownRemark.frontmatter.title}
                description={props.data.markdownRemark.frontmatter.description || props.data.markdownRemark.excerpt}
                image={props.data.markdownRemark.frontmatter.featured.childImageSharp.resize}
                keywords={props.data.markdownRemark.frontmatter.keywords}
                pathname={props.location.pathname}
                
            />
            <BlogTagline/>
            <div className="container">
                
                <div className="flex-container">
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
                            <span>If you found this article helpful,please share it:</span> 
                            <ShareButtons title={title} url={url} twitterHandle={twitterHandle} tags={tags}/>
                        </div>
                        <div>
                            <SubscriptionForm></SubscriptionForm>
                        </div>
                        <div className="post-body__links">
                            {prev && (
                                <div>
                                    <span><Link to={prev.url}>⇦ Previous Post</Link></span>
                                    <h3><Link to={prev.url}>{prev.title}</Link></h3>
                                </div>
                            )}
                            {next && (
                                <div>
                                    <span><Link to={next.url}>Next Post ⇨</Link></span>
                                    <h3><Link to={next.url}>{next.title}</Link></h3>
                                </div>
                            )}
                        </div>
                        <div className="post-body__comment">
                            <Disqus config={disqusConfig} />
                        </div>
                    </div>
                    <div className="sidebar">
                        <AdComponent
                            image="/ztm.png"
                            alt="Zero to Mastery Academy Logo"
                            description="Avoid Uncertainties and the Tutorial loophole. Learn to Code the right way, using the same resources I used and land a high 
                               paying job in less than a year for less than $300. Use my coupon code <span>FRIENDS10</span> for 10% off membership fee."
                            link="https://academy.zerotomastery.io/p/academy?affcode=441520_tjxt0mkj"
                            cto="Join the ZTM Academy Now!"
                        ></AdComponent>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default BlogPost