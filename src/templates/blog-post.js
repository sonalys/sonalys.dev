import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import PrismSyntaxHighlight from "../components/prism-syntax-highlight";

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
  },
  // pre: ({children, className}) => { return (<div className="code-container"><pre>{children}</pre></div>) },
  code: ({children, className}) => <PrismSyntaxHighlight className={className ?? "language-rust"}>{children}</PrismSyntaxHighlight>,
};

const PageTemplate = (props) => {
  const { pageContext, children } = props;
  const { frontmatter } = pageContext;
  return <Layout>
    <Seo title={frontmatter.title} />
    <div style={{display: 'flex', flexDirection: 'column', placeItems: 'center'}}>
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
