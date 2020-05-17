import React from "react"
import PropTypes from "prop-types"

import kebabCase from "lodash/kebabCase"

import { useStaticQuery, Link, graphql } from "gatsby"

import "./taglist.style.scss"


const TagsList = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `
    )
    return (
        <div className="taglist">
            <h2>Topics : </h2>
            <ul className="tags">
                {data.allMarkdownRemark.group.map(tag => (
                    <li key={tag.fieldValue} className="tag">
                        <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                            {tag.fieldValue} ({tag.totalCount})
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

    )
}



TagsList.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            group: PropTypes.arrayOf(
                PropTypes.shape({
                    fieldValue: PropTypes.string.isRequired,
                    totalCount: PropTypes.number.isRequired,
                }).isRequired
            ),
        }),
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                title: PropTypes.string.isRequired,
            }),
        }),
    }),
}

export default TagsList
