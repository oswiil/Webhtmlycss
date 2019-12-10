import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="header">
      <h1>PAGINA DEL LINK</h1>
    </div>
    <div className="start">
      <p>Welcome to page 2 </p>
    </div>
  </Layout>
)

export default SecondPage
