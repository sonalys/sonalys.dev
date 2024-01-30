import * as React from "react"

import Header from "./header"
import "./layout.css"

const Layout = ({ children, bgColor }) => {
  return (
    <div style={{background: bgColor ?? 'white'}}>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
          background: 'white'
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
        </footer>
      </div>
    </div>
  )
}

export default Layout
