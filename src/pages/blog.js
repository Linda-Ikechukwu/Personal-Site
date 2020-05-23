import React from "react"

import Layout from "../components/layout"
import Posts from "../components/posts/posts.component"
import MetaData from "../components/metadata"
import TagList from "../components/taglist/taglist.component"
import BlogTagline from "../components/blog-tagline/blog-tagline.component"

//For code syntax highlighting
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();


const Blog = (props) => {

  return (
    <Layout dark>
      <MetaData
        title="CodeWithLinda"
        description="Beginner Friendly Articles on Frontend Developement, Cloud, Dev Life and more written by Linda Ikechukwu"
        //image={props.data.markdownRemark.frontmatter.featured.childImageSharp.resize}
        pathname={props.location.pathname}
        keywords="Frontend Blog, Javascript Articles, Technical Wrriter in Nigeria, Devops Articles Nigeria, CSS Tricks, Linda Ikechukwu, codeswithlinda"
      />
      <BlogTagline />
      <div className="container ">
        
        <div className="flex-container reverse-flex">
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