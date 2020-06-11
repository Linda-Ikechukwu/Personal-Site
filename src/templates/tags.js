import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Button from "../components/button/button.component";
import Layout from "../components/layout"
import MetaData from "../components/metadata"
import TagList from "../components/taglist/taglist.component"
import AdComponent from "../components/ad/ad.component"

import "../components/posts/posts.style.scss"

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
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
          id
        }
      }
    }
  }
`

const Tags = ({ pageContext, data, location }) => {
    const { tag } = pageContext
    const { totalCount } = data.allMarkdownRemark
    const tagHeader = `${totalCount} Article${
        totalCount === 1 ? "" : "s"
        } on "${tag}"`
    return (
        <Layout>
            <MetaData
                title= {`Articles on ${tag} from CodeWithLinda`}
                description={`Explore Articles on ${tag} written by Linda Ikechukwu`}
                pathname={location.pathname}
            />
            <div className="container">
                <h1>{tagHeader}</h1>
                <div className="flex-container">
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
                                                    fluid={edge.node.frontmatter.featured.childImageSharp.fluid}
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
                                            Posted on {edge.node.frontmatter.date} <span> / </span>{" "}
                                            {edge.node.timeToRead} min read
                                </span>
                                    </div>
                                    <p className="post__excerpt">{edge.node.excerpt}</p>
                                    <Button small><Link to={`/blog/${edge.node.fields.slug}/`}>Read More </Link></Button>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="sidebar">
                        <TagList />
                        <AdComponent
                            image="/ztm.png"
                            alt="Zero to Mastery Academy Logo"
                            description="Avoid Uncertainties and the Tutorial loophole. Learn to Code the right way, become a fullstack developer and land a high paying job in less than a year for less than $300. Use my coupon code <span>FRIENDS10</span> for 10% off membership fee"
                            link="https://academy.zerotomastery.io/p/academy?affcode=441520_tjxt0mkj"
                            cto="Join the ZTM Academy Now!"
                        ></AdComponent>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


Tags.propTypes = {
    pageContext: PropTypes.shape({
        tag: PropTypes.string.isRequired,
    }),
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            totalCount: PropTypes.number.isRequired,
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            title: PropTypes.string.isRequired,
                        }),
                        fields: PropTypes.shape({
                            slug: PropTypes.string.isRequired,
                        }),
                    }),
                }).isRequired
            ),
        }),
    }),
}
export default Tags
