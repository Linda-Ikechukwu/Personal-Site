import React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function MetaData({ description, lang, meta, image: metaImage, title, pathname, keywords }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
            paymentPointer
          }
        }
      }
    `
  )

  const metaDescription = description || data.site.siteMetadata.description
  const image =
    metaImage && metaImage.src
      ? `${data.site.siteMetadata.siteUrl}${metaImage.src}`
      : null
  const canonical = pathname
    ? `${data.site.siteMetadata.siteUrl}${pathname}`
    : null
  const metaKeyword = keywords || data.site.siteMetadata.keywords
  const paymentPointer = data.site.siteMetadata.paymentPointer

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "keywords",
          content: metaKeyword,
        },
        {
          name: `monetization`,
          content: paymentPointer,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: data.site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaImage
            ? [
                {
                  property: "og:image",
                  content: image,
                },
                {
                  property: "og:image:width",
                  content: metaImage.width,
                },
                {
                  property: "og:image:height",
                  content: metaImage.height,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(meta)}
    />
  )
}

MetaData.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

MetaData.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  pathname: PropTypes.string,
}

export default MetaData