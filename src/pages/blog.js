import React from "react"
import { graphql, Link } from 'gatsby'

import Layout from "../components/layout"
import Posts from "../components/posts/posts.component"
import PopularPosts from "../components/posts/popular-posts.component"
import MetaData from "../components/metadata"
import BlogTagline from "../components/blog-tagline/blog-tagline.component"
import TagList from "../components/taglist/taglist.component"



export const query = graphql`
        query ($skip: Int!, $limit: Int!){
          allMarkdownRemark(
            sort: { fields: frontmatter___date, order: DESC }
            limit: $limit
            skip: $skip
            ){
            
            edges {
              node {
                frontmatter {
                  title
                  description
                  tags
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

const Blog = (props) => {


  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()


  return (
    <Layout dark>
      <MetaData
        title="CodeWithLinda"
        description="CodeWithLinda is Linda Ikechukwu's Blog where she writes Beginner Friendly Articles on Frontend Developement, Cloud, Dev Life and more."
        //image={props.data.markdownRemark.frontmatter.featured.childImageSharp.resize}
        pathname={props.location.pathname}
        keywords="CodeWithLinda, Linda Ikechukwu, Frontend Blog, Javascript Articles, Technical Writer in Nigeria, Devops Articles Nigeria, CSS Tricks, Linda Ikechukwu, codeswithlinda"
      />
      <main className="container ">

        <div className="flex-container">
          <aside className="sidebar">
            <div className="sidebar-fixed sidebar-fixed-left">
              <BlogTagline />
              <TagList />
            </div>
          </aside>
          <div>
            
            {
              currentPage === 1 &&  <PopularPosts/>
            }
            {
              currentPage === 1 && <h1 className="u-bottom">Others:</h1>
            }
            <Posts data={props.data} />

            <div className="pagination">

              {!isFirst && (
                <Link to={`blog/${prevPage}`} rel="prev" className="pagination-link">
                  ← Previous Page
                </Link>
              )}

              <span>{`Page ${currentPage} of ${numPages}`}</span>
              
              {!isLast && (
                <Link to={`blog/${nextPage}`} rel="next" className="pagination-link">
                  Next Page →
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Blog;