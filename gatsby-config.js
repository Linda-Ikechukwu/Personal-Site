/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Linda Ikechukwu's Site`,
    description: `Linda Ikechukwu is a Software Developer with a focus on Frontend and Cloud Technologies from Lagos, Nigeria`,
    author: `Linda Ikechukwu`,
  },
  
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Rosario,  Ribeye Marrow"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
  
  ],
}
