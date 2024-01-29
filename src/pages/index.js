import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Timeline from "../components/timeline"

const moreLinks = [
  { icon: "https://www.linkedin.com/favicon.ico", text: "Linkedin", url: "https://www.linkedin.com/in/alysson-ribeiro" },
  { icon: "https://github.com/favicon.ico", text: "Github", url: "https://github.com/sonalys" },
  { icon: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico", text: "Contact", url: "mailto:me@sonalys.dev" },
]

const utmParameters = ``

const SocialLink = ({ link }) => {
  return <a href={`${link.url}${utmParameters}`} style={{ display: 'inline-flex', textDecoration: 'none' }}>
    {link.icon && <img src={`${link.icon}`} alt="" height='20px' style={{ marginBottom: 0, marginRight: 3 }} />}
    {link.text}
  </a>
}

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <h1 style={{ marginBottom: 0 }}>Alysson Ribeiro</h1>
      <h2 style={{ marginTop: 0 }}>Software Engineer</h2>
      <p>
        Hello, welcome!
        Here you can find more information about me and my experience, as well as some occasional blog posts.
      </p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
        {moreLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <SocialLink link={link} />
            {i !== moreLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
      </div>
      <div style={{marginTop: 20}}>
        <Timeline />
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
