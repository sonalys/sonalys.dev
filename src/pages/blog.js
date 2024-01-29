import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
// import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  // const { allMdx } = useStaticQuery(
  //   graphql`
  //     query {
  //       allMdx {
  //         nodes {
  //           frontmatter {
  //             title
  //             slug
  //             date(formatString: "MMMM DD, YYYY")
  //           }
  //         }
  //       }
  //     }`
  // )
  return <Layout>
    <div className={styles.textCenter}>
      <h1 style={{ marginBottom: 0 }}>{""}</h1>
      {/* <BlogPage /> */}
    </div>
  </Layout>
}

export const Head = () => <Seo title="Blog" />

export default IndexPage
