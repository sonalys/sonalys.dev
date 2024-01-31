import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { graphql } from "gatsby"

const IndexPage = () => {
  const response = graphql`
      query {
        allMdx {
          nodes {
            frontmatter {
              title
              slug
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }`;
  console.log(response);
  return <Layout>
    <div className={styles.textCenter}>
      <h1 style={{ marginBottom: 0 }}>Blog</h1>
      {/* {allMdx.nodes.forEach(({frontmatter}) => <p>aa {frontmatter.title}</p>)} */}
    </div>
  </Layout>
}

export const Head = () => <Seo title="Blog" />

export default IndexPage
