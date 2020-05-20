/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Linda Ikechukwu`,
    description: `Welcome to Linda Ikechukwu's site. Linda is a driven Community Manager, a Software Developer focused on Frontend and Cloud Technologies from Lagos, Nigeria`,
    author: `Linda Ikechukwu`,
    keywords: `Linda Ikechukwu, Nigerian Female Software Developer, PH School Of AI, Frontend Developer, Javascript Developer in Nigeria `,
    siteUrl: `https://your-site.com/`
  },
  
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-dark-mode`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Rosario,  Ribeye Marrow"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "All About Linda",
        short_name: "allaboutlinda.com",
        start_url: "/",
        background_color: "#232946",
        theme_color: "#232946",
        display: "standalone",
        icon: "static/icon.jpg" // This path is relative to the root of the site.
      }
    }
  ],
}
