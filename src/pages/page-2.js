import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Rand from "../components/registrylink"

const SecondPage = () => {
  return (
    <Layout>
      <SEO title="Registro" />
      <div className="header">
        <h1>PAGINA DEL LINK</h1>
      </div>
      <button
        className="kuai__amount"
        onClick={() => (document.getElementById("demo").innerText = Rand())}
      >
        GenerarLink
      </button>
      <div className="kuai__amount" id="demo"></div>
    </Layout>
  )
}

export default SecondPage
