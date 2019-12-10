import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import useHomeInfo from "../hooks/use-home-page"

const HomePage = () => {
  const { frontmatter, rawMarkdownBody } = useHomeInfo()
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <div className="header">
          <h1>Welcome to {frontmatter.title}</h1>
        </div>
        <div className="start">
          {" "}
          <pre>{rawMarkdownBody}</pre>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
