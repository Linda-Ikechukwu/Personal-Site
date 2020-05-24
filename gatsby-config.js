/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Linda Ikechukwu`,
    description: `Welcome to Linda Ikechukwu's site. Linda is a Software Developer focused on Frontend and Cloud Technologies from Lagos, Nigeria`,
    author: `Linda Ikechukwu`,
    keywords: `Linda Ikechukwu, Nigerian Female Software Developer, PH School Of AI, Frontend Developer, Javascript Developer in Nigeria `,
    siteUrl: `https://www.codewithlinda.com/`
  },
  
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-feed`,
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
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              theme: 'night-owl'
            }
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "All About Linda",
        short_name: "codewithlinda.com",
        start_url: "/",
        background_color: "#232946",
        theme_color: "#232946",
        display: "standalone",
        icon: "static/icon.jpg" // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.example.com`,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-167406817-1",
      },
    },

  ],
}
