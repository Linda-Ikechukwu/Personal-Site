const path = require("path");
const _ = require("lodash");

//Generate slug for bog posts path.
exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions; let slug;
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
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
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
    response.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
            path: `/blog/${edge.node.fields.slug}`,
            component: path.resolve("./src/templates/blog-post.js"),
            context: {
                slug: edge.node.fields.slug,
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