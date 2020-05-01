import React from "react"

import Layout from "../components/layout"
import Posts from "../components/posts/posts.component"
import MetaData from "../components/metadata"
import TagList from "../components/taglist/taglist.component"


const Blog = (props) => {

  return (
    <Layout>
      <MetaData
        title="Linda's Blog"
        description="Explore Articles on Frontend Development, Cloud Technologies and Dev Life written by Linda Ikechukwu"
        //image={props.data.markdownRemark.frontmatter.featured.childImageSharp.resize}
        pathname={props.location.pathname}
        keywords="Frontend Blog, Javascript Articles, Technical Wrriter in Nigeria, Devops Articles Nigeria"
      />
      <div className="container flex-container">
        <Posts />
        <TagList/>
      </div>
    </Layout>
  )
}

export default Blog;