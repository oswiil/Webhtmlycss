import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import OpenSite from "../components/regostylinks"

const SecondPage = () => {
  return (
    <Layout>
      <SEO title="Registro" />
      <div className="header">
        <h1>PAGINA DEL LINK</h1>
      </div>

      <div className="kuai__amount">
        <OpenSite></OpenSite>
      </div>
    </Layout>
  )
}

export default SecondPage
