import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

import MetaData from "../components/metadata"

const NotFound = (props) => {
    return (
        <Layout>
            <MetaData
                title="Linda's Blog: Page Not Found"
                description="Explore Articles on Frontend Development, Cloud Technologies and Dev Life written by Linda Ikechukwu"
                //image={props.data.markdownRemark.frontmatter.featured.childImageSharp.resize}
                pathname={props.location.pathname}
            />
            <div className="container">
                <div className="not-found">
                    <h1>Oops!! Page Not Found</h1>
                    <p>
                        <Link to="/blog/">Why Not Check some latest articles?</Link>
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default NotFound