import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react";

const shortCodes = {
  ol: (props) => {
    return (
      <ul className="list-decimal">
        {props.children}
      </ul>
    );
  },
  ul: (props) => {
    return (
      <ul className="list-disc pl-8 mb-5 text-lg">
        {props.children}
      </ul>
    );
  }
};

const PageTemplate = ({ pageContext, children }) => {
  const { frontmatter } = pageContext;
  return <Layout>
    <Seo title={frontmatter.title} />
    <div className={styles.textCenter}>
      <h1>{frontmatter.title}</h1>
      <MDXProvider components={shortCodes}>
        {children}
      </MDXProvider>
    </div>
  </Layout>
}

export const query = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: {eq: $id}) {
      id
      frontmatter {
        date(formatString: "YYYY MM Do")
        title
        author
        authorAvatar
        description
        embeddedImagesRemote
        embeddedImagesLocal
      }
    }
  }
`;

export default PageTemplate
