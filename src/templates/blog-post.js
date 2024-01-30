import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import "./blog-post.css"
import Prism from "prismjs";

import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-toml';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-csharp';

import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/themes/prism-okaidia.css';
import CopyIcon from "../images/copy.svg";
import { StaticImage } from "gatsby-plugin-image"

const PreWithCopy = ({ children }) => {
  const ref = React.useRef();
  const onClick = () => {
    navigator.clipboard.writeText(ref.current.children[0].textContent.trimRight('\n'));
  }
  return (
    <pre ref={ref} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', overflow: 'visible' }}>
      {children}
      <button class="tooltip">
        <CopyIcon onClick={onClick} className="copyIcon" />
        <span class="tooltiptext">Copied!</span>
      </button>
    </pre>
  );
}

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
  pre: ({ children }) => <PreWithCopy>{children}</PreWithCopy>,
};

const PageTemplate = (props) => {
  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  const { pageContext, children } = props;
  const { frontmatter } = pageContext;
  const formattedDate = new Date(Date.parse(frontmatter.date)).toLocaleString("de-DE", { day: "2-digit", year: "numeric", month: "long" });
  return <Layout bgColor={"rgb(206, 206, 206)"}>
    <Seo title={frontmatter.title} />
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ marginBottom: 0, textAlign: 'center' }}>{frontmatter.title}</h1>
      <h3 style={{ marginTop: 0, textAlign: 'center', fontWeight: 'normal' }}>{formattedDate}</h3>
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
        date
        title
        description
      }
    }
  }
`;

export default PageTemplate
