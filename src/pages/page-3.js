import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page tree" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <p>fuck off</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage
