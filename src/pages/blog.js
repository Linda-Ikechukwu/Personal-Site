import React from "react"

import Layout from "../components/layout"
import Posts from "../components/posts/posts.component"
import MetaData from "../components/metadata"
import TagList from "../components/taglist/taglist.component"
import BlogTagline from "../components/blog-tagline/blog-tagline.component"


const Blog = (props) => {

  return (
    <Layout>
      <MetaData
        title="Linda Ikechukwu | Blog"
        description="Articles on Frontend Development, Cloud Technologies and Dev Life written by Linda Ikechukwu"
        //image={props.data.markdownRemark.frontmatter.featured.childImageSharp.resize}
        pathname={props.location.pathname}
        keywords="Frontend Blog, Javascript Articles, Technical Wrriter in Nigeria, Devops Articles Nigeria, CSS Tricks, Linda Ikechukwu"
      />
      <div className="container ">
        <BlogTagline />
        <div className="flex-container">
          <Posts />
          <div className="sidebar">
            <TagList />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blog;