const path = require("path");
const _ = require("lodash");




//Generate slug for blog posts path.
exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions; 
    let slug;
    if (node.internal.type === "MarkdownRemark") {
        slug = path.basename(node.fileAbsolutePath, ".md");
        createNodeField({
            node,
            name: "slug",
            value: slug,
        })
        console.log(slug);
    }
}



//Create pages and coresponding url for each markdown file.
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const response = await graphql(`
      query {
        site {
          siteMetadata {
            domain: siteUrl
          }
        }
        allMarkdownRemark (sort:{ order: ASC, fields: [frontmatter___date]}){
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
                title
              }
            }
          }
          
        }

        tagsGroup: allMarkdownRemark(limit: 2000) {
            group(field: frontmatter___tags) {
              fieldValue
            }
        }
      }
    `)

    const articles = response.data.allMarkdownRemark.edges;

    articles.forEach(({node},index) => {
        createPage({
            path: `/blog/${node.fields.slug}`,
            component: path.resolve("./src/templates/blog-post.js"),
            context: {
                slug: node.fields.slug,
                prev: index === 0 ? null : articles[index - 1].node,
                next: index === articles.length - 1 ? null : articles[index + 1].node
            },
        })
    })

    // Extract tag data from query and create page
    response.data.tagsGroup.group.forEach(tag => {
        createPage({
            path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
            component: path.resolve("./src/templates/tags.js"),
            context: {
                tag: tag.fieldValue,
            },
        })
    })
}